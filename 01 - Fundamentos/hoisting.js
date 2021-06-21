console.log ('a=', a) //embora a variavel ainda nao tenha sido declarada, ela sofre um içamento e código não dá erro
var a = 2 
console.log ('a=', a)

function teste(){
console.log ('a=', a) //o mesmmo acontece se utilizamos dentro de uma funcao
var a = 2 
console.log ('a=', a)
}

teste()