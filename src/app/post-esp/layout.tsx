import Link from "next/link";

export default function GenericPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-950 text-amber-50 text-white font-mono p-4">
      <header className="mb-8">
        <nav className="flex justify-end space-x-2">
          <Link href="/esp">
            A mi jato 🇵🇪
          </Link>
        </nav>
      </header>
      <main className="space-y-4 max-w-3xl mx-auto">{children}</main>
    </div>
  );
}
