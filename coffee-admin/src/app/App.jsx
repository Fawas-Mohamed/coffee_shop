import { lazy,Suspense } from 'react';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppShell from '../components/AppShell.jsx';
import { Skeleton } from '../components/ui.jsx';
import { useAuthStore } from './store.js';
import { RequireAuth,RequireRole } from '../features/auth/RequireAuth.jsx';
const LoginPage=lazy(()=>import('../features/auth/LoginPage.jsx'));
const ForgotPage=lazy(()=>import('../features/auth/ForgotPage.jsx'));
const DashboardPage=lazy(()=>import('../features/dashboard/DashboardPage.jsx'));
const ComponentsPage=lazy(()=>import('../features/components/ComponentsPage.jsx'));
const ProfilePage=lazy(()=>import('../features/profile/ProfilePage.jsx'));
const ProductsPage=lazy(()=>import('../features/products/ProductsPage.jsx'));
const ProductDetailPage=lazy(()=>import('../features/products/ProductDetailPage.jsx'));
const CategoriesPage=lazy(()=>import('../features/categories/CategoriesPage.jsx'));
const MediaPage=lazy(()=>import('../features/media/MediaPage.jsx'));
const OrdersPage=lazy(()=>import('../features/orders/OrdersPage.jsx'));
const OrderDetailPage=lazy(()=>import('../features/orders/OrderDetailPage.jsx'));
const CustomersPage=lazy(()=>import('../features/customers/CustomersPage.jsx'));
const CustomerDetailPage=lazy(()=>import('../features/customers/CustomerDetailPage.jsx'));
const BookingsPage=lazy(()=>import('../features/bookings/BookingsPage.jsx'));
const PromotionsPage=lazy(()=>import('../features/promotions/PromotionsPage.jsx'));
const BlogPage=lazy(()=>import('../features/blog/BlogPage.jsx'));
const BlogEditorPage=lazy(()=>import('../features/blog/BlogEditorPage.jsx'));
const BlogCommentsPage=lazy(()=>import('../features/blog/BlogCommentsPage.jsx'));
const ReviewsPage=lazy(()=>import('../features/reviews/ReviewsPage.jsx'));
const MessagesPage=lazy(()=>import('../features/messages/MessagesPage.jsx'));
const ContentRoute=lazy(()=>import('../features/content/ContentRoute.jsx'));
const ReportsPage=lazy(()=>import('../features/reports/ReportsPage.jsx'));
const SettingsPage=lazy(()=>import('../features/settings/SettingsPage.jsx'));
const UsersPage=lazy(()=>import('../features/users/UsersPage.jsx'));
const ActivityPage=lazy(()=>import('../features/activity/ActivityPage.jsx'));
const NotificationsPage=lazy(()=>import('../features/notifications/NotificationsPage.jsx'));
function Fallback(){return <main className="route-loading"><Skeleton width="30%" height={30}/><Skeleton width="58%" height={16}/><Skeleton height={280}/></main>;}
function NotFound(){return <main className="auth-page"><section className="auth-card"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This page took a coffee break.</h1><p>The link may be outdated or the page may have moved.</p><a className="button button-primary" href="/">Go to workspace</a></section></main>;}
function AppRoutes(){const user=useAuthStore((s)=>s.user);return <Suspense fallback={<Fallback/>}><Routes><Route path="/login" element={<LoginPage/>}/><Route path="/forgot-password" element={<ForgotPage/>}/><Route element={<RequireAuth/>}><Route element={<AppShell/>}><Route index element={<RequireRole section="dashboard"><DashboardPage/></RequireRole>}/><Route path="components" element={<RequireRole section="components"><ComponentsPage/></RequireRole>}/><Route path="products" element={<RequireRole section="products"><ProductsPage/></RequireRole>}/><Route path="products/:id" element={<RequireRole section="products"><ProductDetailPage/></RequireRole>}/><Route path="categories" element={<RequireRole section="categories"><CategoriesPage/></RequireRole>}/><Route path="orders" element={<RequireRole section="orders"><OrdersPage/></RequireRole>}/><Route path="orders/:id" element={<RequireRole section="orders"><OrderDetailPage/></RequireRole>}/><Route path="customers" element={<RequireRole section="customers"><CustomersPage/></RequireRole>}/><Route path="customers/:id" element={<RequireRole section="customers"><CustomerDetailPage/></RequireRole>}/><Route path="bookings" element={<RequireRole section="bookings"><BookingsPage/></RequireRole>}/><Route path="promotions" element={<RequireRole section="promotions"><PromotionsPage/></RequireRole>}/><Route path="blog" element={<RequireRole section="blog"><BlogPage/></RequireRole>}/><Route path="blog/new" element={<RequireRole section="blog"><BlogEditorPage/></RequireRole>}/><Route path="blog/comments" element={<RequireRole section="blog"><BlogCommentsPage/></RequireRole>}/><Route path="blog/:id" element={<RequireRole section="blog"><BlogEditorPage/></RequireRole>}/><Route path="reviews" element={<RequireRole section="reviews"><ReviewsPage/></RequireRole>}/><Route path="messages" element={<RequireRole section="messages"><MessagesPage/></RequireRole>}/><Route path="content/:section" element={<RequireRole section="content"><ContentRoute/></RequireRole>}/><Route path="media" element={<RequireRole section="media"><MediaPage/></RequireRole>}/><Route path="reports" element={<RequireRole section="reports"><ReportsPage/></RequireRole>}/><Route path="settings" element={<RequireRole section="settings"><SettingsPage/></RequireRole>}/><Route path="users" element={<RequireRole section="users"><UsersPage/></RequireRole>}/><Route path="activity" element={<RequireRole section="activity"><ActivityPage/></RequireRole>}/><Route path="notifications" element={<RequireRole section="notifications"><NotificationsPage/></RequireRole>}/><Route path="profile" element={<RequireRole section="profile"><ProfilePage/></RequireRole>}/></Route></Route><Route path="*" element={user?<NotFound/>:<Navigate to="/login" replace/>}/></Routes></Suspense>;}
export default function App(){return <BrowserRouter><AppRoutes/><Toaster position="bottom-right" richColors closeButton/></BrowserRouter>;}


