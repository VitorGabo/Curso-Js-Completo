// var vel = 78.2
// console.log(`A velocidade do seu carro é ${vel}km/h`)
//     if(vel > 60){ // Condições Simples
//     console.log(`voce ultrapassou a velocidade permitida. MULTADO!`)
//     }
// console.log(`Dirija sempre usando seu cinto de segurança!`)
// _________________________________________________________________________
// var pais = 'Brasil'
//     if(pais =='Brasil'){
//         console.log('Brasileiro')
//     }else{
//         console.log('voce é estrangeiro!')
//     }

function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML= `Sua velociadade atual é de ${vel}`
    if(vel > 60){
        document.write(`Você ultrpassou a velocidade permitida`)
    }else{
        document.write("O radar não pegou você!")
    }
}

var bot= document.querySelector('input#bot')
bot.addEventListener('click',calcular)
