import PageHero from '../components/PageHero';
import CartSection from '../sections/Cart/CartSection';
import RelatedProductsSection from '../sections/RelatedProductsSection';

export default function Cart() {
  return (
    <>
      <PageHero title="Cart" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Cart" }]} />
      <CartSection />
      <RelatedProductsSection />
    </>
  );
}
