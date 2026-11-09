import PageHero from '../components/PageHero';
import BlogPostSection from '../sections/BlogSingle/BlogPostSection';

export default function BlogSingle() {
  return (
    <>
      <PageHero title="Blog Details" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: "Blog Single" }]} />
      <BlogPostSection />
    </>
  );
}
