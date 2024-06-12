import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter(); 

  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {locales?.map((l, i) => (
        <Link key={`${l}-${i}`} style={{ padding: '8px 12px' }} href={asPath} locale={l}>
          <button
            style={{ margin: '8px 8px 0 0', padding: '8px 12px', fontWeight: '600', cursor: 'pointer'}}
            className={l === locale ? styles.selected : ''}
          >
            {l === 'en-US' ? 'English' : 'Español'}
          </button>
        </Link>
      ))}

      <main className={styles.main}>
        <h1 className={styles.title}>
          {locale === 'en-US' ? (
            `Hello There.`
          ) : (
            `Bueeeenas.`
          )}
        </h1>

        {locale==='en-US' ? (
          <>
            <p>
              <Link href="./posts/cookieClickerReact">
                {`Cookie Clicker: React Refs`}
              </Link>
            </p>

            <p>
              <Link href="./posts/goRoutine">
                {`Go Routines`}
              </Link>
            </p>

            <p>
              <Link href="./posts/useFetch">
                {`Custom TS React hook: useFetch`}
              </Link>
            </p>

            <p>
              <Link href="./posts/willAITakeCodingJobs">
                {`Will A.I. Replace Coding Jobs?`}
              </Link>
            </p>

            <p>
              <Link href="./posts/snowCrash">
                {`Snow Crash: Machine Learning & The Future of Research`}
              </Link>
            </p>

            <p>
              <Link href="./posts/oop3DataManipulation">
                {`Object-Oriented Programming in JS: 3. Data Manipulation`}
              </Link>
            </p>
          
            <p>
              <Link href="./posts/oop2PrototypeChain">
                {`Object-Oriented Programming in JS: 2. Prototypal Inheritance`}
              </Link>
            </p>

            <p>
              <Link href="./posts/oop1DataLookup">
                {`Object-Oriented Programming in JS: 1. Data lookup on objects`}
              </Link>
            </p>

            <p>
              <Link href="./posts/extendingTsGenerics">
                {`Oct 18 2022: Constraining TS Generics with "Extends" pattern`}
              </Link>
            </p>

            <p>
              <Link href="./posts/introToGenerics">
                Sept 20 2022: Intro to Generics with Type-Level-Typescript
              </Link>
            </p>

            <p>
              <Link href="./posts/discriminatedUnionsTS">
                Sept 2 2022: Discriminated Unions in TypeScript
              </Link>
            </p>

            <p>
              <Link href="./posts/destructuredVariableFromArray">
                Aug 31 2022: Destructured variable from array (JS)
              </Link>
            </p>

            <p>
              <Link href="./posts/turnNextIntoCra">
                Aug 23 2022: Turning NextJS into CRA
              </Link>
            </p>

            <p>
              <a href="https://www.youtube.com/watch?v=ByuEfCcj1vg">[EXT] Aug 21 2022: Parse data like a Blade Runner with JavaScript</a>
            </p>
            
            <p>
              <a href="https://www.youtube.com/watch?v=0V2Mi16xd04">[EXT] Aug 15 2022: Find the Mode of a dataset (sub. Español)</a>
            </p>
          </>
        ) : (
          <>
            <p>
              <Link href="./posts/oop3DataManipulation">
                {`Object-Oriented Programación en JS: 3. Manipulación de Datos`}
              </Link>
            </p>
            <p>
              <Link href="./posts/oop2PrototypeChain">
                {`Object-Oriented Programación en JS: 2. Herencia Prototípica`}
              </Link>
            </p>
            <p>
              <Link href="./posts/oop1DataLookup">
                {`Object-Oriented Programación en JS: 1. Busquéda de datos en objetos`}
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptReduce">
                20 Nov 2022: JavaScript: reduce()
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptMap">
                15 Nov 2022: JavaScript: map()
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptForEach">
                10 Nov 2022: JavaScript: forEach()
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptArrayMethods">
                8 Nov 2022: JavaScript: Métodos de Array
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptLoops">
                31 Oct 2022: JavaScript: For Loops
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptDatosAlmacenamiento">
                27 Oct 2022: JavaScript: Almacenamiento de datos
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javascriptComoFunciona">
                24 Oct 2022: JavaScript: ¿Cómo funciona?
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javaScriptVariables">
                22 Oct 2022: JavaScript: Variables y tipos primitivos
              </Link>
            </p>
            <p>
              <Link href="./posts/esp/javaScriptQueEs">
                20 Oct 2022: JavaScript: ¿Qué es?
              </Link>
            </p>
          </>
        )}

      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="./archive">
            {locale === 'en-US' ? 'Archive' : 'Archivo'}
          </Link>
        </p>
        <p>
          <Link href="./crossword">
            {locale === 'en-US' ? 'Crossword' : 'Crucigramas'}
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Home
