var n=prompt("Número a calcular");
var total = 1; 

  for (var i=1; i<=n; i++) {
		total = total * i; 
	}
  alert("El factorial de "+n+" es "+total);