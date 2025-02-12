"use client ";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

export const Navbar = ({ setLang }: { setLang: (lang: "en-US" | "es") => void }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en-US";
  const locales = i18n.locales;

  return (
    <header className="mb-8">
      <nav className="flex justify-end space-x-2">
        {locales.map((l, i) => (
          <Link
            key={`${l}-${i}`}
            href={pathname.replace(`/${currentLocale}`, `/${l}`)}
            className="underline"
            onClick={() => setLang(l as "en-US" | "es")}
          >
            {l === "en-US" ? "English" : "Español"}
          </Link>
        ))}
      </nav>
    </header>
  );
};
