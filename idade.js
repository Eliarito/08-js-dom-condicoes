function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemenino.jpg')
            }else if (idade >= 10 && idade< 21){
                img.setAttribute('src', 'jovemmenino.jpg')
            }else if (idade >= 21 && idade< 60){
                img.setAttribute('src', 'adulto.jpg')
            }else {
                img.setAttribute('src', 'idoso.jpg')
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemenina.jpg')
            }else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovemmenina.jpg')
            }else if (idade >= 21 && idade < 60){
                img.setAttribute('src', 'adulta.jpg')
            }else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}