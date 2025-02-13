"use client";
import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";

const link = { color: "yellow" };

const someHTML = `
<!DOCTYPE html>
  <html>
  <head />
  <body />
</html>
`;

const someCSS = `
.head {
  width: 100px;
  height: 100px;
}
`;

const someJS = `
function addTwoNumbers(num1, num2) {
  return num2 + num2;
}
`;

const Post = () => {
  return (
    <div className="prose max-w-none">
      <main>
        <h1>{`JavaScript: ¿Qué es?`}</h1>
        <HL />
        <p>
          {`Este artículo es una transcripción de `}
          <a
            style={link}
            href="http://csx.codesmith.io/units/precourse/precourse-what-is-js"
          >
            CSX JavaScript Precourse - Part 1
          </a>
        </p>

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>
            JavaScript está en <i>todos lados.</i>
          </h4>
          <p>
            No confundir con Java, Java<i>Script</i> es el lenguaje de la web
            moderna. Junto con HTML y CSS se ha convertido en una pieza de
            tecnología esencial para la web. Si quieres entrar en el mundo del
            desarrollo web hay que aprender JavaScript - es fundamental.
          </p>
          <p>
            Actualmente los usuarios de la web esperan mucho de su experiencia
            en línea. Quieren aplicaciones rápidas, responsables y eficaces.
            Esta es la función de JavaScript y por ahora no existe alternativa.
          </p>
          <p>
            Es probable que uses JavaScript todos los días, aunque no te des
            cuenta. Puede ser algo que te facilite la vida como un Calendario
            app, o puede ser algo que te ayude a quedar en contacto con amigos
            como Instagram. Ya sea para compartir documentos, leer las noticias,
            mirar TikToks o cualquiera de las millones de cosas que hacemos
            diario, estás encontrando y trabajando con JavaScript en algún lugar
            bajo el capó.
          </p>
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>La web moderna</h4>
          <p>
            La arquitectura de la web moderna está hecho de tres ingredientes:
            HTML, CSS, y JavaScript.
          </p>
          <p>
            Piénsalo así: si la pagína de la web es un carro, HTML es el marco
            del carro, CSS es el estilo , el color, las ruedas etc, y JavaScript
            es el motor. Es lo que hace que nuestro carro haga lo que se supone
            que hace: MANEJAR!
          </p>
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>HTML</h4>
          <p>
            HTML, o Hypertext Markup Language, es la columna vertebral de la
            web. Está justamente bajo la superficie de todo lo que veas el la
            web. HTML es un lenguaje markup que significa que indica al
            navegador cómo mostrar información. Ya sea el texto de un párrafo o
            un link, HTML es lo que da contenido a nuestros sitios.
          </p>
          <p>Básicamente HTML parece así:</p>
          <CodeBlock code={someHTML} />
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>CSS</h4>
          <p>
            CSS es el acrónimo de Cascading Style Sheets y con énfasis en{" "}
            <i>Style o Estilo.</i> Mientras HTML se usa para la estructura de
            una página web CSS existe para estilar un documento. Diseños de
            página, tamaño de letra (font) y colores están determinados con CSS.
            Hay que pensar en HTML como la fundación (cada una casa la tiene) y
            CSS como las opciónes estéticas.
          </p>
          <p>Básicamente CSS parece así:</p>
          <CodeBlock code={someCSS} lang="css" />
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>JavaScript</h4>
          <p>
            JavaScript o <i>JS</i> en corto es un lenguaje dinámico y robusto
            que, cuando se aplique a un documento HTML, puede proveer
            interactividad dinámica en sitios de web.
          </p>
          <p>
            Lo que puedes hacer con JavaScript en un navegador se puede dividir
            en dos categorías. Primero es la habilidad de JS para interactuar
            con los elementos del navegador que hemos mencionado antes
            (HTML/CSS) y segundo, la habilidad que JS nos da a transformar y
            manipular datos.
          </p>
          <p>
            Digamos que alguien que se llama Brandon visitó nuestro sitio y
            colocó su nombre en un campo formulario HTML. Con el poder de JS
            podemos leer su entrada y crear contenido interactivo que sea único
            para él. Entonces, cuando Brandon visite a nuesto sitio otra vez
            podremos mostrar un saludo como <i>Bienvenido de nuevo, Brandon!</i>
          </p>
          <p>
            Cuando se combina JS con HTML y CSS ingenieros pueden crear
            aplicaciones interactivas que son creativas, poderosas, rápidas, y
            únicas. Este es sólo el principio de un viaje muy emocionante!
          </p>
          <p>Básicamente JS parece así:</p>
          <CodeBlock code={someJS} lang="javascript" />
        </article>
        <HL />
      </main>
    </div>
  );
};

export default Post;
