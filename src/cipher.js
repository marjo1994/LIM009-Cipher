const encodeKey = document.getElementById(encodeKey);
const key2 = document.getElementById(key2);

window.cipher = {
  encode: (number,key2) => {
    for (let i = 0; i< key2.length; i++) {
      encodeKey.innerHTML += String.fromChardCode((key2.charCodeAt(i)-65+number)%26+65);
      }
    },
  //decode: (number,encodeKey) => {
    //for (let i = 0; i< encodeKey.length; i++) {
    //decodeKey.innerHTML += String.fromChardCode((encodeKey.charCodeAt(i)-65-number)%26+65);
    }
};