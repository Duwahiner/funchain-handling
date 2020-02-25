Funchain-handling
-----
Documetación en Español.

Manipulación de cadenas, mediate la programacíon funcional.
Algunas funciones fuerón currificadas, para su facibilida de composición

Todas las funciones validan los datos antes de ser procesados, en caso de no ser el dato esperado lanza una excepción.

Todas las funciones son puras, no mutan.

## pipe()
    Uselo cuando quiera componer funciones 


## Use
    const fh = require('./fh'); Directamente el objeto
    const { concat, filte, pipe } = require('./fh'); Directamente la función

## API

### fh.convertToTitle(frase)
Covierta una cadena en una frase tipo titulo.

### fh.concat(frase1)(frase2)
Concatene dos frases.

### fh.concatAll(frace1)(frase2, frase3)
Concatene todos las frase que desee.

### fh.concatRight(frase1)(frase2)
Concatene dos frases de derecha a hizquierda.

### fh.concatRightAll(frace1)(frase2, frase3)
Concatene mutiples frases de derecha a hizquierda.

### fh.disengageStringInLyrics(frace)
Devuelve un array de letras.

### fh.disengageStringInWords(frace)
Devuelve un array de de palabras.

### fh.endPoindString(frace)
Cumprueba que la cadena termine en punto.

### fh.endPuntoSuspensivoString(frace)
Cumprueba que la cadena termine en punto suspensivo.

### fh.extract(array)
Extrae la cadena de este contenida en un array.

### fh.firstLastUpperCase(frace)
Cumprueba que la cadena inicie y termine en mayusculas.

### fh.findLastLowerCase(frace)
Cumprueba que la cadena inicie y termine en minuscula.

### fh.find(palabra)(frace)
Cumprueba que en la cadena pasa en la segunda función exista la palabra que indicamos en la primera función.

### fh.filter(function)(frace)
filtra palabras y las devuelve en una array.

### fh.filterToString(function)(frace)
filtra palabras y las devuelve en un string.

### fh.findUpperCase(frace)
Comprueba que la cadena inicie en mayuscula.

### fh.findLowerCase(frace)
Comprueba que la cadena inicie en minuscula.

### fh.findLastUpperCase(frace)
Comprueba que la cadena termina en mayuscula.

### fh.findLastLowerCase(frace)
Comprueba que la cadena termine en minuscula.

### fh.flatExtract(number)(array)
Advertencia: el array solo debe contener strin.
Aplana un array muntidimención y luego extrae la cadena del array.

### fh.isToUpperCase(frace)
Comprueba que una cadena esta en mayuscula.

### fh.isToLowerCase(frace)
Comprueba que una cadena este en minuscula.

### fh.isLetterUpperCasee(frace)
Comprueba si la cadena contiene letras en mayuscula.

### fh.isLetterLowerCase(frace)
Comprueba si la cadena contiene letras en minuscula.

### fh.isOnlyString(frace)
Comprueba si la cadena esta sólo conformada por letras.
Esta función es excelente para detectar caracteres especiales en la cadena.
Si su valor develto es un [false] eso significa que existen caracteres especiales.

### fh.join(separador[...string])(frase)
Advertencia asegurese de que el separador sea de tipo string.
Agrega un separador a la cadena.

### fh.map(function)(frace)
Transforma una cadena y la devuelve en una array.

### fh.mapToString(function)(frace)
Transforma una cadena y la devuelve como una cadena.

### fh.passToArra(frace)
Toma una cadena y la de vuelve en un array.

### fh.reduce(function)(frace)
Reduce una cadena a su minima expresión.
Juaga mucho con el metodo para conseguir el resultado deseado.

### fh.removeTheFirstLetter(frace)
Elimina la primera letra de una cadena.

### fh.removeTheLastLetter(frace)
Elimina la ultima letra de una cadena.

### fh.reverse(frace)
Le da la vuelta a una cadena.

### fh.string(frace)
Comprueba que el argumento pasado a la función es de tipo string.

### fh.searchNumber(frace)
Comprueba si la cadena contiene algún numero.

### fh.toUpperCase(frace)
Transforma una cadena en mayuscula.

### fh.toLowerCase(frace)
Transforma una cadena en minuscula.

### fh.searchNumber(frace)
Comprueba si la cadena contiene algún numero.

### fh.takeTheFirstLetter(frace)
Devuelve la primera letra de una cadena

### fh.takeTheLastLetter(frace)
Devuelve la ultuma letra de una cadena

### fh.complement
Esta es un objeto que contiene unos metodos utiles por si deseas usar.
     
## License

slang is licensed under the MIT license.

