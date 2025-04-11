// components/CallToAction.tsx
export default function CallToAction() {
    return (
      <section className="py-20 px-6 text-center text-leaf-green text-white"  style={{ fontFamily: "'Homade Apple', cursive" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Help Us Build Resilient Communities
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Your support makes a difference. Join us in transforming public health in South Sudan.
        </p>
        <button className="bg-amber-200 text-leaf-green cursor-pointer font-semibold px-6 py-2 rounded-full">
          Donate Now
        </button>
      </section>
    );
  }
  