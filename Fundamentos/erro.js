function tratarErroElancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //tente fazer algo (usado em trechos de codigo que sabemos ter possibilidade de erro)
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){  //executar caso o erro ocorra 
        tratarErroElancar(e)
    }finally {  //finally é um bloco que sempre sera executado independente se haja erro ou nao
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)