let num = [ 5, 8, 2, 9, 3]

num.push(1) // se ele estiver antes do sort o 1 é colocado como primeiro elemento 

num.sort() // coloca os elementos em ordem

console.log(`nosso vetor é o ${num}`) //mostra o que tem no array

console.log(`O vetor tem ${num.length} posições`) // mostra as posições que esse array tem

console.log(num[0]) // mostra o que tem dentro da posição 0 

console.log(`O primeiro valor do vetor é ${num[0]}`) // o primeiro valor se encontra na posição 0

// num.push(1) colocado aqui o 1 vai ser o ultimo elemento 
// me retorna aonde o valor 8 está depois de colocado em ordem pelo num.sort

let pos = num.indexOf(4) 
if(pos === -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}