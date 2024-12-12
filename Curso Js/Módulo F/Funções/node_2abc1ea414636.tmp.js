//Funções: Chamada,Parâmetros,Ação,Retorno
function parimp(n){
    if(n % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimp(2))


function somar(n1 = 0,n2 = 0){
  return n1 + n2
}

console.log(somar(7))

let v = function(x){
    return x*2
}

console.log(v(5))

function fatorial(n){
    let fat = 1
    for(let c = n; n >1; c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))