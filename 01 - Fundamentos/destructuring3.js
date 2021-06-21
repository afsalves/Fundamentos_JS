function rand ({ min = 0, max = 1000 }) {  //junto com o destructuring é possível utilizar o parametro padrao
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40  }
conole.loq(rand(obj))
console.log(rand({ min:955 }))
console.log(rand({}))
console.log(rand()) //dara erro por que estamos desetruturando algo undefined ou nulo