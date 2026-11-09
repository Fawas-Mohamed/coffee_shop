import { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import { ArrowLeft,Printer,RotateCcw,Send } from 'lucide-react';
import { toast } from 'sonner';
import { ordersApi } from '../../api/client.js';
import { useAuthStore } from '../../app/store.js';
import { useQuery } from '../../hooks/useQuery.js';
import { Button,ConfirmDialog,ErrorState,Skeleton,StatusBadge } from '../../components/ui.jsx';
const money=(n)=>Number(n||0).toFixed(2)+' USD';
const next={Pending:['Preparing','Cancelled'],Preparing:['Ready','Cancelled'],Ready:['Completed'],Completed:['Refunded'],Cancelled:[],Refunded:[]};
export default function OrderDetailPage(){
 const {id}=useParams(),user=useAuthStore((s)=>s.user),query=useQuery('order:'+id,()=>ordersApi.get(id));
 const [refund,setRefund]=useState(false),[status,setStatus]=useState(''),[note,setNote]=useState(''),[saving,setSaving]=useState(false);
 const update=async(changes,message)=>{setSaving(true);try{await ordersApi.update(id,changes);await query.refetch();toast.success(message);}catch(e){toast.error(e.message);}finally{setSaving(false);}};
 const changeStatus=async(nextStatus)=>{const o=query.data,history=[...(o.statusHistory||[{status:o.status,at:o.createdAt,by:'System'}]),{status:nextStatus,at:new Date().toISOString(),by:user?.name||'Staff'}];await update({status:nextStatus,paymentStatus:nextStatus==='Refunded'?'Refunded':o.paymentStatus,statusHistory:history},'Order moved to '+nextStatus.toLowerCase());setStatus('');};
 const addNote=async(e)=>{e.preventDefault();if(!note.trim())return;const notes=[...(query.data.internalNotes||[]),{text:note.trim(),by:user?.name||'Staff',at:new Date().toISOString()}];await update({internalNotes:notes},'Internal note added');setNote('');};
 if(query.loading)return <div className="page-content"><Skeleton height={35}/><Skeleton height={300}/></div>;
 if(query.error)return <div className="page-content"><ErrorState message={query.error.message} onRetry={query.refetch}/><Link to="/orders">Back to orders</Link></div>;
 const o=query.data;
 return <div className="page-content order-detail-page"><div className="page-heading"><div><Link to="/orders" className="back-link"><ArrowLeft size={15}/>Orders</Link><h1>Order #{o.number}</h1><p>Placed {new Date(o.createdAt).toLocaleString()}</p></div><div className="heading-actions"><Button variant="secondary" onClick={()=>window.print()}><Printer size={15}/>Print invoice / packing slip</Button><StatusBadge tone={o.status}>{o.status}</StatusBadge></div></div>
 <div className="order-detail-grid"><section className="surface-card order-lines"><div className="card-heading"><div><span className="eyebrow">ORDER ITEMS</span><h2>Items ({o.items?.length||0})</h2></div><span>{o.type}</span></div>{(o.items||[]).map((item,i)=><div className="order-line" key={item.productId+'-'+i}><div><strong>{item.name}</strong><small>{item.quantity} × {money(item.price)}</small></div><strong>{money(item.quantity*item.price)}</strong></div>)}<div className="totals-list"><span>Subtotal <b>{money(o.subtotal)}</b></span><span>Tax <b>{money(o.tax)}</b></span><span>Discount <b>−{money(o.discount)}</b></span><span>Delivery <b>{money(o.shipping)}</b></span><strong>Total <b>{money(o.total)}</b></strong></div><p>Payment: <StatusBadge tone={o.paymentStatus}>{o.paymentStatus}</StatusBadge> · {o.paymentMethod}</p></section>
 <section className="surface-card"><span className="eyebrow">CUSTOMER</span><h2>{o.customerName}</h2><p>{o.customerEmail||'No email on file'}</p><p>{o.customerPhone||'No phone on file'}</p><p>{o.address||'No delivery address'}</p><p>Order type: {o.type}</p><div className="order-controls"><label>Update status<select value={status||o.status} onChange={(e)=>setStatus(e.target.value)}><option value={o.status} disabled>{o.status}</option>{(next[o.status]||[]).map((s)=><option key={s}>{s}</option>)}</select></label>{status&&<Button size="sm" loading={saving} onClick={()=>changeStatus(status)}>Save status</Button>}{o.status==='Completed'&&<Button size="sm" variant="danger" onClick={()=>setRefund(true)}><RotateCcw size={14}/>Refund order</Button>}</div></section>
 <section className="surface-card"><span className="eyebrow">STATUS TIMELINE</span><div className="timeline">{(o.statusHistory||[{status:o.status,at:o.createdAt,by:'System'}]).map((h,i)=><div className="timeline-event" key={i}><i/><span><strong>{h.status}</strong><small>{h.by} · {new Date(h.at).toLocaleString()}</small></span></div>)}</div></section>
 <section className="surface-card"><span className="eyebrow">INTERNAL NOTES</span><h2>Team notes</h2>{(o.internalNotes||[]).map((n,i)=><div className="internal-note" key={i}><p>{n.text}</p><small>{n.by} · {new Date(n.at).toLocaleString()}</small></div>)}<form className="note-form" onSubmit={addNote}><textarea value={note} onChange={(e)=>setNote(e.target.value)} rows="2" placeholder="Add a note for your team..."/><Button size="sm" type="submit" loading={saving}><Send size={14}/>Add note</Button></form></section></div>
 <ConfirmDialog open={refund} onClose={()=>setRefund(false)} onConfirm={async()=>{setRefund(false);await changeStatus('Refunded');}} title="Refund this order?" confirmLabel="Confirm refund">This mock flow will mark the order and its payment as refunded. No real payment is made.</ConfirmDialog></div>;
}

