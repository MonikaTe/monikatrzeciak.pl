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

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'single' | 'package'>('single');

  const handleOpenBooking = (type: 'single' | 'package' = 'single') => {
    setBookingType(type);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#261b16] text-[#fcf7f5] flex flex-col font-sans selection:bg-[#fff852] selection:text-[#261b16]">
      <Header onOpenBooking={() => handleOpenBooking('single')} />

      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking('single')} />
        <ProblemSection />
        <WhyNothingChanged onOpenBooking={() => handleOpenBooking('single')} />
        <HowIWork />
        <ForWhom onOpenBooking={() => handleOpenBooking('single')} />
        <TopicsSection onOpenBooking={() => handleOpenBooking('single')} />
        <AboutMe />
        <Testimonials />
        <Pricing onOpenBooking={handleOpenBooking} />
        <FAQ />
        <FinalCTA onOpenBooking={() => handleOpenBooking('single')} />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialType={bookingType}
      />
    </div>
  );
}
