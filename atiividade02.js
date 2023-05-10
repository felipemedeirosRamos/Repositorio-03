let nota1 = Number(prompt("Digite a primeira nota do aluno"));
let nota2 = Number(prompt("Digite a segunda nota do aluno"));
let soma = nota1 + nota2;
let media = soma/2;
if(media > 7){
    document.write("O aluno foi aprovado");
}
else{
    document.write("O aluno foi reprovado");
}
