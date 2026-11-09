import PageHero from '../components/PageHero';
import BlogListSection from '../sections/Blog/BlogListSection';

export default function Blog() {
  return (
    <main className="blog-page">
      <PageHero title="Blog" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
      <BlogListSection />
    </main>
  );
}
