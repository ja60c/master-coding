console.log('Hola desde PROYECTO FINAL 🎉🎉')
//////Fórmula para calcular el Índice de Masa Corporal////
const boton_IMC = document.getElementById('boton_IMC')
const peso_IMC = document.getElementById('peso_IMC')
const altura_IMC = document.getElementById('altura_IMC')
const respuesta_IMC = document.getElementById('respuesta_IMC')
const respuesta_Categoria = document.getElementById('respuesta_Categoria')
const respuesta_Doctor = document.getElementById('respuesta_Doctor')
const categoria_Peso = document.getElementById('categoria_Peso')
const IMC = () =>{
    const imc = parseFloat(peso_IMC.value)  / (parseFloat(altura_IMC.value) * 2)
    respuesta_IMC.innerHTML = `${Math.round(imc * 10) / 10}`
    if (parseInt(respuesta_IMC.innerHTML)  < 18){
        categoria_Peso.innerHTML = "Bajo peso",
        respuesta_Doctor.innerHTML = " Hable con su proveedor de atención médica para establecer las posibles causas del bajo peso y si necesita ganar peso."
    }else if (parseInt(respuesta_IMC.innerHTML) >= 18 && parseInt(respuesta_IMC.innerHTML) <= 25){
        categoria_Peso.innerHTML = "Peso normal",
        respuesta_Doctor.innerHTML = "Su peso es ideal para su altúra, contacte con su proveedor médico si tiene alguna consulta adicional"
    }else if (parseInt(respuesta_IMC.innerHTML) > 26){
        categoria_Peso.innerHTML = "Sobrepeso"
        respuesta_Doctor.innerHTML = " Hable con su proveedor de atención médica para establecer las posibles causas del sobrepeso y si necesita perder peso"
    }else{
        alert("Algo ha salido mal")
    }
}
boton_IMC.addEventListener('click', IMC)
////// Fórmula para calculár la Protenía que se debe consumir 
// const pesoProteina = prompt('Su peso (lb)')
// let fuerza = false
// let resistencia = false
// let sinEntrenamiento = true
const peso_Proteina = document.getElementById("peso_Proteina")
const entreno_Bajo = document.getElementById("entreno_Bajo")
const entreno_Resistencia = document.getElementById("entreno_Resistencia")
const entreno_Fuerza = document.getElementById("entreno_Fuerza")
const boton_Proteina = document.getElementById("boton_Proteina")
const resultado_Proteina = document.getElementById("resultado_Proteina")
function Proteina() {
    if (entreno_Fuerza.checked === true){
        const proteina_Fuerza = parseFloat(peso_Proteina.value)* 0.7 + 10
        resultado_Proteina.innerHTML = `${proteina_Fuerza}`
    }else if (entreno_Resistencia.checked === true){
        const proteina_Resistencia = parseFloat(peso_Proteina.value) * 0.7 - 15.63
        resultado_Proteina.innerHTML = `${proteina_Resistencia}`
    }else if (entreno_Bajo.checked === true){
        const entreno_Bajo = parseFloat(peso_Proteina.value) * 0.7 - 54.73
        resultado_Proteina.innerHTML = `${entreno_Bajo}`
    }else{
        alert("Debes elegír una opción")
    }
}
boton_Proteina.addEventListener('click', Proteina)



//////Fórmula para calcular las CALORIAS////
const respuestaCalorias = document.getElementById('respuesta-calorias')
const botonCalorias = document.getElementById('boton-calorias')
botonCalorias.addEventListener('click', function(){
    // variables de peso, altura, edad y sexo
    let pesoCalorias = document.getElementById('peso-calorias').value;
    let alturaCalorias = document.getElementById('altura-calorias').value;
    let edad = document.getElementById('edad').value;
    let sexo = document.getElementById('sexo');
    // variables de nivel de actividad
    let actividadPoco = document.getElementById('poco');
    let actividadLigero = document.getElementById('ligero');
    let actividadModerado = document.getElementById('moderado');
    let actividadFuerte = document.getElementById('fuerte');
    let actividadMuyFuerte = document.getElementById('muy-fuerte');
    // equivalencia numerica de nivel de actividad
    let actividadPocoFactor = 1.2
    let actividadLigeroFactor = 1.55
    let  actividadModeradoFactor = 1.375
    let  actividadFuerteFactor = 1.72
    let  actividadMuyFuerteFactor = 1.9 
    // formulas para calcular TMB básico para hombre y mujer (edad, peso, altura, sexo)
    let calculaCaloriasMujer = ((655 + (9.6 * pesoCalorias)) + (1.8 * alturaCalorias) - (4.7 * edad));
    let calculaCaloriasHombre = ((66 + (13.7 * pesoCalorias)) + (5 * alturaCalorias) - (6.75 * edad));
    // formula para calcular Mifflin St-Jor MUJER (formula anterior * nivel de actividad)
    let mujerPoco = calculaCaloriasMujer * actividadPocoFactor
    let mujerLigero = calculaCaloriasMujer * actividadLigeroFactor
    let mujerModerado = calculaCaloriasMujer * actividadModeradoFactor
    let mujerFuerte = calculaCaloriasMujer * actividadFuerteFactor
    let mujerMuyFuerte = calculaCaloriasMujer * actividadMuyFuerteFactor
    // formula para calcular Mifflin St-Jor HOMBRE (formula anterior * nivel de actividad)
    let hombrePoco = calculaCaloriasHombre * actividadPocoFactor
    let hombreLigero = calculaCaloriasHombre * actividadLigeroFactor
    let hombreModerado = calculaCaloriasHombre * actividadModeradoFactor
    let hombreFuerte = calculaCaloriasHombre * actividadFuerteFactor
    let hombreMuyFuerte = calculaCaloriasHombre * actividadMuyFuerteFactor
    // CONDICIONAL    
    if (sexo.value == 'mujer' && actividadPoco.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(mujerPoco * 10) /10;
    } else if (sexo.value == 'mujer' && actividadLigero.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(mujerLigero * 10) /10
    } else if (sexo.value == 'mujer' && actividadModerado.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(mujerModerado * 10) /10
    } else if (sexo.value == 'mujer' && actividadFuerte.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(mujerFuerte * 10) /10
    } else if (sexo.value == 'mujer' && actividadMuyFuerte.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(mujerMuyFuerte * 10) /10
    } else if (sexo.value == 'hombre' && actividadPoco.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(hombrePoco * 10) /10
    } else if (sexo.value == 'hombre' && actividadLigero.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(hombreLigero * 10) /10
    } else if (sexo.value == 'hombre' && actividadModerado.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(hombreModerado * 10) /10
    } else if (sexo.value == 'hombre' && actividadFuerte.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(hombreFuerte * 10) /10
    } else if (sexo.value == 'hombre' && actividadMuyFuerte.checked == true){
        document.getElementById('respuesta-calorias').innerHTML = Math.round(hombreMuyFuerte * 10) /10
    } else {
        console.log('Hubo un errror, inténtalo de nuevo')

    }
})