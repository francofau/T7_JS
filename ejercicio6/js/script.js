/* Ejercicio 6*/
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroIngresado = prompt("Introduce el número de DNI");
var letraIngresada = prompt("Introduce la letra de tu DNI");

if(numeroIngresado < 0 || numeroIngresado > 99999999) {
  alert("El número ingresado es inválido");
}
else{  
/*   creo una variable y le asigno (con ese resultado), la posicion del array que corresponda */
  var calcularLetra = letras[numeroIngresado%23];

/*   lo muestro como prueba: */  
  alert("MENSAJE DE PRUEBA\n"+  "La letra correspondiente es: \n"+calcularLetra)

  /* compara la ingresada con la correspondiente en el array */
  if(calcularLetra != letraIngresada) {
    alert("La letra o el número ingresados son incorrectos");
  }
   else {
    alert("El número de DNI y su letra son correctos");
  }
}
