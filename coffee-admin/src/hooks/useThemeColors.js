import { useEffect,useState } from 'react';

function readThemeColors(){
  const style=getComputedStyle(document.documentElement);
  const value=(name,depth=0)=>{const raw=style.getPropertyValue(name).trim(),ref=raw.match(/^var\((--[\w-]+)\)$/);return ref&&depth<8?value(ref[1],depth+1):raw;};
  return{
    black:value('--black'),white:value('--white'),gold:value('--gold'),goldHover:value('--gold-hover'),
    goldDeep:value('--gold-deep'),goldTint:value('--gold-tint'),goldSoft:value('--gold-soft'),
    text:value('--text'),textMuted:value('--text-muted'),surface:value('--surface-raised'),border:value('--border'),
    chartSeries:[1,2,3,4,5].map((index)=>value('--chart-series-'+index)),
    success:value('--success'),warning:value('--warning'),danger:value('--danger'),info:value('--info'),
  };
}
export function useThemeColors(){
  const[colors,setColors]=useState(()=>readThemeColors());
  useEffect(()=>{
    const refresh=()=>setColors(readThemeColors());
    refresh();
    const observer=new MutationObserver(refresh);
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    const media=window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change',refresh);
    return()=>{observer.disconnect();media.removeEventListener('change',refresh);};
  },[]);
  return colors;
}