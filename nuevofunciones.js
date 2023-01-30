document.getElementById("respuestaincorrecta1").onclick = function (){
    console.log ("El botón anda");
    document.getElementById("texto").innerHTML = "Incorrecta";
    document.body.style.backgroundColor='#FF3333';
}

document.getElementById("respuestaincorrecta2").onclick = function (){
    console.log ("El botón anda");
    document.getElementById("texto").innerHTML = "Incorrecta";
    document.body.style.backgroundColor='#FF3333';
}

document.getElementById("respuestacorrecta").onclick = function (){
    console.log ("El botón anda");
    document.getElementById("texto").innerHTML = "Correcta";
    document.body.style.backgroundColor='#BBFF99';
}

document.getElementById("reestablecer").onclick = function (){
    console.log ("El botón anda");
    document.getElementById("texto").innerHTML = "Tu respuesta es..."
    document.body.style.backgroundColor='#FFFFFF';
}


