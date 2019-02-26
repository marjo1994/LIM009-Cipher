const decodeKey = document.getElementById("decode-key");
const encodeKey = document.getElementById("encode-key");
const key2 = document.getElementById("key2");
const number = parseInt(document.getElementById("number").value);

window.cipher = {
  encode: (number,key2) => {
    for (let i = 0; i< key2.length; i++) {
      if(65<=key2.charCodeAt(i) && key2.charCodeAt(i)<=90) {
        encodeKey.innerHTML += String.fromCharCode(((key2.charCodeAt(i)-65+number)%26)+65);
      } else if(97<=key2.charCodeAt(i) && key2.charCodeAt(i)<=122) {
        encodeKey.innerHTML += String.fromCharCode(((key2.charCodeAt(i)-97+number)%26)+97);
      }
    }
  },
  decode: (number,encodeKey) => {
    for (let i = 0; i< encodeKey.length; i++) {
      if(65<=encodeKey.charCodeAt(i) && encodeKey.charCodeAt(i)<=90) {
        decodeKey.innerHTML += String.fromCharCode(((encodeKey.charCodeAt(i)-90-number)%26)+90); 
      } else if(97<=encodeKey.charCodeAt(i) && encodeKey.charCodeAt(i)<=122) {
        decodeKey.innerHTML += String.fromCharCode(((encodeKey.charCodeAt(i)-122-number)%26)+122);
      }
    }
  }
};

