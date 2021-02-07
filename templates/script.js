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


    let numeroCompleto = inputValores.value;

    let num1 = "";

    let operando = "";

    let num2 = "";

    let valoresValidados = false;

    for (let i = 0; i < numeroCompleto.length; i++) {

        if (numeroCompleto.charAt(i) == "+") {
            
            let numeros = numeroCompleto.split("+");

            num1 = numeros[0];

            operando = "suma";

            num2 = numeros[1];

            valoresValidados = true;
                    
        }

        if (numeroCompleto.charAt(i) == "-") {
            
            let numeros = numeroCompleto.split("-");

            num1 = numeros[0];

            operando = "resta";

            num2 = numeros[1];

            valoresValidados = true;
                    
        }

        if (numeroCompleto.charAt(i) == "*") {
            
            let numeros = numeroCompleto.split("*");

            num1 = numeros[0];

            operando = "multiplicacio";

            num2 = numeros[1];

            valoresValidados = true;
                    
        }

        if (numeroCompleto.charAt(i) == "/") {
            
            let numeros = numeroCompleto.split("/");

            num1 = numeros[0];

            operando = "divisio";

            num2 = numeros[1];

            valoresValidados = true;
                    
        }
        
    }

    if (valoresValidados) {
        
        var objetoValores = [num1,operando,num2];

    }else{

        var objetoValores = "";
    }
    
    return objetoValores;

}


/* VERIFICAMOS SI VIENE O NO CORRECTO ANTES DE HACER EL XMLHTTPREQUEST */
botonIgual.addEventListener("click", () =>{
    
    let validados = validacionInput();

    console.log(validados);

    if (validados) {

        let numero1 = parseInt(validados[0]);

        let numero2 = parseInt(validados[2]);

        if (!isNaN(numero1)) {

            if (!isNaN(numero2)) {
                
                envioAjax(numero1,validados[1],numero2);

            }else{
                alert("el numero 2 no es correcto")
            }  
        }else{
            alert("el numero 1 no es correcto");
        }

        
    }else{
        alert("datos erroneos");
    }

});

/* FUNCION CON LA QUE ENVIAMOS LA PETICION POR MEDIO DE AJAX */
const envioAjax = (num1, operador, num2) =>{

    console.log(num1,operador,num2);

    /* AQUI IRIA LA URL REAL DE LA API */
    /* let url = "http://localhost/AppM8UF2/recibir.php/"+num1+"/"+operador+"/"+num2; */

    /* URL TEST BORRAR AL OBTENER URL REAL */
    let url = "../text.json"

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

        if (this.status == 200 && this.status == 200) {

            limpiarTablero();

            let respuesta = JSON.parse(this.responseText);

            /* AQUI SOLO MOSTRAMOS DEL OBJETO LA PROPIEDAD RESULTADO QUE DEVUELVE EL JSON */
            inputValores.value = respuesta.resultado;

            validacionInput();
            
        }

    }

    xhttp.open("GET", url, true);

    xhttp.send();

}

