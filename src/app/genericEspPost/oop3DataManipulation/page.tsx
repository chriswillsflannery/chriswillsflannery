'use client'
import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";

const parentChild = `
// create a parent object
const myPerson = {
  arms: 2,
  legs: 2,
};

// create a child object that links to parent object
const chris = Object.create(myPerson);
`;

const chrisHands = `
// create a parent object
const myPerson = {
  arms: 2,
  legs: 2,
};

// create a child object that links to parent object
const chris = Object.create(myPerson);
console.log(chris.hands);
// undefined
`;

const chrisHasOwnProperty = `
// create a parent object
const myPerson = {
  arms: 2,
  legs: 2,
};

// create a child object that links to parent object
const chris = Object.create(myPerson);
console.log(chris.hasOwnProperty('arms'));
// false
`;

const forLoop = `
for (let key in chris) {
  console.log(key);
}
// arms
// legs
`;

const forLoopCombine = `
for (let key in chris) {
  console.log(key, chris.hasOwnProperty(key));
}
// arms false
// legs false
`;

const propWithConsoleLog = `
const chris = Object.create(myPerson);
chris.hands = 2;
console.log(chris);
// { hands: 2 }
`;

const propWithDelete = `
const chris = Object.create(myPerson);
chris.hands = 2;
console.log(chris);
// { hands: 2 }
delete chris.hands;
console.log(chris);
// {}
`;

const attemptDeleteOnPrototype = `
const chris = Object.create(myPerson);
chris.hands = 2;
console.log(chris);
// { hands: 2 }
delete chris.hands;
console.log(chris);
// {}
delete chris.arms;
console.log(chris.arms);
// 2
`;

const Manipulacion = () => {
    return (
      <div className="prose max-w-none">
        <main>
          <h1>Object-Oriented Programación en JS: 3. Manipulación de Datos</h1>
          <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
            <h4>
              Explicando la reflexión, enumeración y supresión - 3 temas criticales de
              trabajar con datos en objetos.
            </h4>
            <p>
              Como ya hemos visto en el artículo anterior de OOP, podemos usar el
              método Object.create() para crear un nuevo objeto que enlaza a otro
              objeto, y cuando tenemos esta relación padre-hijo, el objeto padre se
              llama <b>Prototipo</b> del hijo.
            </p>
            <p>
              En el siguiente ejemplo, <b>myPerson</b> se consideraría el Prototipo de{" "}
              <b>chris.</b>
            </p>
            <CodeBlock code={parentChild} />

            <p>
              Si quieres saber si un objeto tiene una propiedad, podemos buscarla utilizando la notación de punto o de corchetes. Y ¿si buscamos una propiedad que no existe en el objeto? Por ejemplo, chris.hands daría el valor undefined. Pero ¿Qué pasa si queremos buscar una propiedad que existe más arriba en el vínculo prototípico?
            </p>

            <CodeBlock code={chrisHands} />

            <p>
              Si intentamos hacer referencia a chris.arms, el intérprete de JavaScript primero va a buscar en el objeto chris,verá que ahí no lo existe, y intenta buscar más arriba del vínculo prototípico, hasta myPerson, y ahí verá que myPerson si tiene la propiedad arms, y devolverá el valor correspondiente, 2.
            </p>

            <p>
              So, por usar notación de punto o corchetes para buscar una propiedad no necesariamente garantiza que una propiedad existe en el propio objeto - puede ser que la existe en el prototipo del objeto. Así que, cómo nos aseguramos que una propiedad existe en el propio objeto?
            </p>

            <p>
              Una manera de lograr esto es por utilizar el método hasOwnProperty. Vamos a intentar:
            </p>

            <CodeBlock code={chrisHasOwnProperty} />

            <p>
              Podemos ver del ejemplo anterior que no, el objeto chris su mismo no tiene la propiedad arms.
            </p>

            <p>
              Otra manera de comprobar si un objeto tiene una propiedad: podemos usar el for...in loop para iterar sobre las propiedades de un objeto, por ejemplo:
            </p>

            <CodeBlock code={forLoop} />

            <p>
              El problema con esto es que cuando yo console.log() cada propiedad del objeto, el for..in loop no solo va a iterar sobre las clave del propio chris, sino también va a iterar sobre cualquieres claves he creado el el prototipo de ese objeto. Así que podemos combinar un for..in loop con el método hasOwnProperty:
            </p>

            <CodeBlock code={forLoopCombine} />

            <p>
              En el ejemplo anterior podemos usar hasOwnProperty para filtrar las propiedades que no nos importa. Una cosa para tener en cuenta durante este proceso es que el orden de claves en un objeto no es necesariamente guarantizado. Así que, si necesitas una solución que guarantiza que las claves siempre están en el orden correcto, puedes agarrar una estructura de datos diferente como un Map.
            </p>

            <p>
              También puedes usar un array, y si estás usando algún tipo de método para iterar sobre el array, no tienes que preocupar por las propiedades que existen arriba del vínculo prototípico, pero es posible que haya inconvenientes de funcionamiento por usar un array en lugar de un objeto. Esto puedes aprender por estudiar Notación Big O, especificamente sobre tiempo constante de Objetos y tiempo linear de elementos Array.
            </p>

            <p>
              Si queremos eliminar una propiedad de un objeto, por ejemplo, si tenemos una propiedad en chris:
            </p>

            <CodeBlock code={propWithConsoleLog} />

            <p>
              ¿Y si queremos eliminar esta propiedad de chris? Podemos usar la clave delete:
            </p>

            <CodeBlock code={propWithDelete} />

            <p>
              Sin embargo, ¿Qué pasaría si intentáramos eliminar una propiedad que existe más arriba del vínculo prototípico?
            </p>

            <CodeBlock code={attemptDeleteOnPrototype} />

            <p>
              ¿Aún tiene chris la propiedad arms - la que existe más arriba del vínculo? Sí - la tiene. Así que no pude eliminar una propiedad arriba del vínculo con delete. Para eliminar esa propiedad arms, tendría que eliminar el vínculo entre chris y myPerson, o eliminar arms directamente de myPerson. Cuando tenemos propiedades que existen arriba del vínculo que no se puede eliminar, esas están llamados propiedades no-configurables.
            </p>

            <p>
              Cualquieras propiedades que existen en objetos por defecto, como Object.hasOwnProperty o Array.push, se consideran propiedades no-configurables. Existen por defector - están ahí nativamente - y no las pueden eliminarse.
            </p>

          </article>
          <HL />
        </main>
      </div>
    );
  };
  
  export default Manipulacion;