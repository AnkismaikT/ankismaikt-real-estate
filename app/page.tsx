import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-24">
      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          AnkismaikT Realty
        </p>

        <h1 className="mt-6 text-5xl leading-tight font-medium text-[#0B1F3B]">
          Thoughtfully Crafted <br />
          Homes for Elevated Living
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-600">
          We curate premium residential properties with a focus on quality,
          location, and long-term value. Every listing is verified and
          personally handled.
        </p>

        <div className="mt-12">
          <Link
            href="/properties"
            className="inline-block border border-[#0B1F3B] px-8 py-3
                       text-[#0B1F3B] font-medium hover:bg-[#0B1F3B]
                       hover:text-white transition"
          >
            View Property
          </Link>
        </div>
      </section>

      {/* IMAGE */}
      <section className="mt-28">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Luxury residence"
          className="w-full h-[520px] object-cover"
        />
      </section>

      {/* PHILOSOPHY */}
      <section className="mt-32 max-w-4xl">
        <h2 className="text-3xl font-medium text-[#0B1F3B]">
          Our Philosophy
        </h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Real estate is not about volume. It is about responsibility.
          We work with a limited portfolio to ensure clarity, transparency,
          and personal attention for every client.
        </p>
      </section>
    </main>
  );
}

