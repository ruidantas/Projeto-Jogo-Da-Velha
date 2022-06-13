const prompt = require("prompt-sync")()
console.clear()


let pontuacaojogador1 = 0
let pontuacaojogador2 = 0

while (true) {


const intro = prompt("JOGO DA VELHA ## \n============= \nPressione [ENTER] para continuar.")
console.log("Para jogar escolha a coordenada. Exemplo: a1,b2,c3.  Pressione [ENTER] para começar.")
prompt()


let cordenada =  [0, "A", "B", "C"]
let matriz1 =  [1,"_","_","_"]
let matriz2 = [2,"_","_","_"]
let matriz3 = [3,"_","_","_"]
let matriz4 = []
let jogador1 = ''
let jogador2 = ''
let verificacao


let pergunta = prompt('Você quer ser "O" ou "X"? ')
matriz4.push(cordenada)
matriz4.push(matriz1)
matriz4.push(matriz2)
matriz4.push(matriz3)

function exibicao () {

    console.clear()
    matriz4.push(cordenada)
    matriz4.push(matriz1)
    matriz4.push(matriz2)
    matriz4.push(matriz3)


    console.log(matriz4[0])
    console.log()
    console.log(matriz4[1])
    console.log()
    console.log(matriz4[2])
    console.log()
    console.log(matriz4[3])
}
exibicao()


console.log()


function primeirojogador(jogada) {

    let simbolo = pergunta == "x" ? "x" : "o"

if (jogada == "a1") {

    matriz1.splice(1,1, simbolo)
}

else if (jogada == "a2") {

    matriz2.splice(1,1, simbolo)

}
else if (jogada == "a3") {

    matriz3.splice(1,1, simbolo)
}
else if (jogada == "b1") {

    matriz1.splice(2,1,simbolo)
}

else if (jogada == "b2") {

    matriz2.splice(2,1,simbolo)
}

else if (jogada == "b3") {

    matriz3.splice(2,1,simbolo)
}

else if (jogada == "c1") {

    matriz1.splice(3,1,simbolo)
}

else if (jogada == "c2") {

    matriz2.splice(3,1,simbolo)
}

else if (jogada == "c3") {

    matriz3.splice(3,1,simbolo)
}

}

primeirojogador(jogador1)
exibicao()
console.log()

function segundojogador(jogada) {

    let simbolo = pergunta == "x" ? "o" : "x"

if (jogada == "a1") {

    matriz1.splice(1,1, simbolo)
}

else if (jogada == "a2") {

    matriz2.splice(1,1, simbolo)
}

else if (jogada == "a3") {

    matriz3.splice(1,1, simbolo)
}

else if (jogada == "b1") {

    matriz1.splice(2,1,simbolo)
}

else if (jogada == "b2") {

    matriz2.splice(2,1,simbolo)
}

else if (jogada == "b3") {

    matriz3.splice(2,1,simbolo)
}

else if (jogada == "c1") {

    matriz1.splice(3,1,simbolo)
}

else if (jogada == "c2") {

    matriz2.splice(3,1,simbolo)
}

else if (jogada == "c3") {

    matriz3.splice(3,1,simbolo)
}

}

segundojogador(jogador2)
exibicao()

for (let i = 0; i < 20; i++) {

jogador1 = prompt("JOGADOR 1, Onde você quer jogar? ")
console.log()
verificacao = verificarpreenchimento(jogador1)
while (verificacao == false) {
    console.log('Lugar já preenchido')
    console.log()
    jogador1 = prompt("JOGADOR 1, Onde você quer jogar? ")
    verificacao = verificarpreenchimento(jogador1)
    }
    
primeirojogador(jogador1)

exibicao()
if (resultadojogadorO() == true) {
    break
}

if (resultadojogadorx() == true) {
    break
}

if (empate() == true) {
    break
}

jogador2 = prompt("JOGADOR 2, onde você quer jogar? ")
console.log()
verificacao = verificarpreenchimento(jogador2)
while (verificacao == false) {
    console.log('Lugar já preenchido')
    console.log()
    jogador2 = prompt("JOGADOR 2, Onde você quer jogar? ")
    verificacao = verificarpreenchimento(jogador2)
    }
  
segundojogador(jogador2)

exibicao()  
if (resultadojogadorx() == true) {
    break
}

if (resultadojogadorO() == true) {
    break
}

if (empate() == true) {
    break
}

}

function resultadojogadorx () {

if (matriz1[1] == "x" && matriz1[2] == 'x' && matriz1[3] == 'x') {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz2[1] == "x" && matriz2[2] == 'x' && matriz2[3] == 'x') {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz3[1] == "x" && matriz3[2] == 'x' && matriz3[3] == 'x') {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz1[1] == "x" && matriz2[2] == "x" && matriz3[3] == "x") {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz3[1] == "x" && matriz2[2] == "x" && matriz1[3] == "x") {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz1[1] == "x" && matriz2[1] == "x" && matriz3[1] == "x") {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz1[2] == "x" && matriz2[2] == "x" && matriz3[2] == "x" ) {
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}

if (matriz1[3] == "x" && matriz2[3] == "x" && matriz3[3] == "x"){
    console.log()
    console.log('O Jogador "x" ganhou')
    if (pergunta == "x") {
        pontuacaojogador1++
    } else {
        pontuacaojogador2++
    }
    return true
}
}

function resultadojogadorO () {
    if (matriz1[1] == "o" && matriz1[2] == 'o' && matriz1[3] == 'o') {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz2[1] == "o" && matriz2[2] == 'o' && matriz2[3] == 'o') {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz3[1] == "o" && matriz3[2] == 'o' && matriz3[3] == 'o') {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz1[1] == "o" && matriz2[2] == "o" && matriz3[3] == "o") {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz3[1] == "o" && matriz2[2] == "o" && matriz1[3] == "o") {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz1[1] == "o" && matriz2[1] == "o" && matriz3[1] == "o") {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz1[2] == "o" && matriz2[2] == "o" && matriz3[2] == "o" ) {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
    
    if (matriz1[3] == "o" && matriz2[3] == "o" && matriz3[3] == "o"){
        console.log()
        console.log('O Jogador "o" ganhou')
        if (pergunta == "o") {
            pontuacaojogador1++
        } else {
            pontuacaojogador2++
        }
        return true
    }
}



function verificarpreenchimento(verificarjogada) {

if (verificarjogada == 'a1') {
    if (matriz1[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'a2') {
    if (matriz2[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'a3') {
    if (matriz3[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'b1') {
    if (matriz1[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'b2') {
    if (matriz2[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'b3') {
    if (matriz3[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'c1') {
    if (matriz1[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'c2') {
    if (matriz2[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (verificarjogada == 'c3') {
    if (matriz3[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

}

function empate() {

    if (matriz1[1] != "_" && matriz1[2] != "_" && matriz1[3] != "_" && matriz2[1] != "_" && matriz2[2] != "_" && matriz2[3] != "_" && matriz3[1] != "_" && matriz3[2] != "_" && matriz3[3] != "_" ) {
        console.log('Empate')
         return true
    }
 
    else {

        return false
    }
}

console.log(`Jogador 1 = ${pontuacaojogador1} pontos.`)
console.log(`Jogador 2 =  ${pontuacaojogador2} pontos.`)

perguntazerarpontos = prompt('Deseja zerar a pontuação? ')

if (perguntazerarpontos == "sim" || perguntazerarpontos == "s") {
    pontuacaojogador1 = 0
    pontuacaojogador2 = 0
}

let respostafinal = prompt('Deseja jogar novamente? ')
console.clear()

if (respostafinal == "sim" || respostafinal == "s")
{
    continue
}
else {
    break
}

}






