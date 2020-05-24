function tratarErroELancar(erro){
    throw new Error('...')
}


function imprimir(obg) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
    }   
}
const obj = { nome: 'Roberto' }
imprimir(obj)