{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) //a variavel declara da com var tem escopo global no JavaScript

function teste() {
    var local = 123 //variavel declarada dentro de uma funcao tem escopo local
    console.log(local)
}

teste()
console.log(local) //nao funciona se chamar fora da funcao

/* Evite variaveis globais, como elas pode ser acessadas de qq parte do código
elas podem acabar sendo sobrescritas por outro programador e causar muitos problemas 
no código, prefira usar dentro do escopo das funcoes */