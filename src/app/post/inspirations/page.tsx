import { HL } from "@/components/HorizontalLine";

export default function Inspirations() {
  return (
    <>
      <main>
        <h1>I owe my love of programming to these things</h1>
        <HL />
        <p>
          {`- Playing Power Pete late nights on the Mac home computer in the
          late 90s with my friend Paul - though it was a one-player game,
          we would divide responsibilities - he would control the guy's movements,
          I would shoot. There was something wrong with either the monitor or the
          game software itself, because the lava appeared black instead of red.`}
        </p>
        <p>
          - When <span className="text-yellow-200">Cute is What We Aim For </span>
          (allegedly) blew up and got signed to a big label because they ran a macro
          on their Myspace page that ran up the clicks on their music player widget.
        </p>
        <p>
            {`- Trying to get my own website up and running on TCNJ's internal webserver - I copied
            the HTML and CSS from Mallory G's website and dropped in my own designs and illustraions.`}
        </p>
        <p>
            {`- Endless hours spent in Logic playing with sound modeling GUIs to trigger JUST the right
            sound profile, and performing a live DJ/drum mix with Charles as "DJ Pravus/Break Protocol"`}
        </p>
        <p>
            {`- Henry Desroches's incredible `} <a style={{color: "coral"}} href="https://www.henry.codes/">websites and designs</a>
        </p>
        <p>
            {`- Exploring the hidden menus and easter eggs of Homestarrunner.com, and taking months
            to figure out a solution to Thy Dungeonman (a simple text adventure game).`}
        </p>
        <p>
            
        </p>
      </main>
    </>
  );
}
