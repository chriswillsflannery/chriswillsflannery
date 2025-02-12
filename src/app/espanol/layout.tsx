import Link from "next/link";
import { Sun, Mountain, Twitter, Linkedin } from "lucide-react";

export default function PeruvianPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-950 text-amber-50 font-mono p-4">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Sun className="text-yellow-400" size={24} />
            <Mountain className="text-amber-200" size={24} />
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              href={"/"}
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>All gas no brakes 🇺🇸</span>
            </Link>
          </nav>
        </div>
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-amber-200 rounded-full" />
      </header>
      <main className="space-y-4 max-w-3xl mx-auto">{children}</main>
      <footer className="mt-8 border-t border-amber-200/20 pt-4 text-sm text-amber-200/60 flex justify-between">
        <div>
          <Link href="../archive" className="underline mr-4">
            Archivo
          </Link>
          <Link href="../crossword" className="underline">
            Crucigrama
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="mx-4 my-0 pt-1 flex items-center justify-center">Inspirado por los colores del Perú</div>
          <Link href="https://www.linkedin.com/in/chriswillsflannery" className="text-amber-200 hover:text-amber-400">
            <Linkedin size={20} />
          </Link>
          <Link href="https://x.com/chriswflannery" className="text-amber-200 hover:text-amber-400">
            <Twitter size={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
