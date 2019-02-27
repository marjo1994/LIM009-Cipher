// Función para guardar clave 
document.getElementById("btnS").addEventListener("click",()=>{
    const name = document.getElementById("name").value;
    document.getElementById("saludo").innerHTML=`Hola ${name} , tu clave elegida es`;
    const key = document.getElementById("key").value;
    document.getElementById("key2").innerHTML=`${key}`;
    document.getElementById("inicio").style.display="none";
    document.getElementById("claves").style.display="block";
});


//Función para devolver clave encriptada
document.getElementById("btnEnc").addEventListener("click",()=>{
const offset = parseInt(document.getElementById("number").value);
const string = document.getElementById("key2").textContent;
const encodeKey = document.getElementById("encode-key");
encodeKey.innerHTML = cipher.encode(offset,string);
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="none";
document.getElementById("clave-enc").style.display="block";
});

//Función para devolver clave desencriptada
document.getElementById("btnDes").addEventListener("click",()=>{
const offset = parseInt(document.getElementById("number").value);
const decodeKey = document.getElementById("decode-key");
const string = document.getElementById("encode-key").textContent;
decodeKey.innerHTML = cipher.decode(offset,string);
document.getElementById("inicio").style.display="none";
document.getElementById("claves").style.display="none";
document.getElementById("clave-enc").style.display="none";
document.getElementById("clave-dec").style.display="block";
});

//Función para refrescar la página

document.getElementById("btnRefresh").addEventListener("click",refresh);
function refresh() {
    location.reload();
}