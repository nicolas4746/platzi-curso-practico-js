// codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado *4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
// Aqui interactuamos con el html del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);
    const area = areaCuadrado(value);
    alert(area);
}
// codigo del triangulo 
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = parseFloat(inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = parseFloat(inputLado2.value);
    const inputBase = document.getElementById("inputBase");
    const valueBase = parseFloat(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBase");
    const valueBase = parseFloat(inputBase.value);
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = parseFloat(inputAltura.value);
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
// triangulo isosceles  
function calcularAlturaTrianguloIsosceles() {
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}
// codigo del circulo
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// PI
const PI = Math.PI;
console.log("PI es: " + PI );
//Circunsferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const area = areaCirculo(value);
    alert(area);
}


