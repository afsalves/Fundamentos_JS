const prod1 ={}  //um objeto é um conjunto de pares chave e valor
prod1.nome = 'Celular Mega ultra'  //chave por que é um identificador único
prod1.preco = 4998.90

prod1['Desconto Legal'] = 0.40 //evitar atributos com espaco

console.log(prod1)

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {  //é possível aninhar objetos
        blabla: 1,
        obj: {
            blabla: 1
        }
    }

} 
console.log(prod2)