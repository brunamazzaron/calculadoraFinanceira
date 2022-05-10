//  - para poupança - (50%)
// - para investimento - (30%)
// - para diversão - (20%)

//banana = resultado
//scopo na linguagem de programaçao
//parametros sao as variaveis que a funcao espera 

// 1 eu quero pegar o resultado da funcao calculadora
// 2 calcular a porcentagem 
// 3 voltar o resultado para o html 

var inputSalario = document.querySelector("#salario");
var inputGastosFixos = document.querySelector("#gastosFixos");
var resposta = document.querySelector("#resposta");
var inputDiversao = document.querySelector("#diversao")
var inputInvestimento = document.querySelector("#investimento")
var inputPoupanca = document.querySelector("#poupanca")

function divDiversao(result) {
    let resultDividido = (result / 100 * 20).toFixed(2);
    let stringDiversao = "R$ " + resultDividido
    inputDiversao.textContent = stringDiversao.replace('.', ',')
};


function divInvest(result){
    let resultDividido = (result / 100 * 30).toFixed(2);
    let stringInvest = "R$ " + resultDividido
    inputInvestimento.textContent = stringInvest.replace('.', ',')
}

function divPoupe(result){
    let resultDividido = (result / 100 * 50).toFixed(2);
    let stringPoupe = "R$ " + resultDividido
    inputPoupanca.textContent = stringPoupe.replace('.', ',')
}

function calculadora(){
    let economia = parseFloat(inputGastosFixos.value);
    let resultado = parseFloat(inputSalario.value - economia).toFixed(2);
    let stringParse = "R$ "+resultado
    resposta.textContent = stringParse.replace('.', ',')
    
    divDiversao(resultado)
    divInvest(resultado)
    divPoupe(resultado)
}


