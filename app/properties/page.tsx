import Link from "next/link";

async function getProperties() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3001");

  const res = await fetch(`${baseUrl}/api/properties`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function PropertiesPage() {
  const properties = await getProperties();
  const property = properties[0];

  if (!property) {
    return (
      <section className="py-24 text-gray-600">
        No properties available at this time.
      </section>
    );
  }

  return (
    <section className="py-24 max-w-5xl">
      <h1 className="text-4xl font-medium text-[#0B1F3B]">
        Featured Property
      </h1>

      <Link
        href={`/properties/${property.id}`}
        className="block mt-16"
      >
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt={property.title}
          className="w-full h-[420px] object-cover"
        />

        <div className="mt-6">
          <p className="text-sm text-gray-500">Residential</p>
          <h2 className="mt-2 text-2xl font-medium text-[#0B1F3B]">
            {property.title}
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            ₹ {property.price?.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </section>
  );
}

