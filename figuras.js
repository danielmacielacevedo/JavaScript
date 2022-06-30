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
function diametroCirculo()
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

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}