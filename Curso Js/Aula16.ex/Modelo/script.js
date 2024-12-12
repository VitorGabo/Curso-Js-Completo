function Contar (){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.legth == 0 ){
        alert('[Erro} faltam dados')
    }else{
        res.innerHTML ='Contando'
        let i =Number(inicio.value)
        let f =Number(fim.value)
        let p =Number(passo.value)
        if(passo == 0 || passo <= 0){
            alert('Passo Inválido! considerando passo 1')
            p=1
        }
        if(inicio.value < fim.value){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449} `
            }
           
        }
        res.innerHTML += `${c} \u{1F449} `
    }
}