const DB_NAME='coffee-admin-media';
const STORE='assets';
let dbPromise;
const objectUrls=new Map();
function openDb(){if(!('indexedDB'in window))return Promise.reject(new Error('This browser does not support local media storage.'));
 if(dbPromise)return dbPromise;
 dbPromise=new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>request.result.createObjectStore(STORE,{keyPath:'id'});request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});
 return dbPromise;
}
async function transact(mode,operation){const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode);const store=tx.objectStore(STORE);let request;try{request=operation(store);}catch(error){reject(error);return;}tx.oncomplete=()=>resolve(request?.result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}
function publicAsset(asset){let url=objectUrls.get(asset.id);if(!url&&asset.blob){url=URL.createObjectURL(asset.blob);objectUrls.set(asset.id,url);}const {blob,...rest}=asset;return {...rest,url:url||asset.url||''};}
export async function listMedia(){const rows=await transact('readonly',(store)=>store.getAll());return rows.map(publicAsset).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));}
export async function saveMedia(asset){await transact('readwrite',(store)=>store.put(asset));return publicAsset(asset);}
export async function getMedia(id){const row=await transact('readonly',(store)=>store.get(id));return row?publicAsset(row):null;}
export async function updateMedia(id,changes){const row=await transact('readonly',(store)=>store.get(id));if(!row)throw Object.assign(new Error('Media item was not found.'),{status:404});return saveMedia({...row,...changes});}
export async function deleteMedia(id){const row=await transact('readonly',(store)=>store.get(id));await transact('readwrite',(store)=>store.delete(id));const url=objectUrls.get(id);if(url)URL.revokeObjectURL(url);objectUrls.delete(id);return row?publicAsset(row):null;}
