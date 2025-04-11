// pages/index.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVsion';
import WhatWeDo from '@/components/WhatWeDo';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-gray-800 bg-white">
        <Hero />
        <section id="mission"><MissionVision /></section>
        <section id="services"><WhatWeDo /></section>
        <CallToAction />
      </main>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
