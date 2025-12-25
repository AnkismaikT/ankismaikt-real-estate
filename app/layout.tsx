import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-gray-900">
        <Navbar />

        {/* Global content container */}
        <main className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

