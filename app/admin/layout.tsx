import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin Panel</h1>

          <nav className="flex gap-6 text-sm">
            <Link
              href="/admin/properties"
              className="text-blue-600 hover:underline"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/properties"
              className="text-gray-700 hover:underline"
            >
              Properties
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  );
}

