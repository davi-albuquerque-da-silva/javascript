let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('dev#res')
let valores = []



function isnumero(n){
    if(Number(n) >=1 && Number(N) <=100){
        return true
    }else {
        return false
    }
}

function inlista(n,l ){
    if(l.indexOf(number(n))!= - 1){
        return true
    }else{
        return false
    }

}






function adicionar(){
    if(isnumero(num.value)&& !inlsta(num.value, valores)){
    valores.push(number(num.value))
    let item = document.createElement('option')
    item.text = `valor${num.value} adicinado.`
    lista.appendchild(item)
    res.innerHTML =''
    }else{
        window.alert('valor invalido ou ja encontrado.')
    }
    num.value =''
    num.focus()
}
function finalizar(){
    if(valores.lenght ==0){
        window.alert('adiciona valores')

    }else{
            let tot =valores.length
            let maior= valores[0]
            let menor =valores[0]
            let soma =0
            let media =0
            for(let pos  in valores){
                if(valores[pos]>maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            }
            media = soma /tot
            res.innerHTML = ''
            res.innerHTML +=`<p>ao todo ,temos ${tot}numeros cadastrados.</p>`
            res.innerHTML +=`<p>o menor valor irformado foi ${maior}.</p>`
            res.innerHTML += `<P>o menor valor informado foi ${menor}.</P>`
            res.innerHTML +=`<p>somando todos os valores  ,temos ${soma}.</p>`
            res.innnerHTML += `<p> medai dos valores  digitados e ${media}</P>`
        }
    }
