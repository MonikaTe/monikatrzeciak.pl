/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { WhyNothingChanged } from './components/WhyNothingChanged.tsx';
import { HowIWork } from './components/HowIWork.tsx';
import { ForWhom } from './components/ForWhom.tsx';
import { TopicsSection } from './components/TopicsSection.tsx';
import { AboutMe } from './components/AboutMe.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { ZencalModal } from './components/ZencalModal.tsx';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'single' | 'package'>('package');
  const [zencalOpen, setZencalOpen] = useState(false);

  const handleOpenBooking = (type: 'single' | 'package' = 'single') => {
    setBookingType(type);
    setZencalOpen(true);
  };

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#oferta');
    } else {
      window.location.hash = '#oferta';
    }
  };

  return (
    <div className="min-h-screen bg-[#261b16] text-[#fcf7f5] flex flex-col font-sans selection:bg-[#fff852] selection:text-[#261b16]">
      <Header onOpenBooking={scrollToOffer} />

      <main className="flex-1">
        <Hero onOpenBooking={scrollToOffer} />
        <ProblemSection />
        <WhyNothingChanged onOpenBooking={scrollToOffer} />
        <HowIWork />
        <ForWhom onOpenBooking={scrollToOffer} />
        <TopicsSection onOpenBooking={scrollToOffer} />
        <AboutMe />
        <Testimonials />
        <Pricing onOpenBooking={handleOpenBooking} />
        <FAQ />
        <FinalCTA onOpenBooking={scrollToOffer} />
      </main>

      <Footer />

      {/* Zencal Popup Modal for Single Session & Packages */}
      <ZencalModal
        isOpen={zencalOpen}
        onClose={() => setZencalOpen(false)}
        initialType={bookingType}
      />

      {/* Booking Modal for Packages */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialType={bookingType}
      />
    </div>
  );
}
