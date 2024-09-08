let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 20;
let valorCaja = 0;
 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //querySelector nos permite seleccionar elementos del HTML sea el nombre de una etiqueta como H1, P ETC..
    elementoHTML.innerHTML = texto; //innerHMTL es una propiedad en JavaScript que permite acceder o modificar el contenido HTML dentro de un elemento.
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //Utilizamos GetElemenById para selecionar inputs cuando tenemos mas de uno
    
    if (numeroDeUsuario === numeroSecreto) {asignarTextoElemento('p', `Acertaste el número Secreto en ${intentos} ${intentos === 1 ? 'intento' : 'Intentos'}`);
        document.getElementById('reiniciar').disabled = false;
        return;
    }
    else {
        if(numeroDeUsuario > numeroSecreto)
            {
                asignarTextoElemento('p', 'El número es menor. ')
            }else
            {
                asignarTextoElemento('p', 'El número secreto es mayor. ')
            }
            intentos++
            limpiarCaja()
    } 
    return;
}

function limpiarCaja(){
  valorCaja = document.querySelector('#valorUsuario').value = '';  
}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function nuevoJuego()
{
    //limpiar la caja
    limpiarCaja();
    //indicar el mensaje de intervalos
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desahabilitar el boton de nuevo numero
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
}


function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //Si ya sorteamos todos los numeros
   if(numerosSorteados.length === numeroMaximo)
    {
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles. ')
    }else
    {
       
    }
   //Si el numero generado esta incluido en la lista
   if(numerosSorteados.includes(numeroGenerado))
    {
        return generarNumeroSecreto();
    }
    else
    {   
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

condicionesIniciales();
