"use client";
import { HL } from "@/components/HorizontalLine";
import { useState } from "react";

const Market = () => {
  const [lang, setLang] = useState("eng");
  return (
    <div className="prose max-w-none">
      <main>
        <button
          style={{
            border: "1px solid white",
            padding: "4px 8px",
            cursor: "pointer",
            margin: "0 0 10px 0",
          }}
          onClick={() => setLang(lang === "eng" ? "esp" : "eng")}
        >
          {lang === "eng" ? "ESP" : "ENG"}
        </button>
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <p>
            {lang === "eng"
              ? `When we went to the market I watched you`
              : `Cuando fuimos al mercado te observé`}
          </p>
          <p>
            {lang === "eng"
              ? `I watched as you took that first bite of mazamorra and smiled`
              : `Te observé mientras dabas ese primer mordisco a la mazamorra y sonreías`}
          </p>
          <p>
            {lang === "eng"
              ? `Of course we had to get the combinado`
              : `Por supuesto que teníamos que pedir el combinado`}
          </p>
          <br />
          <p>
            {lang === "eng"
              ? `You led me through narrow passages`
              : `Me guiaste por pasajes estrechos`}
          </p>
          <p>
            {lang === "eng"
              ? `past all types of people and all types of food`
              : `entre todo tipo de personas y todo tipo de comidas`}
          </p>
          <p>
            {lang === "eng"
              ? `I don't think you stopped smiling the whole day`
              : `Creo que no dejaste de sonreír en todo el día`}
          </p>
          <p>
            {lang === "eng"
              ? `Sometimes I think about how good that first bite tastes`
              : `A veces pienso en lo bien que sabe ese primer bocado`}
          </p>
          <p>
            {lang === "eng"
              ? `and the one after it, and the one after that`
              : `y el que sigue, y el que sigue después`}
          </p>
          <br />
          <p>
            {lang === "eng"
              ? `I think we should set up shop`
              : `Creo que deberíamos establecernos`}
          </p>
          <p>
            {lang === "eng"
              ? `We can buy a little space for a puesto of our own`
              : `Podemos comprar un pequeño espacio para nuestro propio puesto`}
          </p>
          <p>
            {lang === "eng"
              ? `It can be a tiny corner where we sell chicken and eggs`
              : `Puede ser un rinconcito donde vendamos pollo y huevos`}
          </p>
          <p>
            {lang === "eng"
              ? `right next to the shop where we sat for a juice`
              : `justo al lado de la tienda donde nos sentamos a tomar un jugo`}
          </p>
          <p>
            {lang === "eng"
              ? `Where you used to go when you were a kid`
              : `Donde solías ir cuando eras niña`}
          </p>
          <p>
            {lang === "eng"
              ? `You told me you would sit there for hours`
              : `Me contaste que te sentabas allí durante horas`}
          </p>
          <p>
            {lang === "eng"
              ? `Doing some homework and watching the dogs play in the dirt`
              : `Haciendo alguna tarea y viendo a los perros jugar en la tierra`}
          </p>
          <br />
          <p>
            {lang === "eng"
              ? `I think we could buy anything at the market`
              : `Creo que podríamos comprar cualquier cosa en el mercado`}
          </p>
          <p>
            {lang === "eng"
              ? `Do you think someone will sell us a visa?`
              : `¿Crees que alguien nos venderá una visa?`}
          </p>
          <p>
            {lang === "eng"
              ? `Maybe then we won't have to wait so long to be together`
              : `Quizás entonces no tendremos que esperar tanto para estar juntos`}
          </p>
          <br />
          <p>{lang === "eng" ? `For Naysha` : `Para Naysha`}</p>
        </article>
        <HL />
      </main>
    </div>
  );
};

export default Market;
