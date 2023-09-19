function tabuada(){
    let num =document.getElementById('txtn')
    let tab =document.getElementById('seltab')

if(num.value.length == 0 ){
    window.alert('por favor , digite um numero !')

}else{
    let n = 
number(num.value)
    let c =1
    tab.inerHTML = ''
    while (c <=10){
        let item = document.createElement('option')
        item.text = ` ${num} x ${c} ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}

}