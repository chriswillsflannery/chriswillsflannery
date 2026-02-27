import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

const MinuteCryptic = () => {
  return (
    <div>
      <main className="space-y-4 p-4">
        <p>Minute Cryptic.</p>

        <HL />

        <p>
          <Link href="./minute-cryptic/cache-for-servers">
            CACHE FOR SERVERS
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

export default MinuteCryptic;
