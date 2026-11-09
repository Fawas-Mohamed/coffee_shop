import PageHero from '../components/PageHero';
import CheckoutSection from '../sections/Checkout/CheckoutSection';

export default function Checkout() {
  return (
    <>
      <PageHero title="Checkout" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Checout" }]} />
      <CheckoutSection />
    </>
  );
}
