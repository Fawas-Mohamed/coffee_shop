// GitHub Pages has no server-side routing: serving index.html as 404.html lets
// direct visits to /menu, /cart, ... load the app, which then renders the right page.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
console.log('dist/404.html created (SPA fallback)');
