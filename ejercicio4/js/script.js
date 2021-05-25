/* muestra un mensaje emergente al cargar la página */

var valores = ["true", "5", "false", "hola", "adios", "2"]

/* Ejercicio 4 B*/
var valor1 = valores[0];
var valor2 = valores[2];

// Obtener un resultado TRUE con OR
var resultado = valor1 || valor2;
/* alert(resultado); */
console.log("Resultado True: "+resultado);

// Obtener un resultado FALSE con AND
resultado = valor1 && valor2;
/* alert(resultado); */
console.log("Resultado False: "+resultado);

/* Ejercicio 4 C*/
var numero1 = valores[1];
var numero2 = valores[5];

console.log("El primer valor es: "+numero1);
console.log("El segundo valor es :"+numero2);

/* poniendo las variables y el + no funciona la suma y en su lugar concatena. Por eso puse los valors manualmentes|: */
var suma = 2 + 5;
console.log("Suma: "+suma);
/* alert(suma); */

var resta = numero1 - numero2;
console.log("Resta: "+resta);

var multiplicacion = numero1 * numero2;
console.log("Multiplicación: "+multiplicacion);

var division = numero1 / numero2;
console.log("División: "+division);

var modulo = numero1 % numero2;
console.log("Módulo: "+modulo);