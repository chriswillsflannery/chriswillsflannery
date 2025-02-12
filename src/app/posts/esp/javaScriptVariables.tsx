/*
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from "@/styles/Home.module.css";
import { CodeBlock, HL } from "src/components";

const link = { color: "darkSlateBlue" };

const comoMePorto = `
const comoMePorto = 'bonito';
`;

const strings = `
const corazon = 'transparente';
const estrella = 'yellow';
// estos son del tipo 'string'.
`;

const complexStrings = `
corazon.seHaHechoClic = true; // este tipo es 'boolean'
corazon.color = 'rojo'; // este tipo es 'string'
`;

const primitiveTypes = `
string // 'rojo', 'transparente', etc
boolean // true, false
number // 1, 10, 3842
null // ausencia intencionada de valor
undefined // valor que existe pero que aún no se ha definido
`;

const firstObject = `
const corazon = {
  seHaHechoClic: true,
  color: 'rojo',
};
`;

const objectWithObject = `
const corazon = {
  seHaHechoClic: true,
  estilos: {
    color: 'rojo',
    tamano: 'grande'
  }
};
`;

const JavaScriptQueEs: NextPage = () => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        <h1>{`JavaScript: Variables y tipos primitivos`}</h1>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>En JavaScript, ¿qué es una variable?</h4>
          <p>
            Las variables son elementos que nos permiten almacenar datos - datos
            que luego podemos usar y manipular. Las variables nos permiten
            almacenar y hacer referencia a la información en la memoria de
            nuestros dispositívos.
          </p>
          <CodeBlock code={comoMePorto} />
          <p>
            Digamos que queremos crear una app como TikTok. Cuando alguien sube
            un nuevo video, queremos que la gente pueda darle <i>like</i> a su
            video por hacer <i>clic</i> en el ícono del corazón. Cuando hace{" "}
            <i>clic</i>, el corazón deberia volverse rojo.
          </p>
          <p>
            La variable en este caso sería <b>corazón.</b> Corazón podría tener
            una multitúd de diferentes <i>estados</i> or <i>states.</i> Corazón
            podría ser `rojo` o `transparente` - estos tipos de datos se llaman{" "}
            <i>strings.</i> Se ven así:
          </p>
          <CodeBlock code={strings} />
          <p>
            O, <b>corazón</b> podría ser un tipo de dato más complejo, que a su
            vez tiene mas <i>states.</i> Esto podría aparecer así:
          </p>
          <CodeBlock code={complexStrings} />
        </article>
        <HL />

        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>
            Las variables pueden venir de muchos diferentes <i>tipos</i> o{" "}
            <i>types</i>; aquí hay algunos:
          </h4>
          <CodeBlock code={primitiveTypes} />
          <p>
            Los de arriba están conocidos como <i>primitivos</i> y son los más
            sencillos, y fundamentales bloques de construcción del lenguaje.
          </p>
          <p>
            También hay tipos de datos más complejos conocidos como{" "}
            <i>objetos</i> o <i>objects.</i> El ejemplo de arriba donde{" "}
            <b>corazón</b> tiene muchos diferentes <i>states</i> (seHaHechoClic,
            color) es un objeto, se ve así:
          </p>
          <CodeBlock code={firstObject} />
          <p>
            Hay que pensar en un objeto como un contenedor de variables.
            Cualquiera de las variables descritas en el objeto se llaman{" "}
            <i>propiedades</i> o <i>properties.</i> Estas propiedades en el
            objeto podrían ser cualquiera de los <i>types</i> mencionados
            anteriormente... incluso objetos!
          </p>
          <CodeBlock code={objectWithObject} />
          <p>
            * Te habrás dado cuenta de que normalmente no utilizamos el acento o
            la tilde al escribir nuestro código, incluso cuando utilizamos
            nombres en español. Este consejo viene de mis amigos de{" "}
            <a style={link} href="https://mytypeof.dev/">
              my typeof Radio
            </a>
            .
          </p>
        </article>
        <HL />
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../../">Home</Link>
        </p>
      </footer>
    </div>
  );
};

export default JavaScriptQueEs;
*/
