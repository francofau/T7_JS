/* El input en el html lleva el nombre num y desde ahi toma el número/valor*/
function calculo(num)
{
/*   Si el resto es igual a cero quiere decir que es par */
if (num%2==0) {
   alert("El numero introducido es par");
} else {
   alert("El numero introducido es impar");
}
}

function validarNumero(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true; 
    patron =/[0-9]/;
    te = String.fromCharCode(tecla); 
    return patron.test(te); 
 }

 
 /* Solo números, referecia StarkOverflow:
 https://es.stackoverflow.com/questions/188643/permitir-introducir-solo-numeros-en-caja-de-texto-con-javascript-para-dispositiv */