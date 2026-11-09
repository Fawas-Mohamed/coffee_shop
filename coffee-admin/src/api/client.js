import { createRepository,withLatency } from './repositories.js';
import { createMediaRepository } from './mediaRepository.js';
import { readCollection,readMockConfig,writeMockConfig,resetData,exportData,importData } from './mock/storage.js';

export const apiMode=import.meta.env.VITE_API_MODE||'mock';
const baseUrl=(import.meta.env.VITE_API_BASE_URL||'/api').replace(/\/+$/,'');
const isHttp=apiMode==='http';

function listPath(name,params={}){
  const query=new URLSearchParams();
  for(const key of ['page','pageSize','search','sortBy','sortDir','type']){
    const value=params[key];
    if(value!==undefined&&value!==null&&value!=='')query.set(key,String(value));
  }
  for(const [key,value] of Object.entries(params.filters||{})){
    if(value!==undefined&&value!==null&&value!=='')query.set('filter['+key+']',String(value));
  }
  const encoded=query.toString();
  return '/'+name+(encoded?'?'+encoded:'');
}
async function request(path,options={}){
  const isForm=typeof FormData!=='undefined'&&options.body instanceof FormData;
  const headers=new Headers(options.headers||{});
  headers.set('Accept','application/json');
  if(options.body!==undefined&&!isForm&&!headers.has('Content-Type'))headers.set('Content-Type','application/json');
  const response=await fetch(baseUrl+path,{...options,headers,credentials:'include'});
  if(response.status===204)return null;
  const contentType=response.headers.get('content-type')||'';
  const body=contentType.includes('json')?await response.json().catch(()=>null):await response.text().catch(()=> '');
  if(!response.ok){
    const message=body?.message||body?.error?.message||body?.error||'The server could not complete this request.';
    throw Object.assign(new Error(String(message)),{status:response.status,code:body?.code||body?.error?.code||'HTTP_ERROR',details:body?.details||body?.errors});
  }
  return body;
}
function resource(name){
  const mock=createRepository(name);
  if(!isHttp)return mock;
  return{
    list:(params={})=>request(listPath(name,params)),
    get:(id)=>request('/'+name+'/'+encodeURIComponent(String(id))),
    create:(data)=>request('/'+name,{method:'POST',body:JSON.stringify(data)}),
    update:(id,data)=>request('/'+name+'/'+encodeURIComponent(String(id)),{method:'PATCH',body:JSON.stringify(data)}),
    remove:(id)=>request('/'+name+'/'+encodeURIComponent(String(id)),{method:'DELETE'}),
  };
}
export const productsApi=resource('products');
export const categoriesApi=resource('categories');
export const ordersApi=resource('orders');
export const customersApi=resource('customers');
export const bookingsApi=resource('bookings');
export const notificationsApi=resource('notifications');
export const messagesApi=resource('messages');
export const activityApi=resource('activity');
export const usersApi=resource('users');
export const mediaApi=isHttp?{
  ...resource('media'),
  create(input){
    if(!input.file)return request('/media',{method:'POST',body:JSON.stringify(input)});
    const form=new FormData();
    form.append('file',input.file);
    for(const key of ['name','type','alt'])if(input[key]!==undefined)form.append(key,String(input[key]));
    return request('/media',{method:'POST',body:form});
  },
}:createMediaRepository();
export const couponsApi=resource('coupons');
export const promoBannersApi=resource('promoBanners');
export const blogPostsApi=resource('blogPosts');
export const blogDraftsApi=resource('blogDrafts');
export const blogCommentsApi=resource('blogComments');
export const reviewsApi=resource('reviews');
export const servicesApi=resource('services');
export const pricingApi=resource('pricing');
export const heroSlidesApi=resource('heroSlides');
export const siteContentApi=resource('siteContent');
export const siteSettingsApi=resource('siteSettings');

export const authApi={
  async login({email,password,remember}){
    if(isHttp){
      const result=await request('/auth/login',{method:'POST',body:JSON.stringify({email,password,remember})});
      return result?.user||result?.data?.user||result;
    }
    const users=readCollection('users');
    const user=users.find((item)=>item.email.toLowerCase()===email.toLowerCase()&&item.password===password&&item.active);
    await withLatency(()=>null);
    if(!user)throw Object.assign(new Error('Email or password is incorrect.'),{code:'INVALID_CREDENTIALS',status:401});
    const lastLogin=new Date().toISOString();
    await usersApi.update(user.id,{lastLogin});
    return{...Object.fromEntries(Object.entries(user).filter(([key])=>key!=='password')),lastLogin};
  },
  async logout(){
    if(isHttp)await request('/auth/logout',{method:'POST'});
  },
  async forgotPassword(email){
    if(isHttp)return request('/auth/forgot-password',{method:'POST',body:JSON.stringify({email})});
    await withLatency(()=>null);
    return{accepted:true,email};
  },
  async changePassword({userId,currentPassword,newPassword}){
    if(isHttp)return request('/auth/change-password',{method:'POST',body:JSON.stringify({currentPassword,newPassword})});
    const result=await usersApi.list({pageSize:500});
    const user=(result.items||result).find((item)=>item.id===userId);
    if(!user||user.password!==currentPassword)throw new Error('Current password is incorrect.');
    await usersApi.update(userId,{password:newPassword});
    return{updated:true};
  },
};
export const mockSettingsApi={
  async get(){return withLatency(()=>readMockConfig());},
  async update(changes){return withLatency(()=>writeMockConfig(changes));},
  async reset(){return withLatency(()=>resetData());},
  async exportAll(){return withLatency(()=>exportData());},
  async importAll(text){return withLatency(()=>importData(text));},
};