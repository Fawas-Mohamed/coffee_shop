import HomeSlider from '../components/HomeSlider';
import IntroSection from '../sections/IntroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import OurMenuSection from '../sections/OurMenuSection';
import CounterSection from '../sections/CounterSection';
import BestCoffeeSellersSection from '../sections/Home/BestCoffeeSellersSection';
import GallerySection from '../sections/Home/GallerySection';
import ProductsSection from '../sections/Home/ProductsSection';
import TestimonySection from '../sections/Home/TestimonySection';
import RecentBlogSection from '../sections/Home/RecentBlogSection';
import AppointmentSection from '../sections/Home/AppointmentSection';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <OurMenuSection />
      <CounterSection />
      <BestCoffeeSellersSection />
      <GallerySection />
      <ProductsSection />
      <TestimonySection />
      <RecentBlogSection />
      <AppointmentSection />
    </>
  );
}
