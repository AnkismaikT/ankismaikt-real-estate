export default function ContactPage() {
  return (
    <section className="py-24 max-w-3xl">
      <h1 className="text-4xl font-medium text-[#0B1F3B]">
        Contact
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        AnkismaikT Realty works with a limited portfolio of verified residential
        properties. Every inquiry is handled personally.
      </p>

      <div className="mt-12 space-y-6 text-lg">
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919001644487" className="text-[#2563EB]">
            +91 90016 44487
          </a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:pradeepkishan@ankismaikt.com"
            className="text-[#2563EB]"
          >
            pradeepkishan@ankismaikt.com
          </a>
        </p>

        <p>
          <strong>Location:</strong> India
        </p>
      </div>
    </section>
  );
}

