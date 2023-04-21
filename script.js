// Implemente aqui as funções

//teste de abdominais
function testAbs(gender,abs) {
    if (gender === "male") {
        return abs >= 41
    } else if (gender === "female") {
        return abs >= 41
    }


}
//teste de altura
function maxHeigth(gender, height) {
    if (gender === "male") {
        return height >= 1.70
    } else if (gender === "female") {
        return height >= 1.60

    }

}
//teste de barras
function testBar(gender, barReps, barSeconds) {
    if (gender === "male") {
        return barReps <= 6 || barSeconds >= 15


    } else if (gender === "female") {
        return barReps <= 5 || barSeconds >= 12
    }

}
//teste de corrida e distancia
function testRun(gender, runDistance, runTime) {
    if (gender === "male") {

        return runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200;

    } else if (gender === "female") {

        return runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320;
    }

}

function testSwim(gender, swimDistance, swimTime, diveTime) {
    if (gender === "male") {
        return swimDistance >= 100 && swimTime <= 60 || diveTime <= 30;

    } else if (gender === "female") {
        return swimDistance >= 100 && swimTime <= 60 || diveTime <= 30;
    }

}


function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime,) {
 //atribuindo variveis as funções
    let resultHeight = maxHeigth(gender, height)
    let resultTestBar = testBar(gender, barReps, barSeconds)
    let resultAbs = testAbs(gender, abs)
    let resultRun = testRun(gender, runDistance, runTime)
    let resultSwim = testSwim(gender, swimDistance, swimTime, diveTime)
//teste condicional de saída se verdadeiro ou falso
    if (resultHeight && resultTestBar && resultAbs && resultRun && resultSwim) {
        return true;
    } else {
        return false;
    }

}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos


);

// Chame aqui a função que mostra o resultado no console

//função para chamada no console.log()convertendo em letras e caixa Alta

function showMessage(message) {
    console.log(message.toString().toUpperCase());
}
showMessage(areCandidateValid)






