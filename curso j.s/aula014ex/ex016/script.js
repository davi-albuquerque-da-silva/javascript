function contar(){
    let ini =document.getElementById('txti')
    let fim =document.getElementById('txtf')
    let passo =document.getElementById('txtp')
    let res =document.getElementById('res')
}
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
     res.innerHTML = 'imposivel contar'
   //window.alert('[ERRO] faltam dados!')
}else{
    res.innerHTML ='contando: <br>'
    let i =number(ini.value)
    let f = number(fim.value)
    let p =number(passo.value)
    if(p <=0){
        window.alert('passo invalido!considerand o passo 1')
        p =1
    }
    if( i< f){
        //contagem crescente
        for(let c =i; c <= f; c+=p){
        res.innerHTML += `${c}\u{1f449}`
    }

    res.innerHTML +=`\u{1f3c1}`
     
    }else{
       // contagem regresiva
       for(let c =i ; c >=f;c-=p){
        res.innerHTML +=`${c} \u{1f449}`
       } 
    }

      res.innerHTML += `\u{1f3c1}`
    }

