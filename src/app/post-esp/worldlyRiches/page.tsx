"use client";
import { HL } from "@/components/HorizontalLine";

const WorldlyRiches = () => {
  return (
    <div className="prose max-w-none">
      <main>
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h2>{`1 Timothy 6:6-10 NRSV`}</h2>
          <p>
            {`[6] Of course, There is great gain in godliness combined with contentment;`}
          </p>
          <p>
            {`[7] for we brought nothing into the world, so that we can take nothing out of it;`}
          </p>
          <p>
            {`[8] but if we have food and clothing, we will be content with these.`}
          </p>
          <p>
            {`[9] But those who want to be rich fall into temptation, and are trapped by many senseless and harmful desires that plunge people into ruin and destruction.`}
          </p>
          <p>
            {`[10] For `}<span className="text-yellow-200">{`the love of money`}</span>{` is the root of all kinds of evil, and in their eagerness to be rich some have wandered away from the faith and pierced themselves with many pains.`}
          </p>
        </article>
        <HL />
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
            <h2>{`Compare to how Augustine quotes same passage:`}</h2>
            <p>
                {`[6] Devotion combined with self-sufficiency yields great profit.`}
            </p>
            <p>
                {`[7] For we brought nothing into this world, and we cannot take anything away with us.`}
            </p>
            <p>
                {`[8] So, if we have food and clothes, we are content with that.`}
            </p>
            <p>
                {`[9] For those who wish to become rich fall into temptation and into a snare, and into many foolish and harmful desires, which plunge men into death and destruction.`}
            </p>
            <p>
                {`[10] For `}<span className="text-yellow-200">{`acquisitiveness`}</span>{` is the root of all evils; and those hwo have this as their aim have strayed away from the faith and have entangled themselves in many sorrows.`}
            </p>
        </article>
        <HL />
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
            <p>{`We often hear this "love of money is the root of all evil" quote.`}</p>
            <p>
                {`Interestingly, the preceding arguments of City of God are about love of temportal goods (not necessarily just money), and Augustine cites this as one of the reasons why the good are chastised along with the bad.`}
            </p>
            <p>
                {`Ultimately the two translations echo the same point, but it's a neat difference.`}
            </p>
        </article>
      </main>
    </div>
  );
};

export default WorldlyRiches;
