
var agora =new Date() /* o new Date é para pegar pela hora do sistema que ta rodando o seu script*/
var hora =agora.getHours()
console.log(`agora sao extamente ${hora} horas.` )
if (hora < 12){
    console.log('bom dia!')
}else if ('hora <=18'){
    console.log('boa tarde!')
}else {
    console.log('boa noite!')

}