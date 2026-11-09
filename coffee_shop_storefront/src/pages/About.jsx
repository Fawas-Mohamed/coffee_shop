import PageHero from '../components/PageHero';
import AboutSection from '../sections/AboutSection';
import TestimonySection from '../sections/About/TestimonySection';
import OurMenuSection from '../sections/OurMenuSection';
import CounterSection from '../sections/CounterSection';

export default function About() {
  return (
    <>
      <PageHero title="About Us" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <AboutSection />
      <TestimonySection />
      <OurMenuSection />
      <CounterSection />
    </>
  );
}
