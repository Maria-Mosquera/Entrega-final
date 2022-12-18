// document.write("Hola")
// let numero9 = 8
// let numero10 = 7
// let total = numero9 + numero10

// document.write(  "bienvenido" + "<br>"  + "Total: "+  total )





// let numero= parseInt(prompt('ingrese numero'));
// let numero1= parseInt(prompt("ingres numero1"));
// let resultados = numero + numero1

// document.write("Usuarioss" +  resultados)






// let num= parseInt(prompt('ingrese numero' ));
// let nums= parseInt(prompt('ingrese otro numero'));
// let numero=parseInt(prompt('ingreso mas numeros'));
// let total = num -nums - numero
// document.write('restado' +  total)




// let num1= parseInt(prompt( "ingres n"));
// let num2= parseInt(prompt('ingrese otro nu')); 
// let num3= parseInt(prompt('ingres'));
// let num4= parseInt(prompt('ing'));
// let resultado= num1 * num2 * num3 * num4
// document.write(resultado)





// 1 pedir al usuario cuantos numeros va a ingresar o personalbar
// 2  crear for lo itero con la variable de arriba de cero Hasta
// 3dentro del for le pido un numero, una 
// bucle for 






// funcion que me permita validar el usuario - 
// primero si esta correctop me va apermitir ingresar la contraseña, 
// si el usuario no esta correcto no voy  apoder ingresar la contraseña ni
// //  tampoco muestra saludo --dentro de ina funcion.   dentro de una funcion

// ejercicio 1

// validarusuario()
// function validarusuario() {
//     let usuarioSistema= "ofelia"
//     let contraseñaSistema= 1234
//     let usuario= prompt("ingresa tu usuario");
    
//     if (usuario==usuarioSistema) {
//         let contraseñaUsuario=prompt("ingresa tu contraseña")
//         if (contraseñaUsuario==contraseñaSistema) {
//             alert("Hola bienevenida")  
    
//         } else{ 
//             alert("contrase incorrecta")
//         }
//     } else{ 
//         alert("usuario incorrecto")
//     }  
// }







// ejercicio 2



// let numero= parseInt(prompt("ingresa el numero"));
// if (numero / numero==1 ) {
//     alert( "este numero es divisible por si mismi")
    
// }else{
//     alert("no es divisible por si mismo")
// }






// ejercicio 3
// crearusuario()
// function crearusuario() {
//     let ususario= prompt("ingresa tu ususario")
//     let contraseña=prompt("ingresa tu contraseña")
//     alert ("usuario  creado exitosamente")
//     alert ("usuario: " + ususario  + " contraseña: " + contraseña)
// }







// numero 4

// alert("copia un numero segun la opción que necesite")
// var numero= prompt("1:crear usuario,2 : cambiar contraseña, 3 : asignar un nombre de usuario")
// if (numero==1) {
//     var usuario= prompt("ingresa tu ususario")
//     var contraseña=prompt("ingresa tu contraseña")
//     alert ("usuario  creado exitosamente")
//     alert ("usuario: " + usuario  + " contraseña: " + contraseña)     
// } else if (numero==2) {
//     contraseña=prompt("ingrese la nueva contraseña")
//     alert("contraseña cambiada exitosamente")
// }  else if (numero==3) {
//     usuario=prompt( "ingresa nuevo nombre de ususario")
//     alert ("usuario cambiado exitosamente")
// }











// alert("copia un numero segun la opción que necesite")

// var bucle= 1;
// while (bucle==1) {
//     var opción= prompt( "1: sumar, 2 : resta, 3: multiplica, 4 : dividir, 5: salir" )
//     if (opción==1) {
//         let numero= parseInt(prompt("ingresa un número ")); 
//         let numero2=parseInt(prompt("ingresa oto número"));
//         let suma= numero + numero2
//         alert ("resultados suma: " + suma)

//     } else if (opción==2 ) {
//         let numero= parseInt(prompt("ingresa un número ")); 
//         let numero2=parseInt(prompt("ingresa oto número"));
//         let resta= numero - numero2
//         alert ("resultados resta: " + resta)   
//     }else if (opción==3 ) {
//         let numero= parseInt(prompt("ingresa un número ")); 
//         let numero2=parseInt(prompt("ingresa oto número"));
//         let multiplicar= numero * numero2
//         alert ("resultados multiplica: " + multiplicar)
//     } else if (opción==4 ) {
//         let numero= parseInt(prompt("ingresa un número ")); 
//         let numero2=parseInt(prompt("ingresa oto número"));
//         let dividir= numero / numero2
//         alert ("resultados dividir: " + dividir)
//     } else if (opción==5) {
//       bucle= 2  
//       alert(" tesaliste de la calculadora")

//     }
// }




// var producto=prompt("ingresar producto")
// switch (producto) {
//     case "zanahorias":
//         alert(" precio para la zanahoria 1500")  
//         break;
//     case "carne":
//         alert(" precio para la carne 2500")  
//         break;
//     case "papa":
//         alert(" precio para la papa 2500")  
//         break;
//     default:
//         alert("noy hay precio para lo que solicitastes")
//         break;

// }
