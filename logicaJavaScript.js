var inputSalario = document.querySelector("#salario")
var inputLuz = document.querySelector("#luz")
var inputAgua = document.querySelector("#agua")
var inputGas = document.querySelector("#gas")
var inputInternet = document.querySelector("#internet")
var inputOutros = document.querySelector("#outros")

function horaTrabalho(result){
    let getMoney = parseFloat(inputSalario.value);
    let resultadoHoraSalario = parseFloat(getMoney/8);
    let stringParse = "R$ "+resultadoHoraSalario.toFixed(2)
    respostaHoraTrabalho.textContent = stringParse.replace('.', ',')
}

function luz(result){
    let getMoney = parseFloat(inputLuz.value);
    console.log(getMoney)
    let valorLuz = (result - getMoney).toFixed(2);
    console.log(valorLuz)
    let resultadoContLuz = "R$ " + valorLuz
    inputLuz.textContent = resultadoContaLuz.replace('.', ',')
}

function agua(result){
    let getMoney = parseFloat(inputAgua.value);
    console.log(getMoney)
    let valorAgua = (result - getMoney).toFixed(2);
    console.log(valorAgua)
    let resultadoContAgua = "R$ " + valorAgua
    inputAgua.textContent = resultadoContAgua.replace('.', ',')
}

function gas(result){
    let getMoney = parseFloat(inputGas.value);
    console.log(getMoney)
    let valorGas = (result - getMoney).toFixed(2);
    console.log(valorGas)
    let resultadoContGas = "R$ " + valorGas
    inputGas.textContent = resultadoContGas.replace('.', ',')
}

function internet(result){
    let getMoney = parseFloat(inputInternet.value);
    console.log(getMoney)
    let valorInternet = (result - getMoney).toFixed(2);
    console.log(valorInternet)
    let resultadoContGas = "R$ " + valorInternet
    inputGas.textContent = resultadoContGas.replace('.', ',')
}

function outros(result){
    let getMoney = parseFloat(inputOutros.value);
    console.log(getMoney)
    let valorOutros = (result - getMoney).toFixed(2);
    console.log(valorOutros)
    let resultadoOutros = "R$ " + valorOutros
    inputOutros.textContent = resultadoOutros.replace('.', ',')
}

function calcular(){
    let resultadoFinal = parseFloat(resultadoOutros.value);
    console.log(resultadoFinal)

    horaTrabalho(resultadoFinal)
    luz(resultadoFinal)
    agua(resultadoFinal)
    gas(resultadoFinal)
    internet(resultadoFinal)
}

calcular();