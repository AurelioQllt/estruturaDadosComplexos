let itens = ["maça", "banana", "melancia", "morango", "uva"]
console.log (itens)


itens.unshift ("manga")
console.log (itens)


itens.pop ()
console.log (itens)


itens.push ("limão", "abacaxi")
console.log (itens)


itens.shift ()
console.log (itens)


let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort ()
console.log (numbers)


let eu = {
    nome: "Aurelio",
    idade: 22,
    cidade: "Rio de Janeiro" }
console.log (eu)

eu.mes = "julho"


delete eu.idade
console.log (eu)


let cadastro = [{
    nome: "jesus",
    idade: 2023,
    telefone: 40028922,
    amigos: ["judas", "pedro", "lucas", "matheus", "moises"],
},{
    nome: "noe",
    idade: 950,
    telefone: 123666123,
    amigos: ["zeca", "zeze", "zulu", "ze", "zezu"],
},{
    nome: "sao jose",
    idade: 17,
    telefone: 846523779,
    amigos: ["joca", "joaquim", "joana", "junior", "jardel"],
},{
    nome: "jair",
    idade: 666,
    telefone: 0800105673,
    amigos: ["inacio", "dilma", "fernando", "geraldo", "sergio"],
},{
    nome: "alexandre",
    idade: 57,
    telefone: 97854368856,
    amigos: ["nikolas", "flavio", "renan", "arthur", "gabriel"],
}]
console.log (cadastro)


console.log (cadastro[0].amigos[2])
console.log (cadastro[1].amigos[1])
console.log (cadastro[2].amigos[3])
console.log (cadastro[3].amigos[1])
console.log (cadastro[4].amigos[0])