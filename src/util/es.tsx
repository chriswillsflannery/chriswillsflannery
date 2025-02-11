export const es = {
  snowCrash: {
    title: <h1>Snow Crash: Machine Learning & The Future of Research</h1>,
    sub1: <h4>What determines &apos;original&apos; content anyway? </h4>,
    1: <p>Coming Soon</p>,
  },
  oop1: {
    title: (
      <h1>
        Object-Oriented Programación en JS: 1. Busquéda de datos en objetos
      </h1>
    ),
    1: (
      <p>
        Hoy vamos a hablar sobre como recuperar datos de los objetos y algunos
        errores comunes y <i>edge cases</i> a tener en cuenta.
      </p>
    ),
    2: (
      <p>
        Aquí he definido un <i>objeto literal</i> con corchetes:
      </p>
    ),
    3: (
      <p>
        Tiene 2 propiedades o <i>key-value pairs</i> que tienen valores{" "}
        <i>strings</i>, y también un <i>key</i> o clave que tiene una función
        como su valor. Lo llamamos un <b>método.</b> Una nota - estoy usando las
        palabras <i>clave</i> y <i>propiedad</i> indistintamente.
      </p>
    ),
    4: <p>Se puede recuperar las propiedades en una de dos maneras:</p>,
    5: (
      <p>
        Podemos usar notación de punto o de corchete. (De corchete vamos a
        hablar luego). Notación de punto usamos cuando queremos buscar una
        propiedad en un objeto, y ya sabemos el nombre de la propiedad que
        estamos buscando (en el ejemplo de arriba, eso es <i>fur</i>). Así que
        cuando hacemos referencia directamenta a la propiedad <i>fur</i> en{" "}
        <b>dog</b>, esto devolverá el valor asociado, &quot;brown&quot;.
      </p>
    ),
    6: (
      <p>
        Que pasaría si intentamos hacer referencia a una propiedad que no
        existe? Por ejemplo:
      </p>
    ),
    7: (
      <p>
        Si no necesariamente estamos seguro que una propiedad existe en un
        objeto, una manera que podemos guardar nuestro código es por usar el
        operador lógico <b>OR</b>:
      </p>
    ),
    8: (
      <p>
        Lo que estamos diciendo aquí es, si la propiedad <b>height</b> no existe
        en <b>dog</b>, entonces queremos devolver 10. Esto es una parte de un
        concepto más grando conocido como <i>defensive coding</i> o codificación
        defensiva.
      </p>
    ),
    9: (
      <p>
        Y si queremos actualizar una propiedad en un objeto? Digamos que
        queremos cambiar los ojos de <b>dog</b> a <i>green.</i> Podemos
        reasignar la propiedad:
      </p>
    ),
    10: (
      <p>
        Podemos usar notación de punto aquí porque sabemos que <i>eyes</i> es
        una propiedad que ya existe en el objeto. Pero qué pasaría si intentamos
        hacer esto con una propiedad que no existe en el objeto?
      </p>
    ),
    11: (
      <p>
        No va a actualizar nada - no hay preexiste propiedad llamada{" "}
        <b>weight</b> para actualizar - sino, simplemente añadirá una nueva
        propiedad al objeto:
      </p>
    ),
    12: <h4>Notación de Corchetes</h4>,
    13: (
      <p>
        ¿Y si no necesariamente sabemos el nombre de la clave que estamos
        intentar hacer referencia? O si por alguna razón no tenemos acceso a esa
        clave?
      </p>
    ),
    14: (
      <p>
        Hemos declarado un objeto con 2 propiedades, y una función - esta
        función toma como parámetros un objeto y un nombre, y intenta buscar
        este nombre en el objeto por notación de corchetes y devuelve su valor
        corespondiente. Entonces luego cuando llamamos esta función, pasando
        como argumentos una referencia al objeto &apos;scores&apos; y el string
        &apos;chris&apos;, la función devolverá <b>scores[&apos;chris&apos;]</b>
        .
      </p>
    ),
    15: (
      <p>
        Esto es un modelo bueno porque hace que la función sea reutilizable - la
        notación de corchete nos da la habilidad de buscar una propiedad en el
        objeto dinámicamente por usar una variable, en lugar del nombre literal
        de la clave.
      </p>
    ),
    16: (
      <p>
        En cada objeto de JavaScript, está implícito que las claves de un objeto
        son de type <i>string</i>:
      </p>
    ),
    17: (
      <p>
        Aquí, el <i>date</i> es un string y su valor corespondiente es un
        número. La misma cosa por <i>price.</i> ¿Y si necesitamos crear una
        clave en el objeto con caracteres especiales?
      </p>
    ),
    18: (
      <p>
        Y por los nombres de clave no alfanuméricos (aquí nuestra clave tiene
        guión) podemos rodear las claves con comillas:
      </p>
    ),
    19: (
      <p>
        Entonces luego podemos recuperar <i>price-USD</i> por usar notación de
        corchete:
      </p>
    ),
  },
  oop2: {
    title: <h1>Object-Oriented Programación en JS: 2. Herencia Prototípica</h1>,
    sub1: (
      <h4>
        ¿Qué demonios es un prototipo de objeto? Esto no es la Java que conozco
        y amo! Arrgh!! En este video les explico las relaciónes padre-hijo
        inherente a todos los objetos en JavaScript y por qué es importante
        entenderlo.
      </h4>
    ),
    1: (
      <p>
        Entonces, una parte fundamental de OOP (Object-Oriented Programación) en
        JavaScript: todos los objectos son interconectados en una relación
        padre-hijo. La manera en que realmente conectan es por un vínculo
        invisible, y la propiedad que nos da acceso a ese vínculo es algo
        llamado <b>[[Prototype]]</b>.
      </p>
    ),
    2: (
      <p>
        Si abro una nueva pestaña del navegador y entro en los devtools, y entro
        en la pestaña `console`, quiero ver ese vínculo desde el padre al hijo.
      </p>
    ),
    3: (
      <p>
        En JavaScript, hay una sola objeto `padre` que existe como un `modelo`
        por todos los objetos que creamos. Queremos ver cómo es este vínculo el
        el objeto padre. Voy a crear un nuevo objeto con sintaxis `objeto
        literal` para representarlo.
      </p>
    ),
    4: (
      <p>
        Dice `undefined` - realmente no he hecho nada ya con esta variable, así
        que esto es lo que se espera. Lo que quiero hacer es ver a las
        propiedades de <b>myObj</b> - voy a abril este icono triangular para ver
        las propiedades del objeto:
      </p>
    ),
    5: (
      <p>
        Este es un nuevo objeto - ya no tiene propiedades, porque ya no he hecho
        nada dentro. Pero tiene este singular, más o menos gris, propiedad
        sercreta, llamada <b>[[Prototype]]</b>. Así que, ¿a donde enlaza esto?
        Pues, es un puntero al otro objeto - si has visto mis otros videos, ya
        sabemos que todos los objetos en JavaScript son `pasado por referencia`.
        Así que, esta haciendo referencia al otro objeto se llama `Object`.
      </p>
    ),
    6: (
      <p>
        Si abrimos este panel veremos todas las propiedades del Objeto. Este
        vínculo, esta conexión entre Objeto y todos los objetos regulares que
        creamos, se llama el <i>Vínculo Prototipal.</i> Esto se llama así porque
        cada vez que tenemos esta relación padre-hijo entre 2 objetos, el padre
        se considera el `Prototype` del hijo.
      </p>
    ),
    7: (
      <p>
        Todos los objetos en JavaScript heredan de Object. Si yo creo más
        objetos, todos van a tener un vínculo prototipico al Object.
      </p>
    ),
    8: (
      <p>
        Similarmente, tenemos algo en JavaScript se llama <b>Array.</b> y cuando
        creo un nuevo array, usando sintaxis array literal (corchetes
        cuadrados), ya herederá las propiedades del Array. Así que Array será el
        Prototype del array que acabo de crear. Curiosamente, el Prototype del
        Array es Object. Esto siginifica que cuando inicializo un nuevo array,
        va a heredar todas las propiedades disponibles del padre Prototype
        Array, así como todas las propiedades del abuelo Prototype Object.
      </p>
    ),
    9: (
      <p>
        Si volvemos de entrar los devtools del navegador y creamos un nuevo
        array, y vemos las propiedades de este array, podemos ver un vínculo al
        Array, y entonces en Array podemos ver un vínculo [[Prototype]] al
        Object.
      </p>
    ),
    10: (
      <p>
        So, siempre nos referimos al padre de un objeto como su Prototype. Pero
        un Prototype de objeto no necesariamente siempre necesita ser Array o
        Object. Realmente podemos crear esta relación padre-hijo entre 2 objetos
        que creamos, así que uno puede heredar las propiedades del otro. En el
        pasado (hasta ES6), solíamos hacerlo con un método especial llamado{" "}
        <b>Object.create().</b> Actualmente, este método está esencialmente
        obsoleto, pero sigue siendo instructivo a mostrar como funciona el
        idioma <i>bajo el capó</i>.
      </p>
    ),
    11: (
      <p>
        Hemos creado aquí un nuevo objeto, <b>myPerson</b>, y queremos que esto
        se comporte como el `padre`, así que los otros objetos tengan un vínculo
        a myPerson. Si yo creo un objeto llamado Chris, usando
        Object,create()...
      </p>
    ),
    12: (
      <p>
        ...Y si yo fuera a pasar null como argumento, qué pensamos sucederá?
        Esto va a crear un nuevo objeto vacío. En el pasado, este objeto recién
        creado tendría un vínculo [[Prototype]], pero curiosamente, parecía que
        se han eliminado esta función (al menos del Chrome Engine). A donde
        pensamos que el [[Prototype]] de este nuevo objeto habría enlazado?
        Bueno, si usamos null aquí, entonces el [[Prototype]] enlazaría al
        Objeto, justo como lo que vimos cuando creabamos un nuevo objeto con
        sintaxis objeto literal (corchetes). Actualmente, con mejoras en el
        idioma, Object.create(null) parece a crear un objeto vacío sin nada
        dentro!
      </p>
    ),
    13: (
      <p>
        Quiero que mi objeto <b>chris</b> herede las propiedades de{" "}
        <b>myPerson.</b> O sea, quiero que myPerson sea el padre, y chris sea el
        hijo. Cómo lo hacemos? Vamos a pasar myPerson como argumento al
        Object.create().
      </p>
    ),
    14: (
      <p>
        Veremos a <b>chris</b> en los devtools a ver que pasó - voy a pegar
        esto:
      </p>
    ),
    15: (
      <p>
        Aquí vemos que Object.create() creó un objeto - y vamos a abrirlo a ver
        sus propiedades - vamos a ver hacia donde este [[Prototype]] enlaza:
      </p>
    ),
    16: (
      <p>
        Podemos ver que todas las propiedades de su Prototype - su padre - son
        las propiedades de myPerson. Y podemos ver que el [[Prototype]] de este
        objeto enlaza a Object. Así que puedes ver que por usar el método
        Object.create(), pasando una referencia a otro objeto, hemos creado
        efectivamente una relación padre-hijo entre 2 objetos que hemos creado.
        Vamos a explorar por qué este método es útil más profundamente.
      </p>
    ),
    17: (
      <p>
        ¿Por qué es útil? Cuando queremos buscar una propiedad en un objeto,
        puede ser que ese objeto no tiene la propiedad que estamos buscando. Lo
        qué JavaScript hará es decir, okey, este objeto no tiene la propiedad
        que estamos buscando, así que vamos a buscar arriba del vínculo
        prototipico a ver si algún antepasado del objeto tiene esa propiedad. Si
        esta propiedad no existe en ningúna parte del vínculo prototípico,
        devolverá <i>undefined</i>.
      </p>
    ),
    18: (
      <p>
        Este proceso de buscar hacia arriba del vínculo se llama{" "}
        <i>delegación.</i>
      </p>
    ),
  },
  oop3: {
    title: (
      <h1>Object-Oriented Programación en JS: 3. Manipulación de Datos</h1>
    ),
    sub1: (
      <h4>
        Explicando la reflexión, enumeración y supresión - 3 temas criticales de
        trabajar con datos en objetos.
      </h4>
    ),
    1: (
      <p>
        Como ya hemos visto en el artículo anterior de OOP, podemos usar el
        método Object.create() para crear un nuevo objeto que enlaza a otro
        objeto, y cuando tenemos esta relación padre-hijo, el objeto padre se
        llama <b>Prototipo</b> del hijo.
      </p>
    ),
    2: (
      <p>
        En el siguiente ejemplo, <b>myPerson</b> se consideraría el Prototipo de{" "}
        <b>chris.</b>
      </p>
    ),
    3: (
      <p>
        Si quieres saber si un objeto tiene una propiedad, podemos buscarla
        utilizando la notación de punto o de corchetes. Y ¿si buscamos una
        propiedad que no existe en el objeto? Por ejemplo, <b>chris.hands</b>{" "}
        daría el valor <i>undefined.</i> Pero ¿Qué pasa si queremos buscar una
        propiedad que existe más arriba en el <b>vínculo prototípico</b>?
      </p>
    ),
    4: (
      <p>
        Si intentamos hacer referencia a <b>chris.arms</b>, el intérprete de
        JavaScript primero va a buscar en el objeto <i>chris,</i>verá que ahí no
        lo existe, y intenta buscar más arriba del vínculo prototípico, hasta{" "}
        <i>myPerson,</i> y ahí verá que myPerson si tiene la propiedad{" "}
        <b>arms</b>, y devolverá el valor correspondiente, 2.
      </p>
    ),
    5: (
      <p>
        So, por usar notación de punto o corchetes para buscar una propiedad no
        necesariamente garantiza que una propiedad existe en el propio objeto -
        puede ser que la existe en el prototipo del objeto. Así que, cómo nos
        aseguramos que una propiedad existe en el propio objeto?
      </p>
    ),
    6: (
      <p>
        Una manera de lograr esto es por utilizar el método{" "}
        <b>hasOwnProperty</b>. Vamos a intentar:
      </p>
    ),
    7: (
      <p>
        Podemos ver del ejemplo anterior que no, el objeto <b>chris</b> su mismo
        no tiene la propiedad <b>arms.</b>
      </p>
    ),
    8: (
      <p>
        Otra manera de comprobar si un objeto tiene una propiedad: podemos usar
        el <b>for...in</b> loop para iterar sobre las propiedades de un objeto,
        por ejemplo:
      </p>
    ),
    9: (
      <p>
        El problema con esto es que cuando yo console.log() cada propiedad del
        objeto, el for..in loop no solo va a iterar sobre las clave del propio{" "}
        <b>chris</b>, sino también va a iterar sobre cualquieres claves he
        creado el el prototipo de ese objeto. Así que podemos combinar un
        for..in loop con el método <b>hasOwnProperty:</b>
      </p>
    ),
    10: (
      <p>
        En el ejemplo anterior podemos usar hasOwnProperty para filtrar las
        propiedades que no nos importa. Una cosa para tener en cuenta durante
        este proceso es que el orden de claves en un objeto no es necesariamente
        guarantizado. Así que, si necesitas una solución que guarantiza que las
        claves siempre están en el orden correcto, puedes agarrar una estructura
        de datos diferente como un Map.
      </p>
    ),
    11: (
      <p>
        También puedes usar un array, y si estás usando algún tipo de método
        para iterar sobre el array, no tienes que preocupar por las propiedades
        que existen arriba del vínculo prototípico, pero es posible que haya
        inconvenientes de funcionamiento por usar un array en lugar de un
        objeto. Esto puedes aprender por estudiar Notación <b>Big O</b>,
        especificamente sobre tiempo constante de Objetos y tiempo linear de
        elementos Array.
      </p>
    ),
    12: (
      <p>
        Si queremos eliminar una propiedad de un objeto, por ejemplo, si tenemos
        una propiedad en chris:
      </p>
    ),
    13: (
      <p>
        ¿Y si queremos eliminar esta propiedad de chris? Podemos usar la clave{" "}
        <b>delete:</b>
      </p>
    ),
    14: (
      <p>
        Sin embargo, ¿Qué pasaría si intentáramos eliminar una propiedad que
        existe más arriba del vínculo prototípico?
      </p>
    ),
    15: (
      <p>
        ¿Aún tiene chris la propiedad <b>arms</b> - la que existe más arriba del
        vínculo? Sí - la tiene. Así que no pude eliminar una propiedad arriba
        del vínculo con <b>delete</b>. Para eliminar esa propiedad <b>arms</b>,
        tendría que eliminar el vínculo entre chris y myPerson, o eliminar{" "}
        <b>arms</b> directamente de myPerson. Cuando tenemos propiedades que
        existen arriba del vínculo que no se puede eliminar, esas están llamados{" "}
        <i>propiedades no-configurables</i>.
      </p>
    ),
    16: (
      <p>
        Cualquieras propiedades que existen en objetos por defecto, como{" "}
        <b>Object.hasOwnProperty</b> o <b>Array.push</b>, se consideran
        propiedades no-configurables. Existen por defector - están ahí
        nativamente - y no las pueden eliminarse.
      </p>
    ),
  },
  aiTakeCodingJobs: {
    title: <h1>Will AI replace coding jobs?</h1>,
    sub1: (
      <h4>
        Short answer, <i>yeah, probably.</i> How soon? Well, that largely
        remains to be seen.
      </h4>
    ),
    1: <p>Coming soon</p>,
  },
};
