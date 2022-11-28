export const es = {
  oop1: {
    title: <h1>Object-Oriented Programación: 1. Busquéda de datos en objetos</h1>,
    1: <p>Hoy vamos a hablar sobre como recuperar datos de los objetos y algunos errores comunes y <i>edge cases</i> a tener en cuenta.</p>,
    2: <p>Aquí he definido un <i>objeto literal</i> con corchetes:</p>,
    3: <p>Tiene 2 propiedades o <i>key-value pairs</i> que tienen valores <i>strings</i>, y también un <i>key</i> o clave que tiene una función como su valor. Lo llamamos un <b>método.</b> Una nota - estoy usando las palabras <i>clave</i> y <i>propiedad</i> indistintamente.</p>,
    4: <p>Se puede recuperar las propiedades en una de dos maneras:</p>,
    5: <p>Podemos usar notación de punto o de corchete. (De corchete vamos a hablar luego). Notación de punto usamos cuando queremos buscar una propiedad en un objeto, y ya sabemos el nombre de la propiedad que estamos buscando (en el ejemplo de arriba, eso es <i>fur</i>). Así que cuando hacemos referencia directamenta a la propiedad <i>fur</i> en <b>dog</b>, esto devolverá el valor asociado, &quot;brown&quot;.</p>,
    6: <p>Que pasaría si intentamos hacer referencia a una propiedad que no existe? Por ejemplo:</p>,
    7: <p>Si no necesariamente estamos seguro que una propiedad existe en un objeto, una manera que podemos guardar nuestro código es por usar el operador lógico <b>OR</b>:</p>,
    8: <p>Lo que estamos diciendo aquí es, si la propiedad <b>height</b> no existe en <b>dog</b>, entonces queremos devolver 10. Esto es una parte de un concepto más grando conocido como <i>defensive coding</i> o codificación defensiva.</p>,
    9: <p>Y si queremos actualizar una propiedad en un objeto? Digamos que queremos cambiar los ojos de <b>dog</b> a <i>green.</i> Podemos reasignar la propiedad:</p>,
    10: <p>Podemos usar notación de punto aquí porque sabemos que <i>eyes</i> es una propiedad que ya existe en el objeto. Pero qué pasaría si intentamos hacer esto con una propiedad que no existe en el objeto?</p>,
    11: <p>No va a actualizar nada - no hay preexiste propiedad llamada <b>weight</b> para actualizar - sino, simplemente añadirá una nueva propiedad al objeto:</p>,
    12: <h4>Notación de Corchetes</h4>,
    13: <p>¿Y si no necesariamente sabemos el nombre de la clave que estamos intentar hacer referencia? O si por alguna razón no tenemos acceso a esa clave?</p>,
    14: <p>Hemos declarado un objeto con 2 propiedades, y una función - esta función toma como parámetros un objeto y un nombre, y intenta buscar este nombre en el objeto por notación de corchetes y devuelve su valor corespondiente. Entonces luego cuando llamamos esta función, pasando como argumentos una referencia al objeto &apos;scores&apos; y el string &apos;chris&apos;, la función devolverá <b>scores[&apos;chris&apos;]</b>.</p>,
    15: <p>Esto es un modelo bueno porque hace que la función sea reutilizable - la notación de corchete nos da la habilidad de buscar una propiedad en el objeto dinámicamente por usar una variable, en lugar del nombre literal de la clave.</p>,
    16: <p>En cada objeto de JavaScript, está implícito que las claves de un objeto son de type <i>string</i>:</p>,
    17: <p>Aquí, el <i>date</i> es un string y su valor corespondiente es un número. La misma cosa por <i>price.</i> ¿Y si necesitamos crear una clave en el objeto con caracteres especiales?</p>,
    18: <p>Y por los nombres de clave no alfanuméricos (aquí nuestra clave tiene guión) podemos rodear las claves con comillas:</p>,
    19: <p>Entonces luego podemos recuperar <i>price-USD</i> por usar notación de corchete:</p>,
  }
}