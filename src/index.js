// Función para guardar clave 
document.getElementById("btnS").addEventListener("click",save);

function save () {
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
const key2 = document.getElementById("key2").textContent;
cipher.encode(number,key2);
}

//Función para devolver clave desencriptada
document.getElementById("btnDes").addEventListener("click",des);
function des() {
const encodeKey = document.getElementById("encode-key").textContent;
cipher.decode(number,encodeKey);
}