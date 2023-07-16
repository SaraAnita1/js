function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora <= 5) {
        img.src = 'foto madrugada.png'
        document.body.style.background = '#5e3c4f'
    } else if(hora >= 0 && hora < 12) {
        img.src = 'Foto manha.png'
        document.body.style.background = '#A3887C'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Foto tarde.png'
        document.body.style.background = '#5D5162'
    } else {
        img.src = 'Foto noite.png'
        document.body.style.background = '#613B5E'
    }
}