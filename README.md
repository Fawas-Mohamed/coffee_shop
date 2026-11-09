# Coffee Blend – React version

Your Bootstrap coffee-shop site converted from static HTML/CSS/JS to **React + Vite**.
Same markup, same CSS files, same images/fonts, same animations – only the structure changed.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

## Project structure

```
src/
  main.jsx            entry – imports the original CSS files in the original order
  App.jsx             routes (one per original .html page)
  pages/              Home, Menu, Services, Blog, BlogSingle, About, Shop,
                      ProductSingle, Cart, Checkout, Contact, NotFound
  sections/           one component per page section (shared ones at the top level,
                      page-only ones in a folder named after the page)
  components/         Layout, Navbar, Footer, Loader, PageHero, HomeSlider, Tabs,
                      Counter, DateInput, TimeInput, ImagePopup, GoogleMap, AppLink
  hooks/              useNavbarScroll, useScrollReveal, useStellar
  data/mapStyles.js   dark Google-Map theme
  styles/             the original CSS (unchanged)
  fonts/  images/     the original assets
public/vendor/        jQuery + the plugins React does not replace
```

| Original page        | Route             |
| -------------------- | ----------------- |
| index.html           | `/`               |
| menu.html            | `/menu`           |
| services.html        | `/services`       |
| blog.html            | `/blog`           |
| blog-single.html     | `/blog-single`    |
| about.html           | `/about`          |
| shop.html            | `/shop`           |
| product-single.html  | `/product-single` |
| cart.html            | `/cart`           |
| checkout.html        | `/checkout`       |
| contact.html         | `/contact`        |

## What is React now, and what is still jQuery

Done in React (no jQuery): navbar (scroll states, mobile collapse, Shop dropdown), page routing,
tabs, scroll-reveal fade-ins, animated counters, quantity buttons, forms, all page markup.

Still jQuery plugins, wrapped in small components so they set up and tear down with React:
Owl Carousel (home hero), Stellar (parallax), Magnific Popup (product image),
bootstrap-datepicker and jquery.timepicker (booking forms).
Keeping them is what keeps the animations pixel-identical.

`public/vendor/owl.carousel.min.js` has a one-line local patch: Owl 2.3.0's navigation plugin
referenced an undeclared variable in `destroy()`, which throws when you navigate away from the home page.

## Editing content

Repeated cards (menu items, blog posts, testimonials, ...) are data arrays at the top of each
section file – edit the array instead of copy-pasting markup. Images are referenced by file name
from `src/images` (`img('menu-1.jpg')` / `bg('bg_1.jpg')`).

## Deploying (e.g. GitHub Pages)

Set the sub-path when building, e.g. for `https://user.github.io/coffee1/`:

```bash
VITE_BASE=/coffee1/ npm run build
```

`npm run build` also writes `dist/404.html` (a copy of `index.html`) so direct visits to
`/menu`, `/cart`, ... work on hosts without server-side routing.

The Google Maps key is in `.env` (`VITE_GOOGLE_MAPS_API_KEY`) – the same key your original pages used.
