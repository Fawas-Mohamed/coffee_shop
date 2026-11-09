import PageHero from '../components/PageHero';
import ContactSection from '../sections/Contact/ContactSection';
import ContactMap from '../sections/Contact/ContactMap';

export default function Contact() {
  return (
    <main className="contact-page">
      <PageHero title="Contact Us" image="bg_3.jpg" crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <ContactSection />
      <ContactMap />
    </main>
  );
}
