function teste1(num) {
    if (num > 7) //sem as chaves a funcao so associa a ela o primeiro console.log
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)


function teste2(num) {
    if (num > 7); { //com esse ponto e virgula ele nao faz nada, eh uma sentenca vazia
        console.log(num)
    }

}

teste2(6)
teste2(8)