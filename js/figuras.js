// Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados de cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado)
{
    return lado * 4;
}



// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado)
{
    return lado * lado;
}

console.groupEnd();




// Código del triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(
// "Los lados del triangulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo 
// + "cm");

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd();




// Código del círculo
console.group("Círcuo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");
function diametroCirculo(radio)
{
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es " + PI);

//Circunferencia
// const circunferenciaCirculo = diametroCirculo * PI;
// console.log("La circunferencia del círculo es de: " + circunferenciaCirculo + "cm");
function circunferenciaCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es de: " + areaCirculo + "cm");
function areaCirculo(radio)
{
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

//Cuadrado
function calcularAreaPerimetroCuadrado()
{
    const inputP = document.getElementById("inputCuadrado");
    const valueP = inputP.value;

    const inputA = document.getElementById("inputCuadrado");
    const valueA = inputA.value;

    const areaC = areaCuadrado(valueA);
    const perimetroC = perimetroCuadrado(valueP);
    alert("El perimetro es de " + perimetroC + "cm, y el área es de " + areaC + "cm^2");
}

//Triángulo
// function calcularPerimetroTriangulo()
// {
//     const input1 = document.getElementById("inputTriangulo1");
//     const value1 = input1.value;

//     const input2 = document.getElementById("inputTriangulo2");
//     const value2 = input2.value;

//     const input3 = document.getElementById("inputTriangulo3");
//     const value3 = input3.value;


//     const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(value3));
//     alert(perimetro);
// }

// function calcularAreaTriangulo()
// {
//     const base = document.getElementById("inputTriangulo-base");
//     const baseT = parseFloat(base.value)

//     const altura = document.getElementById("inputTriangulo-altura");
//     const alturaT = parseFloat(altura.value)

//     const areaT = areaTriangulo(baseT, alturaT);
//     alert(areaT);
// }

function calcularAreaPerimetroTriangulo()
{
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const altura = document.getElementById("inputTriangulo-altura");
    const alturaT = parseFloat(altura.value)

    const areaT = areaTriangulo(value3, alturaT);
    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(value3));
    alert("El perimetro es de " + perimetro + "cm, y el área es de " + areaT + "cm^2");
}


//Círculo
function calcularDACCirculo()
{
    const inputCirculo = document.getElementById("inputRadio");
    const rCirculo = inputCirculo.value;


    const diametroCir = diametroCirculo(rCirculo);
    const areaCir = areaCirculo(rCirculo);
    const circunferenciaCir = circunferenciaCirculo(rCirculo);
    alert(
        "El diámetro es de " 
        + diametroCir 
        + "cm, el área es de " 
        + areaCir 
        + "cm^2, y la circunferencia es de " 
        + circunferenciaCir 
        + "cm^3");
}