# Coffee Blend Admin

Standalone React 19 and Vite admin workspace for the Coffee Blend storefront. Phase 1 established the foundation; Phase 2 added dashboard/catalog/media; Phase 3 added orders, customers, bookings, and promotions; Phase 4 added Blog, Reviews, Messages, and the website Content Manager; Phase 5 added reports, settings, users, activity, notifications, and global search.

## Run

Run npm install, then npm run dev. Run npm run build for a production build. Copy .env.example to .env to change API mode.

## Demo accounts

- Admin: admin@coffeeblend.com / Admin@123
- Manager: manager@coffeeblend.com / Manager@123
- Staff: staff@coffeeblend.com / Staff@123

Staff can access orders, bookings, messages, and read-only products. Admin and manager can edit store content.

## Routes

- / — KPI dashboard
- /products and /products/:id — catalog and product details
- /categories and /media — taxonomy and IndexedDB library
- /orders and /orders/:id — manual sales, fulfillment, print, and mock refunds
- /customers and /customers/:id — customer accounts and history
- /bookings — reservation calendar and walk-ins
- /promotions — coupons and storefront banners
- /blog, /blog/new, /blog/:id — post list and rich editor with repository-backed draft autosave
- /blog/comments — comment approval, spam, delete, and replies
- /reviews — testimonials and product review moderation
- /messages — searchable inbox, labels, stars, archive, bulk actions, and mock replies
- /content/hero — hero slides, preview, video/poster fields, and ordering
- /content/services — website service cards
- /content/pricing — public menu price sections
- /content/about — Our Story, counters, gallery, and feature badges
- /reports, /settings, /users, /activity, /notifications — analytics, workspace configuration, accounts, audit trail, and notification center
- /components, /profile, /login, /forgot-password — foundation demo, account, and authentication

## Data

VITE_API_MODE=mock is the default. Business records use async repositories backed by browser localStorage; image blobs use IndexedDB. New collections are added when older browser data is read. Blog drafts save through the repository layer. All outbound messages, scheduled publishing, and content previews are local mock behavior.

See docs/API.md for the HTTP API contract, environment setup, authentication, media uploads, and backend requirements.

## Progress

- [x] Foundation, auth, roles, async mock repositories, and reusable interface
- [x] Dashboard, products, categories, and media
- [x] Orders, customers, bookings, and coupons/promotions
- [x] Blog posts, rich editor, autosave, comments and replies
- [x] Testimonial ordering, product review moderation, and media-backed avatars
- [x] Inbox folders, bulk actions, labels, stars, archive, and reply composer
- [x] Hero, Services, Pricing, About, counters, gallery, and feature badges
- [x] Reports, Settings, Users, Activity log, profile security, and Notifications
- [x] Global command search, quick create, role-aware navigation, and Phase 5 responsive styles
- [x] HTTP API adapter, authentication and multipart media support, endpoint documentation, and final polish
