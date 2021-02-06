/* VARIABLES GLOBALES */
let botones = document.querySelectorAll(".botones-calc");

let botonLimpiar = document.querySelector(".boton-limpiar");

let inputValores = document.querySelector(".input-valores");

let botonIgual = document.querySelector(".boton-enviar");

/* RECOGEMOS VALOR DE CADA BOTTOM */
for (let index = 0; index < botones.length; index++) {
    
    botones[index].addEventListener("click", ()=>{

        inputValores.value += botones[index].value;
    });
    
}

/* FUNCION PARA LIMPIAR EL TABLERO DE RESULTADOS */
let limpiarTablero = () =>{

    inputValores.value = "";
}
botonLimpiar.addEventListener("click", limpiarTablero, true);

/* VALIDACION DE CAMPOS PARA ACEPTAR SOLO NUMEROS Y CARACTER OPERACION */
let validacionInput = () =>{

    let numeroCompleto = inputValores.value.split("");

    var numero1 = "";

    var numero2 = "";

    var operando = "";

    var validacion = false;

    for (let index = 0; index < numeroCompleto.length; index++) {

        switch (numeroCompleto[index]) {
            case "+":
                numeroCompleto[index].split("+"); 

                numero1 = numeroCompleto[0]; 

                operando = numeroCompleto[1]; 

                numero2 = numeroCompleto[2]; 

                validacion = true;

                break;
        
            case "-":
                numeroCompleto[index].split("-");
            
                numero1 = numeroCompleto[0]; 

                operando = numeroCompleto[1]; 

                numero2 = numeroCompleto[2]; 

                validacion = true;

                break;

            case "*":
                numeroCompleto[index].split("*");

                numero1 = numeroCompleto[0]; 

                operando = numeroCompleto[1]; 

                numero2 = numeroCompleto[2]; 

                validacion = true;

                break;

            case "/":
                numeroCompleto[index].split("/");

                numero1 = numeroCompleto[0]; 

                operando = numeroCompleto[1]; 

                numero2 = numeroCompleto[2]; 

                validacion = true;

                break;
        }

    }

    /* SI ES CORRECTO ENVIA UN ARRAY LLENO SI NO ENVIA CERO */
    if (validacion) {
        
        var objetoValores = [numero1,operando,numero2];

    }else{

        var objetoValores = "";
    }

    return objetoValores;

}


/* VERIFICAMOS SI VIENE O NO CORRECTO ANTES DE HACER EL XHTTPREQUEST */
botonIgual.addEventListener("click", () =>{
    
    let validados = validacionInput();

    if (validados) {

        console.log("verda "+validados[2]);

        /* aqui llamamos al metodo XHTMREQUEST */

        limpiarTablero();

    }else{

        alert("los datos son erroneos");

        limpiarTablero();
    }

});

