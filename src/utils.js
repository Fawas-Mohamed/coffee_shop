// All images live in src/images and are bundled by Vite; look them up by file name.
const files = import.meta.glob('./images/*', { eager: true, query: '?url', import: 'default' });
const urlByName = Object.fromEntries(Object.entries(files).map(([p, url]) => [p.split('/').pop(), url]));

/** URL of an image in src/images, e.g. img('menu-1.jpg'). */
export const img = (name) => urlByName[name] ?? `${import.meta.env.BASE_URL}images/${name}`;

/** CSS value for background-image, e.g. style={{ backgroundImage: bg('bg_1.jpg') }}. */
export const bg = (name) => `url(${img(name)})`;

/** The original forms posted to "#"; keep them from navigating. */
export const preventSubmit = (e) => e.preventDefault();
