function tabuada() {
   let  num = document.getElementById('num')
   let tab = document.getElementById('seltab')
   if(num.value.length == 0){
    alert('Por favor, Digite um número!')
        let n = Number(num.value)
   }else{
    let n = Number(num.value)
    let c =1
    while(c <= 10){
        let item =document.createElement('option')
        item.text =`${n} x ${c} = ${n*c}`
        tab.appendChild(item) // Adicionar um elemento filho
        c++;
    }
   }
    
    
}