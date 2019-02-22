const decodeKey = document.getElementById("decode-key");
const encodeKey = document.getElementById("encode-key");
const key2 = document.getElementById("key2");
const number = 10;

window.cipher = {
  encode: (number,key2) => {
    for (let i = 0; i< key2.length; i++) {
      encodeKey.innerHTML += String.fromCharCode(((key2.charCodeAt(i)-65+number)%26)+65);
      }
    },
  decode: (number,encodeKey) => {
    for (let i = 0; i< encodeKey.length; i++) {
      decodeKey.innerHTML += String.fromCharCode(((encodeKey.charCodeAt(i)-65-number)%26)+65);
   }
  }
};

