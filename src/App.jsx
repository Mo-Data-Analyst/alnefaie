import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import WhyUs from './sections/WhyUs.jsx';
import Audiences from './sections/Audiences.jsx';
import Process from './sections/Process.jsx';
import OngoingSupport from './sections/OngoingSupport.jsx';
import International from './sections/International.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  // When a visitor clicks "Learn More" on a service card,
  // that service is pre-selected in the contact form.
  const [selectedServiceId, setSelectedServiceId] = useState('');

  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Services onSelectService={setSelectedServiceId} />
        <WhyUs />
        <Audiences />
        <Process />
        <OngoingSupport />
        <International />
        <FAQ />
        <Contact selectedServiceId={selectedServiceId} />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
