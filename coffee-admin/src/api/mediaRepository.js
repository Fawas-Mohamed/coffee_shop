import { listMedia,saveMedia,getMedia,deleteMedia,updateMedia } from './mock/mediaStorage.js';
import { withLatency } from './repositories.js';
const id=()=> 'med-'+globalThis.crypto.randomUUID();
export function createMediaRepository(){return{
 async list({search='',type='all'}={}){await withLatency(()=>null);let items=await listMedia();if(search)items=items.filter((a)=>[a.name,a.alt,a.type].join(' ').toLowerCase().includes(search.toLowerCase()));if(type!=='all')items=items.filter((a)=>a.type===type);return{items,total:items.length};},
 async get(assetId){await withLatency(()=>null);const asset=await getMedia(assetId);if(!asset)throw Object.assign(new Error('Media item was not found.'),{status:404});return asset;},
 async create(input){await withLatency(()=>null);const file=input.file;const asset={id:id(),name:input.name||file?.name||'Untitled media',type:input.type||file?.type?.split('/')[0]||'file',mime:file?.type||'application/octet-stream',size:file?.size||0,alt:input.alt||'',usedIn:input.usedIn||[],createdAt:new Date().toISOString(),blob:file||null};return saveMedia(asset);},
 async update(assetId,changes){await withLatency(()=>null);return updateMedia(assetId,changes);},
 async remove(assetId){await withLatency(()=>null);return deleteMedia(assetId);}
};}
