import { useState } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft,Coffee,MailCheck,AlertCircle } from 'lucide-react';
import { authApi } from '../../api/client.js';
import { useAuthStore } from '../../app/store.js';
import { Button,Input } from '../../components/ui.jsx';
const schema=z.object({email:z.email('Enter a valid email address.')});
export default function ForgotPage(){
 const user=useAuthStore((s)=>s.user);const[sent,setSent]=useState(false);const[error,setError]=useState('');
 const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm({resolver:zodResolver(schema)});
 if(user)return <Navigate to="/" replace/>;
 const submit=async({email})=>{try{await authApi.forgotPassword(email);setSent(true);}catch(reason){setError(reason.message);}};
 return <main className="auth-page"><section className="auth-card"><Link to="/login" className="back-link"><ArrowLeft size={16}/>Back to sign in</Link><div className="forgot-icon">{sent?<MailCheck size={24}/>:<Coffee size={24}/>}</div><span className="eyebrow">ACCOUNT HELP</span><h1>{sent?'Check your inbox':'Reset your password'}</h1><p>{sent?'A mock reset email would be sent if this address belongs to a demo account.':'Enter your account email and we will prepare a mock reset link.'}</p>{!sent&&<form onSubmit={handleSubmit(submit)} className="forgot-form" noValidate><Input label="Email address" type="email" placeholder="you@coffeeblend.com" error={errors.email?.message} {...register('email')}/>{error&&<div className="inline-alert" role="alert"><AlertCircle size={15}/><span>{error}</span></div>}<Button type="submit" loading={isSubmitting}>Send reset link</Button></form>}<Link to="/login" className="login-return">Return to sign in</Link></section></main>;
}
