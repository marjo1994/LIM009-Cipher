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
const key2 = document.getElementById("key2").textContent;
const number = parseInt(document.getElementById("number").value);
cipher.encode(number,key2);
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="none";
document.getElementById("clave-enc").style.display="block";
}

//Función para devolver clave desencriptada
document.getElementById("btnDes").addEventListener("click",des);
function des() {
const encodeKey = document.getElementById("encode-key").textContent;
const number = parseInt(document.getElementById("number").value);
cipher.decode(number,encodeKey);
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="none";
document.getElementById("clave-enc").style.display="none";
document.getElementById("clave-dec").style.display="block";
}


//Función para refrescar la página

document.getElementById("btnRefresh").addEventListener("click",refresh);
function refresh() {
    location.reload();
}