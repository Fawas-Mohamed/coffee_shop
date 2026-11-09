import { z } from 'zod';
export const LoginSchema=z.object({email:z.email('Enter a valid email address.'),password:z.string().min(1,'Password is required.'),remember:z.boolean().default(true)});
export const ProductSchema=z.object({name:z.string().min(2,'Use at least 2 characters.').max(80),slug:z.string().min(2).regex(/^[a-z0-9-]+$/,'Use lowercase letters, numbers, and hyphens.'),category:z.string().min(1,'Choose a category.'),price:z.coerce.number().positive('Enter a price above zero.'),stock:z.coerce.number().int().min(0),status:z.enum(['Active','Draft','Out of stock'])});
export const UserSchema=z.object({id:z.string(),name:z.string(),email:z.email(),role:z.enum(['admin','manager','staff']),active:z.boolean()});
export const CategorySchema=z.object({id:z.string(),name:z.string(),position:z.number(),active:z.boolean()});
export const OrderItemSchema=z.object({productId:z.string(),name:z.string(),quantity:z.number().int().positive(),price:z.number().nonnegative()});
export const OrderSchema=z.object({id:z.string(),number:z.string(),customerId:z.string(),items:z.array(OrderItemSchema),total:z.number(),status:z.string(),createdAt:z.iso.datetime()});
export const CustomerSchema=z.object({id:z.string(),name:z.string(),email:z.email(),tags:z.array(z.string()),blocked:z.boolean()});
export const BookingSchema=z.object({id:z.string(),name:z.string(),phone:z.string(),date:z.iso.datetime(),partySize:z.number().int().positive(),status:z.string()});
export const BlogPostSchema=z.object({id:z.string(),title:z.string(),slug:z.string(),content:z.string(),status:z.string()});
export const CommentSchema=z.object({id:z.string(),postId:z.string(),author:z.string(),content:z.string(),status:z.string()});
export const ReviewSchema=z.object({id:z.string(),name:z.string(),quote:z.string(),rating:z.number().min(1).max(5),approved:z.boolean()});
export const ServiceSchema=z.object({id:z.string(),title:z.string(),text:z.string(),icon:z.string()});
export const PricingItemSchema=z.object({id:z.string(),category:z.string(),name:z.string(),description:z.string(),price:z.number()});
export const HeroSlideSchema=z.object({id:z.string(),headline:z.string(),subHeadline:z.string(),active:z.boolean(),position:z.number()});
export const MediaAssetSchema=z.object({id:z.string(),name:z.string(),type:z.enum(['image','video']),url:z.string(),alt:z.string()});
export const MessageSchema=z.object({id:z.string(),name:z.string(),email:z.email(),subject:z.string(),body:z.string(),read:z.boolean()});
export const CouponSchema=z.object({code:z.string().min(3).max(40).regex(/^[A-Z0-9_-]+$/,'Use uppercase letters, numbers, hyphens, or underscores.'),discountType:z.enum(['percent','fixed','free-item']),value:z.number().positive(),minimumSpend:z.number().min(0),usageLimit:z.number().int().positive().nullable(),perCustomerLimit:z.number().int().positive(),startsAt:z.iso.datetime(),endsAt:z.iso.datetime(),status:z.enum(['Enabled','Disabled']),usageCount:z.number().int().min(0)});
export const NotificationSchema=z.object({id:z.string(),title:z.string(),detail:z.string(),read:z.boolean(),createdAt:z.iso.datetime()});
export const ActivityLogSchema=z.object({id:z.string(),actor:z.string(),action:z.string(),entity:z.string(),createdAt:z.iso.datetime()});
export const SiteSettingsSchema=z.object({shopName:z.string(),currency:z.string(),taxRate:z.number(),maintenanceMode:z.boolean()});


export const BlogPostFormSchema=z.object({title:z.string().min(3).max(120),slug:z.string().min(3).regex(/^[a-z0-9-]+$/),excerpt:z.string().max(240),content:z.string().min(1),category:z.string().min(1),author:z.string().min(2),status:z.enum(['Draft','Scheduled','Published']),publishAt:z.string().optional(),seoTitle:z.string().max(70),seoDescription:z.string().max(180)});
export const ContentServiceSchema=z.object({title:z.string().min(2),text:z.string().min(5),icon:z.string().min(1),active:z.boolean()});
export const PricingItemFormSchema=z.object({category:z.string().min(2),name:z.string().min(2),description:z.string().min(3),price:z.coerce.number().positive()});

export const SiteSettingsFormSchema=z.object({shopName:z.string().min(2),tagline:z.string().max(120),email:z.email(),phone:z.string().min(5),address:z.string().min(4),currency:z.string().length(3),taxRate:z.coerce.number().min(0).max(100),deliveryFee:z.coerce.number().min(0),minimumOrder:z.coerce.number().min(0),seoTitle:z.string().max(70),seoDescription:z.string().max(180),analyticsId:z.string().max(40)});
export const PasswordChangeSchema=z.object({currentPassword:z.string().min(1),newPassword:z.string().min(8,'Use at least 8 characters.').regex(/[A-Z]/,'Add an uppercase letter.').regex(/[0-9]/,'Add a number.'),confirmPassword:z.string()}).refine((v)=>v.newPassword===v.confirmPassword,{path:['confirmPassword'],message:'Passwords do not match.'});
