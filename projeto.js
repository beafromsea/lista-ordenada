import rl from "readline-sync"

function input(str){
    const entrada = rl.question(str)
    return entrada 
}

let usuario = input("digite uma propriedade CSS ou sair para finalizar: ")
const lista = []

while(usuario.toLowerCase() != "sair"){
    lista.push(usuario.toUpperCase())
    usuario = input("digite uma propriedade CSS ou sair para finalizar: ")
}

lista.sort()
lista.forEach((item)=>{
    console.log(item)
})