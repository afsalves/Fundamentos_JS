//Novo rescurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa  //basicamente o que diz aqui é, tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const { nome: n, idade: idade } = pessoa //aqui dizemos tire os atributos nome e idade do objeto pessoa e atribua eles a 'n'e í''
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa /* os atributos nao existentes retornam undefined, 
e estamos atribuindo um valor padrao para o segundo atributo, caso restorne vazio o valor padrao é true*/
console.log(sobrenome, bemHumorada)  

const { endereco: { logradouro, numero, cep } } = pessoa /* aqui estamos retirando lograduro, numero e cep de dentro do obejto 
endereco que esta dentro do objeto pessoa */
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa /* ao acessar uma dado aninhado em um objeto temos que ter certeza 
de que o caminho ate o dado existe, nesse caso teremos um erro pois o objeto conta nao exite entao nao podemos atribuir
um dado a um objeto nao existente */
console.log(ag, num)