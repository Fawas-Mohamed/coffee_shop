import { useCallback,useEffect,useRef,useState } from 'react';
const cache=new Map();
const listeners=new Map();
export function invalidateQueries(prefix=''){
  for(const key of cache.keys())if(key.startsWith(prefix))cache.delete(key);
  for(const [key,callbacks] of listeners)if(key.startsWith(prefix))callbacks.forEach((callback)=>callback());
}
export function useQuery(key,loader){
  const loaderRef=useRef(loader);
  loaderRef.current=loader;
  const[data,setData]=useState(cache.get(key));
  const[loading,setLoading]=useState(!cache.has(key));
  const[error,setError]=useState(null);
  const load=useCallback(async()=>{
    setLoading(true);setError(null);
    try{const result=await loaderRef.current();cache.set(key,result);setData(result);}
    catch(reason){setError(reason);}
    finally{setLoading(false);}
  },[key]);
  useEffect(()=>{
    let active=true;
    const refresh=()=>{if(active)load();};
    const callbacks=listeners.get(key)||new Set();
    callbacks.add(refresh);listeners.set(key,callbacks);
    if(!cache.has(key))load();
    return()=>{active=false;callbacks.delete(refresh);};
  },[key,load]);
  return{data,loading,error,refetch:load};
}
