function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('idade')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<= 10){
                //criança
                img.setAttribute('src', 'criançaH.jpg')
                
            }else if(idade >10 && idade<18){
                //Adolecente
                img.setAttribute('src', 'criançaH.jpg')
            }else if(idade >= 18 && idade <=60){
                img.setAttribute('src', 'criançaH.jpg')
                //Adulto
                
            }else if(idade > 60){
                //Idoso
                img.setAttribute('src', 'criançaH.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade<= 10){
                //criança
                img.setAttribute('src', 'criança.jpg')
            }else if(idade >10 && idade<18){
                //Adolecente
                img.setAttribute('src', 'criançaH.jpg')
            }else if(idade >= 18 && idade <=60){
                //Adulto
                img.setAttribute('src', 'criançaH.jpg')
            }else if(idade > 60){
                //Idoso
                img.setAttribute('src', 'criançaH.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}