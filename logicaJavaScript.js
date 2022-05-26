
var inputLuz = document.querySelector("#luz")
var inputAgua = document.querySelector("#agua")
var inputGas = document.querySelector("#gas")
var inputInternet = document.querySelector("#internet")
var inputOutros = document.querySelector("#outros")

function horaTrabalho(salario){
    let resultadoHoraSalario = parseFloat(salario/(8*22));
    let stringParse = "R$ "+resultadoHoraSalario.toFixed(2)
    respostaHoraTrabalho.textContent = stringParse.replace('.', ',')
} //pronta


function calcular() {
    const inputSalario = document.querySelector("#salario");
    let getAgua = parseFloat(inputAgua.value);
    let getGas = parseFloat(inputGas.value);
    let getInternet = parseFloat(inputInternet.value);
    let getOutros = parseFloat(inputOutros.value);

    let conta = [getAgua, getGas, getInternet,getOutros]


    let valorSalario = inputSalario.value;
    let salario = (Number(valorSalario) - conta).toFixed(2);
    document.querySelector('#').innerHTML = salario;
    return Number();
}

//contas que removem do meu salário
// function luz(salarioAtual){
//     let getLuz = parseFloat(inputLuz.value);
//     let restoSalario = (Number(salarioAtual) - getLuz).toFixed(2);
//     let resultadoContLuzString = `Resta R$${restoSalario}`
//     document.querySelector('#respostaValorSubLuz').innerHTML = resultadoContLuzString;
//     return Number(restoSalario);
// }

// function agua(salarioAtual){
//     let getAgua = parseFloat(inputAgua.value);
//     let restoSalario = (Number(salarioAtual) - getAgua).toFixed(2);
//     let resultadoContAgua = `Resta R$${restoSalario}`;
//     document.querySelector('#respostaValorSubAgua').innerHTML = resultadoContAgua;
//     return Number(restoSalario);
// }

// function gas(salarioAtual){
//     let getGas = parseFloat(inputGas.value);
//     let restoSalario = (Number(salarioAtual) - getGas).toFixed(2);
//     let resultadoContGas = `Resta R$${restoSalario}`;
//     document.querySelector('#respostaValorSubGas').innerHTML = resultadoContGas;
//     return Number(restoSalario);
// }

// function internet(salarioAtual){
//     let getInternet = parseFloat(inputInternet.value);
//     let restoSalario =(Number(salarioAtual) - getInternet).toFixed(2);
//     let resultadoContInternet = `Resta R$${restoSalario}`;
//     document.querySelector('#respostaValorSubInte').innerHTML = resultadoContInternet;
//     return Number(restoSalario);
// }

// function outros(salarioAtual){
//     let getOutros = parseFloat(inputOutros.value);
//     let restoSalario = (Number(salarioAtual) - getOutros);
//     let resultadoContOutros = `Resta R$${restoSalario}`;
//     document.querySelector('#respostaValorSubOutros').innerHTML = resultadoContOutros;
//     return Number(restoSalario);
// }

    // horaTrabalho(valorSalario);    
    // valorSalario = luz(valorSalario);
    // valorSalario = agua(valorSalario);
    // valorSalario = gas(valorSalario);
    // valorSalario = internet(valorSalario);
    // valorSalario = outros(valorSalario)

//só executar o calcular `calcular()`, quando apertar um botão no html.
//Oq significa escopo

//regra de negócio
//1- insere o salário
//2- calcula hora salario
//3 - retira do salario:
    //luz
    //internet
    //agua
    //gas
    //outros