export default function AboutPage() {
  return (
    <section className="py-24 max-w-3xl">
      <h1 className="text-4xl font-medium text-[#0B1F3B]">
        About AnkismaikT Realty
      </h1>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        AnkismaikT Realty is a focused real-estate advisory built on clarity,
        responsibility, and long-term thinking. We work with a limited number
        of properties to ensure every listing is verified, understood, and
        personally handled.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Our approach is intentionally selective. Instead of volume, we focus
        on quality — quality of location, construction, pricing, and overall
        value for the buyer or investor.
      </p>

      {/* Founder */}
      <div className="mt-20">
        <h2 className="text-2xl font-medium text-[#0B1F3B]">
          Founder
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          <strong className="text-[#0B1F3B]">Pradeep Kishan</strong> founded
          AnkismaikT Realty with the belief that real estate should be guided
          by understanding, not pressure. His work focuses on helping clients
          make informed property decisions — whether for living or long-term
          investment.
        </p>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Every inquiry, discussion, and property walkthrough is handled
          personally to maintain transparency and trust throughout the
          process. The goal is simple: fewer promises, clearer outcomes.
        </p>
      </div>

      <p className="mt-16 text-lg text-gray-600 leading-relaxed">
        AnkismaikT Realty operates with a long-term perspective, building
        relationships rather than transactions.
      </p>
    </section>
  );
}

