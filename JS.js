function verificar()
{
    var ano = document.getElementById('txtAno')
    var data = new Date()
    var anoAtual = Number(data.getFullYear())
    var img = document.getElementById('foto')
    var sex = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    var idade = anoAtual - ano.value
    var genero
    if(ano.value.length == 0 || ano.value > anoAtual)
    {
        alert('[ERRO] Verifique os dados e tende novamente!')
    }
    else if(sex[0].checked)
    {
        genero = 'Homem'
        if(idade >= 0 && idade < 12)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'bebe-m.jpg'
        }
        else if(idade < 25)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'jovem-m.jpg'
        }
        else if(idade < 50)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'adulto-m.jpg'
        }
        else
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'idoso-m.jpg'
        }
    }
    else if(sex[1].checked)
    {
        genero = 'Mulher'
        if(idade >= 0 && idade < 12)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.setAttribute('src' , 'bebe-f.jpg')
        }
        else if(idade < 25)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'jovem-f.jpg'
        }
        else if(idade < 50)
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'adulto-f.jpg'
        }
        else
        {
            res.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'idoso-f.jpg'
        }
    }
    res.appendChild(img)
}