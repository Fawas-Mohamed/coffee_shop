import { create } from 'zustand';
import { persist,createJSONStorage } from 'zustand/middleware';
import { authApi } from '../api/client.js';
const sessionStorageAdapter={
 getItem(name){return window.sessionStorage.getItem(name)||window.localStorage.getItem(name)||null;},
 setItem(name,value){
  const remember=JSON.parse(value)?.state?.remember!==false;
  if(remember){window.sessionStorage.removeItem(name);window.localStorage.setItem(name,value);}
  else{window.localStorage.removeItem(name);window.sessionStorage.setItem(name,value);}
 },
 removeItem(name){window.localStorage.removeItem(name);window.sessionStorage.removeItem(name);},
};
export const useAuthStore=create(persist((set)=>({
 user:null,remember:true,idleTimeoutMinutes:30,
 async signIn(values){const user=await authApi.login(values);set({user,remember:Boolean(values.remember)});return user;},
 async signOut(){set({user:null});try{await authApi.logout();}catch{}},
 setIdleTimeout(value){set({idleTimeoutMinutes:Number(value)});},
 updateProfile(changes){set((state)=>({user:state.user?{...state.user,...changes}:null}));},
}),{name:'coffee-admin-session',storage:createJSONStorage(()=>sessionStorageAdapter),partialize:(state)=>({user:state.user,remember:state.remember,idleTimeoutMinutes:state.idleTimeoutMinutes})}));
export const useUiStore=create(persist((set)=>({
 theme:'system',sidebarCollapsed:false,
 setTheme(theme){set({theme});},
 toggleSidebar(){set((state)=>({sidebarCollapsed:!state.sidebarCollapsed}));},
}),{name:'coffee-admin-ui',partialize:(state)=>({theme:state.theme,sidebarCollapsed:state.sidebarCollapsed})}));
