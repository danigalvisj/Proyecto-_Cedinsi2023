//Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

function litrosACentilitros(litros) {
    let centilitros = litros * 100;
    console.log(centilitros);
}

function litrosADecilitros(litros) {
    let decilitros = litros * 10;
    console.log(decilitros);
}

function litrosAGalones(litros) {
    let galones = litros * 0.264172;
    console.log(galones);
}

function litrosAOnzas(litros) {
    let onzas = litros * 33.814;
    console.log(onzas);
}

litrosACentilitros(250);
litrosADecilitros(250);
litrosAGalones(250);
litrosAOnzas(250);

/*Realizar el algoritmo que realice las 4 operaciones básicas para dos números
de entrada*/

let numero1 = 15;
let numero2 = 6;
let resultadoSuma = numero1 + numero2;
console.log("Suma:" + resultadoSuma);
let resultadoResta = numero1 - numero2;
console.log("Resta:" + resultadoResta);
let resultadoMultiplicacion = numero1 * numero2;
console.log("Multiplicaciòn:" + resultadoMultiplicacion);
let resultadoDivision = numero1 / numero2;
console.log("Divisiòn:" + resultadoDivision);

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa

function CentigradosAFahrenheit(grados) {
    let Fahrenheit = (grados * 9 / 5) + 32;
    console.log(Fahrenheit);
}

CentigradosAFahrenheit(180);

/*Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si 
sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad 
de gasolina despachada en litros*/

function VrAPagar(centilitros) {
    let pagar = centilitros * 25;
    console.log("Cantidad:" + centilitros + "ValorA APagar:" + pagar);
}

VrAPagar(5400)

/*Realizar un algoritmo que calcule el salario de un empleado según los siguientes 
parámetros.

a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,
sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%*/

let salario=500000;

if (salario < 699999) {
    let VrSalario = (salario*98)/100 + (salario* 6)/100;
    console.log(VrSalario);
}
    if (salario > 700000 && salario < 999999){
    let VrSalario = (salario * 96)/100 + 12000;
    console.log(VrSalario);
}

else{
    console.log(salario);
}

if (salario > 1000000) {
    let VrSalario = (salario*94)/100;
    console.log(VrSalario);
}

