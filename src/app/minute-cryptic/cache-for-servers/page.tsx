import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

export default function CacheForServers() {
  return (
    <>
      <main className="space-y-4 p-4">
        <h1>CACHE FOR SERVERS</h1>

        <HL />

        <p>LOT SQL SERVERS;</p>
        <p>CASH FORE CACHE</p>

        <p>5 letters</p>

        <p>_____</p>

        <details>
          <summary className="cursor-pointer underline">Reveal answer</summary>
          <p className="mt-2">CARDS</p>
        </details>

        <HL />

        <p>
          <Link href="../minute-cryptic">Back</Link>
        </p>
      </main>
    </>
  );
}
