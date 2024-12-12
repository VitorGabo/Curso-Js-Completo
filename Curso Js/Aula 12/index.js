// var idade = 10

// if(idade <18 ){
//     console.log('você é menor de idade')
// }else if(idade > 18 && idade < 60){
//     console.log('voce é maior de idade')
// }else if(idade >= 60){
//     console.log('Você não é obrigado a votar')
// }

var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
    break
    case 2:
        console.log('terça')
    break
    case 3:
        console.log('Quarta')
    break
    case 4:
        console.log('Quinta')
    break
    case 5:
        console.log('sexta')
    break
    case 6:
        console.log('Dsabado')
    break

}