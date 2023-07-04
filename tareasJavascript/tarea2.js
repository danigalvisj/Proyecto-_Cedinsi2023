/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares*/


function generarNumerosPares() {
  let numerosPares = [];

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  console.log(numerosPares);
}

generarNumerosPares();


//Realizar un programa que permita sumar los 150 primeros números


function sumar150numeros() {
  let suma = 0;
  for (let i = 1; i <= 150; i++) {
    suma = suma + i;
  }
  console.log("La suma de los 150 primeros números es:" + suma);
}

sumar150numeros();


//Leer 10 precios de productos y calcular cuánto cuestan los 10 productos

let valorTotal = 0;

for (let i = 1; i <= 10; i++) {
  let precio = parseFloat(prompt("Ingresa el precio del producto" + i + ":"));
  valorTotal += precio;
}

console.log("El costo total de los 10 productos es: " + valorTotal);

/*Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5*/

let aprobados = 0;
let reprobados = 0;

for (let i = 1; i <= 12; i++) {
  let nota = parseFloat(prompt("Ingresa la nota del estudiante " + i + ":"));

  if (nota >= 0 && nota <= 5) {
    reprobados++;
  } else {
    aprobados++;
  }
}

console.log("Cantidad de estudiantes aprobados: " + aprobados);
console.log("Cantidad de estudiantes reprobados: " + reprobados);

/*Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir
la cantidad*/

let contador = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    contador++;
  }
}

console.log("La cantidad de múltiplos de 3 es: " + contador);

//Leer n cantidad de notas de un estudiante e imprimir por pantalla.

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
let notas = [];

for (let i = 1; i <= cantidadNotas; i++) {
  let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
  notas.push(nota);
}

console.log("Las notas ingresadas son:");

for (let j = 0; j < notas.length; j++) {
  console.log("Nota " + (j + 1) + ": " + notas[j]);
}

/*Leer n cantidad números y determinar cantidad de impares, imprimir
cantidad de impares*/

let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de nùmeros:"));
let impares = 0;

for (let i = 1; i <= cantidadNumeros; i++) {
  let numero = parseFloat(prompt("Ingrese nùmero" + i + ":"));

  if (i % 2 !== 0) {
    impares++;
  }
}
console.log("La cantidad de impares es: " + impares);

/*Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo,
imprimir los sueldos y el sueldo más bajo*/

let sueldos = [];
let cantidadSueldos = parseInt(prompt("Ingrese la cantidad de sueldos:"));
let sueldoMinimo = Math.min(sueldos);

for (let i = 1; i <= cantidadSueldos; i++) {
  let sueldo = parseFloat(prompt("Ingrese el sueldo" + i + ":"));
  sueldos.push(sueldo);
}
console.log("Los sueldos ingresados son:");

for (let j = 0; j < sueldos.length; j++) {
  console.log("Sueldo " + (j + 1) + ": " + sueldos[j]);
}

console.log("el sueldo màs bajo es:" + sueldoMinimo);

/*Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado e
imprimir por consola*/

function llenarArregloAlternado(n) {
  let arreglo = [];

  for (let i = 0; i < n; i++) {
    arreglo.push(i % 2);
  }

  return arreglo;
}

let tamano = parseInt(prompt("Ingrese el tamaño del arreglo:"));
let resultado = llenarArregloAlternado(tamano);

console.log(resultado);

/*Realizar un programa que pida la base, el exponente y se ejecute el cálculo
sin uso de bibliotecas*/

function calcularPotencia() {
  var base = parseFloat(prompt("Ingrese la base:"));
  var exponente = parseInt(prompt("Ingrese el exponente:"));

  var resultado = Math.pow(base, exponente);

  console.log("El resultado de " + base + " elevado a la " + exponente + " es: " + resultado);
}

calcularPotencia();

/*Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido
del arreglo deben ser los números pares partiendo de 2*/

function llenarArregloNumerosPares(n) {
  if (n % 2 === 0) {
    n++;
  }

  let ArregloNumerosPares = [];

  for (let i = 2; i < n; i++) {
    ArregloNumerosPares.push(i + 1);
  }

  return ArregloNumerosPares;
}

let tamanoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo (debe ser impar):"));
let resultadoSuma = llenarArregloNumerosPares(tamano);

console.log(resultadoSuma);

/*Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci.
0,1,1,2,3,5,8,13*/

function llenarArregloFibonacci() {
  let ArregloFibonacci = [0, 1]; // Inicializar el arreglo con los primeros dos números de la sucesión Fibonacci

  for (let i = 2; i < 100; i++) {
    let numeroFibonacci = ArregloFibonacci[i - 1] + ArregloFibonacci[i - 2];
    ArregloFibonacci.push(numeroFibonacci);
  }

  return ArregloFibonacci;
}

let numerosFibonacci = llenarArregloFibonacci();
console.log(numerosFibonacci);

/*Llenar un arreglo con los primeros 100 números pares y muestre la suma de
los elementos del arreglo*/

function llenarArreglo100NumerosPares() {
  let cienNumerosPares = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      cienNumerosPares.push(i);
    }
    return cienNumerosPares;
  }

  let sumaPares = 0
  for (let i = 2; i <= 100; i++) {
    sumaPares += cienNumerosPares[i];
  }
  return sumaPares
}

//console.log(sumaPares);

/*Llenar un arreglo de tamaño n que se llene con números ingresados por el
usuario y determine cantidad de positivos y negativos*/

function llenarArregloNumeros(n) {
  let ArregloNumeros = [];

  for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    ArregloNumeros.push(numero);
  }

  return ArregloNumeros;
}

function contarPositivosNegativos(ArregloNumeros) {
  let positivos = 0;
  let negativos = 0;

  for (let i = 0; i < ArregloNumeros.length; i++) {
    if (ArregloNumeros[i] > 0) {
      positivos++;
    } else if (ArregloNumeros[i] < 0) {
      negativos++;
    }
  }

  return {
    positivos: positivos,
    negativos: negativos
  };
}

let tamanoPositivosNegativos = parseInt(prompt("Ingrese el tamaño del arreglo:"));
let numerosPositivosNegativos = llenarArregloNumeros(tamanoPositivosNegativos);
let resultadoPositivosNegativos = contarPositivosNegativos(numerosPositivosNegativos);

console.log("Cantidad de números positivos: " + resultadoPositivosNegativos.positivos);
console.log("Cantidad de números negativos: " + resultadoPositivosNegativos.negativos);