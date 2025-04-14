

function mundo(){
    document.getElementById("resposta").innerHTML = "Olá Mundo"
    document.getElementById("resposta").style.color = "Crimson"
}

function minhafuncao(){
    if(document.getElementById("div").innerHTML = "Mudar texto"){
        document.getElementById("div").innerHTML = "Utilizando Id"
        document.getElementById("div").style.color = "Crimson"
    }else{
        document.getElementById("div").innerHTML = "Mudar texto"
    }
}

// function outrafuncao(){
//     document.getElementById("div2").style.backgroundColor = "red"
// }


function minhafuncao2(){
    if(document.getElementsByName("div3")[0].innerHTML = "Mudar texto"){
        document.getElementsByName("div3")[0].innerHTML = "Utilizando Name"
        document.getElementsByName("div3")[0].style.color = "Crimson"
    }else{
        document.getElementsByName("div3")[0].innerHTML = "Mudar texto"
    }
}


// function outrafuncao2(){
//     document.getElementsByName("div4")[0].style.backgroundColor = "red"
// }


function minhafuncao3(){
    if(document.getElementsByClassName("div5")[0].innerHTML = "Mudar texto"){
        document.getElementsByClassName("div5")[0].innerHTML = "Utilizando Class";
        document.getElementsByClassName("div5")[0].style.color = "Crimson"
    }else{
        document.getElementsByClassName("div5")[0].innerHTML = "Mudar texto"
    }
}

// function outrafuncao3(){
//     document.getElementsByClassName("div6")[0].style.backgroundColor = "red"
// }

function calcular(){
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById("valor2").value);
    let result = v1+v2;
    document.getElementById("resposta2").innerHTML = "Resultado é " + result;

}
