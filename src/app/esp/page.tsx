import Link from "next/link";

const HomeEsp = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{`Bueeeeenas`}</h1>

      <ul className="list-disc pl-5 space-y-2">
        <ListItem
          href="./post-esp/oop3DataManipulation"
          title="Object-Oriented Programación en JS: 3. Manipulación de Datos"
        />
        {/* <ListItem
            href="./posts/oop2PrototypeChain"
            title="Object-Oriented Programación en JS: 2. Herencia Prototípica"
          />
          <ListItem
            href="./posts/oop1DataLookup"
            title="Object-Oriented Programación en JS: 1. Busquéda de datos en objetos"
          />
          <ListItem
            href="./posts/esp/javascriptReduce"
            title="20 Nov 2022: JavaScript: reduce()"
          />
          <ListItem
            href="./posts/esp/javascriptMap"
            title="15 Nov 2022: JavaScript: map()"
          />
          <ListItem
            href="./posts/esp/javascriptForEach"
            title="10 Nov 2022: JavaScript: forEach()"
          />
          <ListItem
            href="./posts/esp/javascriptArrayMethods"
            title="8 Nov 2022: JavaScript: Métodos de Array"
          />
          <ListItem
            href="./posts/esp/javascriptLoops"
            title="31 Oct 2022: JavaScript: For Loops"
          />
          <ListItem
            href="./posts/esp/javascriptDatosAlmacenamiento"
            title="27 Oct 2022: JavaScript: Almacenamiento de datos"
          />
          <ListItem
            href="./posts/esp/javascriptComoFunciona"
            title="24 Oct 2022: JavaScript: ¿Cómo funciona?"
          />
          <ListItem
            href="./posts/esp/javaScriptVariables"
            title="22 Oct 2022: JavaScript: Variables y tipos primitivos"
          /> */}
          <ListItem
            href="./post-esp/javaScriptQueEs"
            title="20 Oct 2022: JavaScript: ¿Qué es?"
          />
          <br />
          <li> Under (Re)Construction </li>
      </ul>
    </>
  );
};

const ListItem = ({ href, title }: { href: string; title: string }) => (
  <li>
    <Link href={href} className="underline hover:no-underline">
      {title}
    </Link>
  </li>
);

export default HomeEsp;
