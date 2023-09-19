function verificar(){
    var data = new Date() 
    var ano =data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.Value.length == 0 || number (fano.value)>ano){
        window.alert('[erro]verifique os dados e tente novamente')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano -Number(fano.ano)
       var genero =''
       var img =document.createElement('img')
       img.setAttribute('id' ,'foto' )
       if (fsex[0].checked){
        genero ='homem'
        if(idade >=20 && idade <30){
            //jovem  
               img.setAttribute('src ','imagens/homemjovem.png')
        }else if(idade <50){
            //adulto
        }else{
            //idoso
            img.attributes('src',' imagens/homemvelho.png    ' 
             )
        }

        
       }else if (fsex[1].checked){
        genero ='mulher'
       }
       if(idade >=20 && idade <30){
        //jovem
        img.attributes('src','imagens/mulherjovem.png')
   
    }else if(idade <50){
        //adulto
    }else{
        //idoso
        img.attribute('src', 'imagens/mulhervelha.png')
    }
       res.style.textAlign = 'center'
       res.innerHTML ='Detectamos&{genero} com &{idade} anos.'
    }
}