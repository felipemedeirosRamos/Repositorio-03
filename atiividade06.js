let n1 = Number(prompt("Digite um número"));
let n2 = Number(prompt("Digite um número"));
let n3 = Number(prompt("Digite um número"));
let maior = n1;
if(n2 > maior){
    document.write(`Número ${n2} é maior`);
}
if(n3 > maior){
    document.write(`Número ${n3} é maior`);
}
alert("maior: " + maior);


