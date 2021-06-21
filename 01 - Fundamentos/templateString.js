const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)


//expressoes...
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()  //arrow function
console.log(`Ei... ${up('cuidado')}!`) //uma arrow function tambem pode ser passada dentro de uma template string
