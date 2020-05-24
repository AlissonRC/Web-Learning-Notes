//Var pode ser visível fora do bloco
{
    {
        {
            var sera = 'Será???'
        }
    }
}
console.log(sera)

//Var em função apenas dentro do escopo
function teste (){
    var local = 123
    console.log(local)
}
teste()
//console.log(local)  erro