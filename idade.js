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
        if (fsex[0].checked){
            gênero = 'Homem'
        }else if (fsex[1].checked){
            gênero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
    }
}