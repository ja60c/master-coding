"use strict" //el modo estricto "use strict", ayuda a no salirse de las reglas de JS.

const misMonedas = [1,5,10,20,50,100,200,500,1000] //esto es una matriz de valores de tipo objeto, (lo que está dentor del valor es de tipo number), es lo mism que declarar una cadena de valores, tienen propiedades en comun aunque se declaran de forma distinta.


function counter(bolsaMonedas,valorNecesario){ 
    
    let acumulador = 0;
    console.log({acumulador})
    for (let i = 0;i<bolsaMonedas.lenght;i++){
        
        console.log('--------------------')
        console.log({acumulador})
        
        acumulador = acumulador + bolsaMonedas[i];
        
        console.log({valorActual:bolsaMonedas[i]})
        console.log('dentro del ciclo for número', i, {acumulador})
       
        if(acumulador<=valorNecesario){
            break;
        }
    }
    console.log({acumulador})
}

counter(misMonedas,100)


// Cuando usen parseInt, si están en modo estricto parseInt, si recuerdan, 
//transforma un string a un número en matemáticas de computadora entonces hay que poner qué base estamos usando, 
//en modo estricto, les va a arrojar un error si no dan las base. Por ejemplo parseInt(“24”,10)
// El segundo aumento es la base, 10 significa base decimal
// Recuerden que las compus operan con diferentes bases como binaria, base 3, 4, etc.
// *el segundo argumento




