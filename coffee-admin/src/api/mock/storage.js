import { createSeedData } from './seed.js';
const DATA_KEY='coffee-admin:data:v1';const CONFIG_KEY='coffee-admin:mock-config:v1';
export function readData(){const saved=window.localStorage.getItem(DATA_KEY);if(saved){try{const data=JSON.parse(saved),defaults=createSeedData();let changed=false;for(const [key,value] of Object.entries(defaults)){if(!(key in data)){data[key]=value;changed=true;}}if(changed)writeData(data);return data;}catch{window.localStorage.removeItem(DATA_KEY);}}const seeded=createSeedData();writeData(seeded);return seeded;}
export function writeData(data){window.localStorage.setItem(DATA_KEY,JSON.stringify(data));}
export function readCollection(name){const data=readData();return structuredClone(Array.isArray(data[name])?data[name]:[]);}
export function writeCollection(name,rows){const data=readData();data[name]=structuredClone(rows);writeData(data);}
export function readMockConfig(){const saved=window.localStorage.getItem(CONFIG_KEY);if(!saved)return{simulateLatency:true,simulateErrors:false,errorRate:.12};try{return{simulateLatency:true,simulateErrors:false,errorRate:.12,...JSON.parse(saved)};}catch{return{simulateLatency:true,simulateErrors:false,errorRate:.12};}}
export function writeMockConfig(changes){const next={...readMockConfig(),...changes};window.localStorage.setItem(CONFIG_KEY,JSON.stringify(next));return next;}
export function resetData(){const seed=createSeedData();writeData(seed);return seed;}
export function exportData(){return JSON.stringify({exportedAt:new Date().toISOString(),version:1,data:readData()},null,2);}
export function importData(text){const parsed=JSON.parse(text);const data=parsed?.data||parsed;if(!data||!Array.isArray(data.products)||!Array.isArray(data.orders))throw new Error('This is not a Coffee Blend backup file.');const merged={...createSeedData(),...data};writeData(merged);return merged;}

