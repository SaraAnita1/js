function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`ERRO Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Homem Jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'HomemAdulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso homem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Mulher jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Mulher adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Idosa Mulher.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.'`
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.objectFit = 'cover'
        res.appendChild(img)
    }
}