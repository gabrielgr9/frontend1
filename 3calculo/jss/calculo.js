let a = 10;
let b = 5;
let soma = a + b;
function exibirSoma(){
    document.getElementById("sum").innerHTML = soma;
}
function subtrair(){
    let sub = a - b
    document.getElementById("sub").innerHTML = sub;
}
function dividir(x, y){
    let resultado = x / y;
    return `A divisão de ${x} / ${y} = ${resultado}`;
}
function exibirDividir(){
    document.getElementById("div").innerHTML = dividir (a,b)
}