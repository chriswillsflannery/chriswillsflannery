"use client";
import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";
import Image from "next/image";
import failedTyping from "@/public/extendingTsGenerics/failedTyping.png";
import halfwayThere from "@/public/extendingTsGenerics/halfwayThere.png";
import typeNarrowing from "@/public/extendingTsGenerics/typeNarrowing.png";

const heartRateDataType = `
type HeartRateDataType = {
  timestamp: string;
  medianBPM: number;
  maxBPM: number;
  minBPM: number;
}

// the JSON response will be an array; its type is heartRateDataType[]
`;

const heartRateData = `
const heartRateData: HeartRateDataType[] = [{
  timestamp: 'new Date()',
  medianBPM: 80,
  maxBPM: 120,
  minBPM: 60,
},
{
  timestamp: 'new Date()',
  medianBPM: 70,
  maxBPM: 110,
  minBPM: 50,
}]
`;

const minMaxGraphXYObject = `
type MinMaxXYGraphObject = {
  name: string;
  x: string[];
  y: number[];
}

const initialDataShape: MinMaxXYGraphObject[] = [
  { name: 'Median', x: [], y: [] },
  { name: 'Min', x: [], y: [] },
  { name: 'Max', x: [], y: [] },
]
`;

const minMaxGraphXYObjectExample = `
const populatedDataShape: MinMaxXYGraphObject[] = [
  {
    name: 'Median',
    x: [
      heartRateData[0].timestamp,
      heartRateData[1].timestamp,
      ...etc
    ],
    y: [
      heartRateData[0].medianBPM,
      heartRateData[1].medianBPM,
      ...etc
    ]
  },
  ...etc
]
`;

const populateMinMaxData = `
const populateMinMaxData = (measurements: HeartRateDataType[]): MinMaxXYGraphObject[] =>
  measurements.reduce((acc: MinMaxXYGraphObject[], cur: HeartRateDataType) => {
    acc[0].x.push(cur.timestamp);
    acc[1].x.push(cur.timestamp);
    acc[2].x.push(cur.timestamp);

    acc[0].y.push(cur.medianBPM);
    acc[1].y.push(cur.minBPM);
    acc[2].y.push(cur.maxBPM);

    return acc;
  }, initialDataShape)
`;

const breathHoldDataType = `
type BreathHoldDataType = {
  timestamp: string;
  medianMS: number;
  maxMS: number;
  minMS: number;
}
`;

export default function ExtendingTsGenerics() {
  return (
    <>
      <main>
        <h1>{`'Extends' pattern to constrain Generic function inputs`}</h1>
        <p>
          You can play around with the code in this article in the sandbox
          below:
        </p>
        <p>
          <a
            style={{ color: "blue" }}
            href="https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBDAnmYcASwCGsBKmbAAi+mAKsqgLxwDeAUHAgJYC2wAzjJi2AFxycoTAHYBzANwM4bACZNMwgEIAFALL9hAVxYAjYFEmMWmECvVwtu-YekizG7XoN0AvnTqhIsBBTiKoWDAAFmgQADYyxFzkKHDU9IwwrBxcPPyCIhJSsvLCqgDKDlbORiYFRU42LCLlFo7Wru6e0PBIsao1JgAaAJoA4lCYYEEA8joAVsAAxvDxUsLcwOkwQmI2IMurogDaALo2iBX6e5JudFMQwpxwIkxJmGFRmPlBQ0twHXnd-YPDY5MzPZxODbKQ0CyLfgAclUwDkCihABo4BsQbtkYc0XAXIiwRC2NDPkiUfw9hjSbtsbjGOCFgS4DCTMTUWS4JigTi6Lt3BcrvBIGBNGF8MBPqoTE9gQAeUhwUAEYQydjoLC4EVPGKoAA+fgC+BC4UiJE1AD4ABTZLDsTQBNjCGDsfikPZ0ACU-DF3wGQ1GE2mMCBlBNlsw1ttwHt7AAdAEZJopsAzRbGIxMFMph7OiBet6-n7AeipIwpjanVJXXETbQi3A01NtgAGXZRkBRwXsIJmktQKNJNicbhgV02VPp7YARmbrfbne7veSA54w5rde2ACYp23NB2uzb5-3UkPJDWmAAzOBmqE5BRmKE3YRwbsVhIp0f1ptRxBbndz69KNTLq+b4Ts2X4zruPbVP+qiAUBq4bp+36znuximABI7Yu4r5nheV5wrkBR3iIj42s+NbAR+YHbshkH4QoBSwa+q6Toh4G-jU+SMSm8GgUhEFRqhDEYWcr4BDANoPnWNg4vedzyI8JAvG8rruEAA"
          >
            Typescript Sandbox
          </a>
        </p>

        <HL />

        <article>
          <h4>Imagine you have a network request with incoming json:</h4>
          <CodeBlock code={heartRateDataType} />
          <p>
            This incoming JSON will be used to populate some charting software.
            It will need to be transformed in a way that makes it usable within
            the chart software API spec.
          </p>
          <p>If the incoming JSON looks like this:</p>
          <CodeBlock code={heartRateData} />
          <p>
            And we want to pass into the charting software a structure which
            looks like:
          </p>
          <CodeBlock code={minMaxGraphXYObject} />
          <p>
            We need to populate the above, with the corresponding data from the
            incoming JSON.
          </p>
          <p>
            We want create a helper function that will populate the above like:
          </p>
          <CodeBlock code={minMaxGraphXYObjectExample} />
          <p>so we can start with initialDataShape and build upon it:</p>
          <CodeBlock code={populateMinMaxData} />
        </article>

        <HL />

        <article>
          <h4>Fair enough. Gets the job done.</h4>
          <p>Intellisense working correctly and all that.</p>
          <p>
            Now bossman comes to you and says, we have a 2nd type of incoming
            data. Earlier we only had Heart Rate data, now we also have Breath
            Hold.
          </p>
          <p>
            Very similar incoming data structure, but instead of BPM, the unit
            here is MS (milliseconds).
          </p>
          <CodeBlock code={breathHoldDataType} />
          <p>{`Let's imagine in this example that the names of the fields are immutable, we must use them as-is.`}</p>
          <p>{`We cannot, say, change medianBPM and medianMS to just 'median' to 'normalize' the 2 incoming JSON datasets.`}</p>
          <p>
            Bossman says, OK, Heart Rate and Breath Hold are similar enough in
            their nature that we can use the same visual representation in the
            charting software for both. I.e. we can use the same helper
            functions to transform the data (in theory).
          </p>
          <p>
            So we try and re-type populateMinMaxData to allow for an input of
            either Heart Rate data or Breath Hold data:
          </p>
          <Image
            src={failedTyping}
            alt="failed typing"
          />
          <p>{`and..... no good. can't use reduce on a union type. and medianBPM, minBPM and maxBPM don't exist on BreathHold.`}</p>
        </article>

        <article>
          <p>
            How can we make our function <i>Generic</i> so it could take in
            either set of data?
          </p>
          <Image
            src={halfwayThere}
            alt="halfway there"
          />
          <p>{`Halfway there. Our function now takes in an array of generic T's (so long as T is either of HeartRateDataType or BreathHoldDataType).`}</p>
          <p>
            This resolves our reduce issue. However, we will still need to
            employ <i>type narrowing</i> to take care of the variable
            assignments inside of the function.
          </p>
          <Image
            src={typeNarrowing}
            alt="type narrowing"
          />
          <p>Bit contrived example but hopefully this gets the point across.</p>
          <p>
            The purpose of extending Generic types is to create <i>Generic</i>{" "}
            functions which have variable inputs/outputs as far as the types of
            things they can take in and spit out.
          </p>
          <p>
            By using <i>extends</i>, we are <i>constraining</i> the potential
            list of options of what these generic inputs can be.
          </p>
        </article>
      </main>
    </>
  );
}
