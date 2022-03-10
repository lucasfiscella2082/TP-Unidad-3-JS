var noValgoNi5 = 4;
console.log(noValgoNi5);

var miAnioDeNacimiento = 1995;
var meGustariaTener80Anios = 80;
var voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios;
console.log("voy a tener 80 el año: " + voyATener80ElAnio);

var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = costoDeUnaTele - ahorros;
console.log("para comprar una tele me falta: $" + dineroQueMeFalta);

var diasPorAnio = 365;
var cantidadDeAniosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;

console.log(
  "La cantidad de dias en una decada son: " + cantidadDeDiasEnUnaDecada
);

var pizza = 8;
var porcionesDePizzaQueConte = 24;
var pizzasEnLaMesa = porcionesDePizzaQueConte / pizza;

console.log(
  "La cantidad de pizzas que hay en la mesa es de: " + pizzasEnLaMesa
);

var miAnimalFavorito = "perro";

console.log(miAnimalFavorito == "perro");

var postre1 = "flan";
var postre2 = "flan con dulce de leche";
console.log(postre1 != postre2);

var edad = 26;
var soyMayorDeEdad = edad > 17;
console.log(soyMayorDeEdad);

var edad = 26;
var soyMenorDe25 = edad < 25;
console.log(soyMenorDe25);

var estamosEnEnero = "enero";
var mesActual = "marzo";
console.log(mesActual === estamosEnEnero);

var noEstamosEnEnero = "enero";
var mesActual = "marzo";
console.log(noEstamosEnEnero !== mesActual);

var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;
var estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;

console.log(estoyAprobado);

var EsHoraDeAlmorzar = 16 <= 12;
console.log(EsHoraDeAlmorzar);
