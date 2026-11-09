import PageHero from '../components/PageHero';
import ShopSection from '../sections/Shop/ShopSection';

export default function Shop() {
  return (
    <>
      <PageHero title="Order Online" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Shop" }]} />
      <ShopSection />
    </>
  );
}
