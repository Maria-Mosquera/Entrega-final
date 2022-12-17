var saldo=0;

var usuarioSistema1 = "Maria"
var contraseñaSistema1= 13

var usuarioSistema2 = "Wilfer"
var contraseñaSistema2= 14

var usuarioSistema3 = "Yiseth"
var contraseñaSistema3= 15

for (let i = 0; i < 3; i++) {
    var usuario =prompt("ingrese usuario");
    var contraseña =parseInt(prompt("ingrese contraseña")); 
    if ((usuario==usuarioSistema1  && contraseña==contraseñaSistema1)||(usuario==usuarioSistema2  && contraseña==contraseñaSistema2) ||(usuario==usuarioSistema3  && contraseña==contraseñaSistema3)) {
        for (let index = 1; index < 2; index++) {
    
        var opcion= prompt("1: consultar saldo \n2: agregar saldo \n3: retirar saldo \n4:salir ")
            if (opcion==1) {
              alert (saldo) 
              index=0 
            }
            if (opcion==2 ) {
             var num= parseInt(prompt("cuanto desea ingresar"));  
             saldo=saldo + num 
             index=0 
            } 
            if (opcion ==3) {
                var num= parseInt(prompt("cuanto desea retirar"));  
                saldo=saldo - num   
                index=0 
            }  
            if (opcion==4) {
                index=2
                
            } 

        }
        i=3; 
    } else{
        alert("usuario o contraseña incorrecta")
    }    
    
}
