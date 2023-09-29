// [ ] -> Estrutura Array
// { } -> Estrutura JSON

const introducaoArray = function () {
    //array forma manual
    //let listName = ['José', 'Luana', 'Alice', 'Maló', 'Marcel', 'Kainan Brega']


    //exibe os dados em formato de tabela
    //console.table(listName)

    //tamanho do array
    //console.log(listName.length)

    //adcionar um nome a mais no array no final
    //listName.push('gojo morto')
    //console.table(listName)

    //adciona mais um nome noo comeco do array
    //listName.unshift('Gojo|Satoru')
    //console.table(listName)

    //remove elementos do final de um array e substitui
    //listName.pop()
    //console.table(listName)

    //Remove o primeiro elemento de um array
    //listName.shift()
    //console.table(listName)

    //remove um elemento baseadoo no indicie, podendo definir a quantidade de itens a serem excluidos
    // 1 igual o indice e 3 é a quantidade de itens
    //listName.splice(1, 3)
    //console.table(listName)

    //listName.push('André', 'João', 188)
    //console.log(listName)
    //tipo de dados na tabela
    //console.log(typeof(listName[2]))
    
}

const percorrendoArray = function () {
    // let listProduct = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse pad', 'Gabinete', 'Processador', 'HD']

    //while
    // let cont = 0
    // while(cont < listProduct.length){
    //     console.log('Nome do produto: ' + listProduct[cont])

    //     cont++
    // }

    //for
    // for(let cont = 0; cont < listProduct.length; cont++){
    // console.log('Nome do produto: ' + listProduct[cont])

    // }

    //FOREACH
    // listProduct.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do produto: ' + produto)

    // })


    //INDEXOF
    //Retorna o indice do elemento em um array
    //se nao encontrar nada devolve -1
    //console.log(listProduct.indexOf('HD'))

    //Retorna verdeiro ou falso se existir
    //console.log(listProduct.includes('Mouse'))

}


const filtrarProdutos = function (nomeProduto) {
    let listProduct = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse pad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto)
    let status = false

    // if(listProduct.includes(nome) >= 0){
    //     status = true
    // }
    // return status
    listProduct.forEach(function(produto){

        if(produto.toLocaleUpperCase() == nome.toLocaleUpperCase()){
            status = true
        }
    })

    return status

}

console.log(filtrarProdutos('mouse'))
// introducaoArray()
// percorrendoArray()
// filtrarProdutos()




