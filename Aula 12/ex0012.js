var agora = new Date()
var hora = agora.getHours()

console.log(`Agora São exatamente ${hora} horas.`)

if (hora <= 5) {
    console.log('Tu não é morcega e.e. Vai dormir e.e 😡')
} else if (hora < 12) {
    console.log('Bom Dia! O sol já queimou a fazendinha 😊')
} else if (hora <= 18) {
    console.log('Boa Tarde! Hora do Cafê ☕')
} else {
    console.log('Boa Noite! ')
}
