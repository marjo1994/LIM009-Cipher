// Función para guardar clave 
document.getElementById("btnS").addEventListener("click",save);

function save() {
const name = document.getElementById("name").value;
document.getElementById("saludo").innerHTML=`Hola ${name} , tu clave elegida es`;
let key = document.getElementById("key").value;
document.getElementById("key2").innerHTML=`${key}`;
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="block";
}
//Función para devolver clave encriptada
document.getElementById("btnEnc").addEventListener("click",enc);

function enc() {
const key2 = document.getElementById(key2);
cipher.encode(10,key2);
}
