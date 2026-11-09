import PageHero from '../components/PageHero';
import ProductDetailSection from '../sections/ProductSingle/ProductDetailSection';
import RelatedProductsSection from '../sections/RelatedProductsSection';

export default function ProductSingle() {
  return (
    <>
      <PageHero title="Product Detail" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Product Detail" }]} />
      <ProductDetailSection />
      <RelatedProductsSection />
    </>
  );
}
