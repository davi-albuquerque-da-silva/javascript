//recursividade
function fatorial(n){
    if(n ==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! =5 x 4 x3 x2 x1
5! = 5x 4!

n!= nx (n-1)
1! =1


*/