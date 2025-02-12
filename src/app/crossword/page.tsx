import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

const Crossword = () => {
  return (
    <div>
      <main className="space-y-4 p-4">
        <p>Crosswords.</p>

        <HL />

        <p>
          <Link href="./posts/crossword/nerdingOut">
            Oct 21 2022: Nerding Out
          </Link>
        </p>

        <p>
          <Link href="./posts/crossword/bilingueTvAndFilm">
            Oct 21 2022: Bilingüe Crossword 2: TV and Film
          </Link>
        </p>

        <p>
          <Link href="./posts/crossword/crossword1">
            Oct 9 2022: Bilingüe Crossword 1: Tema Perú
          </Link>
        </p>
        <p>
          <Link href="./">Home</Link>
        </p>
        <HL />
      </main>
    </div>
  );
};

export default Crossword;
