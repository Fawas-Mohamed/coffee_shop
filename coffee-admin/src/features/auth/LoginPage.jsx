import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye,EyeOff,ArrowRight,Coffee,ShieldCheck,AlertCircle } from 'lucide-react';
import { Link,Navigate,useLocation,useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../api/schemas/index.js';
import { useAuthStore } from '../../app/store.js';
import { Button,Input } from '../../components/ui.jsx';
const demos=[['Admin','admin@coffeeblend.com','Admin@123'],['Manager','manager@coffeeblend.com','Manager@123'],['Staff','staff@coffeeblend.com','Staff@123']];
export default function LoginPage(){
 const user=useAuthStore((s)=>s.user);const signIn=useAuthStore((s)=>s.signIn);const location=useLocation();const navigate=useNavigate();
 const[visible,setVisible]=useState(false);const[formError,setFormError]=useState('');
 const{register,handleSubmit,setValue,formState:{errors,isSubmitting}}=useForm({resolver:zodResolver(LoginSchema),defaultValues:{email:'',password:'',remember:true}});
 if(user)return <Navigate to={user.role==='staff'?'/products':'/'} replace/>;
 const submit=async(values)=>{setFormError('');try{const authenticated=await signIn(values);navigate(location.state?.from||(authenticated.role==='staff'?'/products':'/'),{replace:true});}catch(error){setFormError(error.message||'Could not sign in. Please retry.');}};
 return <main className="login-layout"><section className="login-brand-panel"><div className="login-brand"><span className="brand-mark"><Coffee size={19}/></span><span><strong>Coffee Blend</strong><small>ADMIN WORKSPACE</small></span></div><div className="login-story"><span className="eyebrow">PREMIUM COFFEE</span><h1>Your café,<br/>beautifully in <em>sync.</em></h1><p>Thoughtful tools for the people who make every cup count.</p><div className="login-orbit"><span className="orbit-ring ring-one"/><span className="orbit-ring ring-two"/><span className="orbit-cup"><Coffee size={43}/></span><i className="orbit-dot dot-one"/><i className="orbit-dot dot-two"/><i className="orbit-dot dot-three"/></div></div><div className="login-panel-foot"><span>EST. 2018</span><span>MADE WITH CARE, SERVED WITH JOY</span></div></section>
 <section className="login-form-panel"><div className="login-form-wrap"><span className="eyebrow">WELCOME BACK</span><h2>Sign in to your workspace</h2><p className="muted">Choose a demo account below to explore.</p><form className="login-form" onSubmit={handleSubmit(submit)} noValidate>
 <Input label="Email address" type="email" autoComplete="username" placeholder="you@coffeeblend.com" error={errors.email?.message} {...register('email')}/>
 <div className="field"><label htmlFor="password">Password</label><div className="password-wrap"><input id="password" type={visible?'text':'password'} autoComplete="current-password" placeholder="Enter your password" {...register('password')}/><button type="button" className="password-toggle" onClick={()=>setVisible(!visible)} aria-label={visible?'Hide password':'Show password'}>{visible?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>{errors.password&&<small className="field-error">{errors.password.message}</small>}</div>
 <div className="login-options"><label className="check-label"><input type="checkbox" {...register('remember')}/>Remember me</label><Link to="/forgot-password">Forgot password?</Link></div>
 {formError&&<div className="inline-alert" role="alert"><AlertCircle size={15}/><span>{formError}</span></div>}<Button className="login-submit" loading={isSubmitting} type="submit">Sign in <ArrowRight size={16}/></Button>
 </form><div className="demo-accounts"><div className="demo-head"><ShieldCheck size={16}/><strong>Demo access</strong><span>Choose a role</span></div>{demos.map(([role,email,password])=><button key={role} className="demo-row" onClick={()=>{setValue('email',email);setValue('password',password);setFormError('');}}><span className="demo-role">{role}</span><span>{email}</span><small>Fill</small></button>)}</div><p className="login-legal">Coffee Blend admin demo · No real account is created.</p></div></section></main>;
}

