import PageHero from '../components/PageHero';
import ServicesSection from '../sections/ServicesSection';

export default function Services() {
  return (
    <>
      <PageHero title="Services" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <ServicesSection />
    </>
  );
}
