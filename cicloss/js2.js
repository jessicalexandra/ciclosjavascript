var n= prompt ("digite un numero");
var con=0;
var acomuladora=0
while( n !=="s"){
    // document.write("<p>"+ con +"x"+ n +"="+(con*n)+"</p>")
    acomuladora=n;
    n=prompt("digite un numero")
    document.write("<p> los numeros que digito son : " +acomuladora+"</p>")
    con=con+1;

}
