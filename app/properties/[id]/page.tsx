import { notFound } from "next/navigation";

async function getProperty(id: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3001");

  const res = await fetch(`${baseUrl}/api/properties/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) notFound();

  return (
    <section className="py-24 max-w-5xl">
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        alt={property.title}
        className="w-full h-[520px] object-cover"
      />

      <h1 className="mt-14 text-4xl font-medium text-[#0B1F3B]">
        {property.title}
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        ₹ {property.price?.toLocaleString("en-IN")}
      </p>

      <p className="mt-10 text-lg text-gray-600 leading-relaxed">
        {property.description ||
          "A thoughtfully designed residence offering balance, comfort, and long-term value in a prime location."}
      </p>

      <div className="mt-16">
        <a
          href="tel:+919001644487"
          className="inline-block border border-[#0B1F3B] px-8 py-3
                     text-[#0B1F3B] font-medium hover:bg-[#0B1F3B]
                     hover:text-white transition"
        >
          Speak With Us
        </a>
      </div>
    </section>
  );
}

