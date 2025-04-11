// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-nile-blue text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Wallpoet', cursive" }}>NILE Health Initiatives</h3>
          <p>
            Transforming public health in South Sudan through equity, innovation, and sustainability.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="#activities" className="hover:underline">Activities</Link></li>
            <li><Link href="#aboutus" className="hover:underline">About Us</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: contact@nilehealth.org</p>
          <p>Juba, South Sudan</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-white/30 pt-4">
        &copy; {new Date().getFullYear()} NILE Health Initiatives. All rights reserved.
      </div>
    </footer>
  );
}
