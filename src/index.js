// Funcion Guardar clave

document.getElementById("btnS").addEventListener("click",save);

function save() {
const name = document.getElementById("name").value;
document.getElementById("saludo").innerHTML=`Hola ${name} , tu clave elegida es`;
let key = document.getElementById("key").value;
document.getElementById("key2").innerHTML=`${key}`;
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="block";
}