import { Navigate,Outlet,useLocation } from 'react-router-dom';
import { useAuthStore } from '../../app/store.js';
import { canAccess } from '../../app/permissions.js';
export function RequireAuth(){const user=useAuthStore((s)=>s.user);const location=useLocation();return user?<Outlet/>:<Navigate to="/login" replace state={{from:location.pathname}}/>;}
export function RequireRole({section,children}){const user=useAuthStore((s)=>s.user);return canAccess(user?.role,section)?children:<main className="auth-page"><section className="auth-card"><span className="eyebrow">ACCESS RESTRICTED</span><h1>This space is not available to your role.</h1><p>Ask an administrator if you need access to this part of Coffee Blend.</p><a className="button button-primary" href={user?.role==="staff"?"/products":"/"}>Return to workspace</a></section></main>;}


