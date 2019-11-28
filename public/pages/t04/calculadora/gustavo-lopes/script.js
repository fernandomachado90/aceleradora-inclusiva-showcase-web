var historico = [];


function soma() {
    var numeroUm = document.getElementById("primNum").value;
    var numeroDois = document.getElementById("segNum").value;

    var resultadoSoma = (parseInt(numeroUm) + parseInt(numeroDois));
    historico.push(numeroUm + " + " + numeroDois + " : " + resultadoSoma);

    alert("A SOMA DOS NUMEROS DIGITADOS É: " + resultadoSoma);
}

function subtracao() {
    var numeroUm = document.getElementById("primNum").value;
    var numeroDois = document.getElementById("segNum").value;

    var resultadoSubtracao = (parseInt(numeroUm) - parseInt(numeroDois));
    historico.push(numeroUm + " - " + numeroDois + " : " + resultadoSubtracao);

    alert("A SUBTRACAO DOS NUMEROS DIGITADOS É: " + resultadoSubtracao);
}

function multiplicacao() {
    var numeroUm = document.getElementById("primNum").value;
    var numeroDois = document.getElementById("segNum").value;

    var resultadoMultiplicacao = (parseInt(numeroUm) * parseInt(numeroDois));
    historico.push(numeroUm + " * " + numeroDois + " : " + resultadoMultiplicacao);

    alert("A MULTIPLICACAO DOS NUMEROS DIGITADOS É: " + resultadoMultiplicacao);
}

function divisao() {
    var numeroUm = (document.getElementById("primNum").value);
    var numeroDois = (document.getElementById("segNum").value);

    var resultadoDivisao = (parseInt(numeroUm) / parseInt(numeroDois));

    historico.push(numeroUm + " / " + numeroDois + " : " + resultadoDivisao);
    alert("A DIVISAO DOS NUMEROS DIGITADOS É: " + resultadoDivisao);
}

function potencia() {
    var numeroUm = document.getElementById("primNum").value;
    var numeroDois = document.getElementById("segNum").value;
    var resultadoPotenciacao = 1;

    for (var potencia = 0; potencia < numeroDois; potencia++) {
        resultadoPotenciacao = resultadoPotenciacao * numeroUm;

    }
    historico.push(numeroUm + " ^ " + numeroDois + " : " + resultadoPotenciacao);
    alert("A RESULTADO DA POTENCIAÇÃO ENTRE OS NÚMEROS DIGITADOS É: " + resultadoPotenciacao);
}

function primos() {
    var numero = document.getElementById("analise").value;
    var cont = numero;
    var contDivisores = 0;

    while (cont > 0) {
        if (numero % cont == 0) {
            contDivisores += 1;
        }
        cont--;
    }

    if (contDivisores > 2) {
        historico.push("O NÚMERO " + numero + " NÃO É PRIMO!");
        alert("O NÚMERO " + numero + " NÃO É PRIMO !");
    }
    else {
        historico.push("O NÚMERO " + numero + " É PRIMO!");
        alert("O NÚMERO " + numero + " É PRIMO !")
        contDivisores = 0;
    }

}

function fatorial() {
    var numero = document.getElementById("fatoracao").value;
    var resultado = 1;

    for (var cont = numero; cont > 0; cont--) {
        resultado *= cont;
    }
    historico.push(numero + "! : " + resultado);
    alert("A FATORAÇÃO DO NÚMERO " + numero + " É: " + resultado + "\n")
}
function mostrarHistorico() {
    var resultado = "";
    for (var cont = 0; cont < historico.length; cont++) {
        resultado += (historico[cont] + "\n")
    }

    alert("SEU HISTÓRICO É : \n" + resultado)
}