import PageHero from '../components/PageHero';
import IntroSection from '../sections/IntroSection';
import PricingSection from '../sections/Menu/PricingSection';
import ProductsSection from '../sections/Menu/ProductsSection';

export default function Menu() {
  return (
    <main className="menu-page">
      <PageHero title="Our Menu" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Menu" }]} />
      <IntroSection />
      <PricingSection />
      <ProductsSection />
    </main>
  );
}
