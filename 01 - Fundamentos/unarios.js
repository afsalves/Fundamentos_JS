let num1 = 1
let num2 = 2

num1++ //pos-fixado
console.log(num1)
--num1 //pre-fixado, a forma pre-fixada tem maior precedencia do que a pos-fixada
console.log(num1)

console.log(++num1 === num2--) //nesse caso sera true por que o decremento só será reazliado após a comparacao