"use client"
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pillars = [
  {
    title: 'Community Health Workforce',
    description:
      'Empowering community health workers to deliver essential care and bridge gaps in underserved areas.',
    href: '/activities/community-health-workforce',
  },
  {
    title: 'Health Systems Strengthening',
    description:
      'Building robust health systems for better service delivery, access, and resilience.',
    href: '/activities/health-systems-strengthening',
  },
  {
    title: 'Digital Health',
    description:
      'Leveraging technology to enhance health service delivery and data-driven decision-making.',
    href: '/activities/digital-health',
  },
  {
    title: 'Research & Innovation',
    description:
      'Driving impactful change through evidence-based research and innovative solutions.',
    href: '/activities/research-and-innovation',
  },
  {
    title: 'Climate & Environmental Health',
    description:
      'Addressing the intersection of climate change and public health to build resilient communities.',
    href: '/activities/climate-and-environmental-health',
  },
  {
    title: 'Health Literacy & Engagement',
    description:
      'Promoting health awareness and empowering individuals to make informed decisions.',
    href: '/activities/health-literacy-and-engagement',
  },
];

export default function WhatWeDo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle title="A Glimpse of our Activities" />

        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
          Our work is centered around transformative initiatives designed to improve health outcomes,
          promote equity, and build community resilience. Here is a quick overview of the key areas we focus on.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-14">
          {pillars.map((item, idx) => (
            <Link href={item.href} key={idx}>
             <div
                className="bg-nile-blue text-white p-6 shadow-md hover:shadow-xl transition cursor-pointer text-left opacity-50 hover:opacity-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
             >

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-100">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
