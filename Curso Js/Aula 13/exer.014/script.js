function carregar(){
    var msg= document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
   // var hora = data.getHours()
   var hora = 20

    msg.innerHTML =`Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src= 'nasce.webp'
        msg.innerText =`Está de manhã pois são ${hora} horas`
        document.body.style.background ='#e2cd9f'
        
    }else if(hora >=12 && hora <18){
        //Boa Tarde!
        img.src='pondo.jfif'
         msg.innerText =`Está de tarde pois são ${hora} horas`
         document.body.style.background ='#b9846f'
    }else {
        img.src='noite.jfif'
         msg.innerText =`Está de noite pois são ${hora} horas`
         document.body.style.background ='#515154'
        // Boa Noite!
    }
}




