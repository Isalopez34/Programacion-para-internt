//arreglo con las respuestas correctas
let correctas=[2,3,1,1,1]

//arreglo donde se guardan las respuestas 
let opcion_elegida=[];

let Respuestas=0;

//funcion del pregunta e input
function respuesta(num_pregunta, seleccionada){
    //se guarda la respuesta elegida
    opcion_elegida[num_pregunta]=seleccionada.value;

    id="p"+ num_pregunta;

    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "White";
    labels[5].style.backgroundColor = "White";
    labels[7].style.backgroundColor = "White";
    // color para label seleecionado
    seleccionada.parentNode.style.backgroundColor="#cec0fc";
}
//funcion para comparar las respuestas
function corregir(){
    Respuestas = 0;
    for(i=0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            Respuestas++;
        }
    }
    document.getElementById("resultado").innerHTML=Respuestas;
}