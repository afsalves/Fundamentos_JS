let numero = 1
{
    let numero = 2 //variavel com let tem escopo de bloco mesmo se nao for funcao
    console.log('dentro =', numero)//pega primeiro a variavel do escopo menor, se nao localizar pega a do escopo maior
}
console.log('fora =', numero)

