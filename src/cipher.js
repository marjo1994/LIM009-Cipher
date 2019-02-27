window.cipher = {
  encode: (offset,string) => {
    let textenc = '';
    for (let i = 0; i< string.length; i++) {
      if(65<=string.charCodeAt(i) && string.charCodeAt(i)<=90) {
        textenc += String.fromCharCode(((string.charCodeAt(i)-65+offset)%26)+65);
      } else if(97<=string.charCodeAt(i) && string.charCodeAt(i)<=122) {
        textenc += String.fromCharCode(((string.charCodeAt(i)-97+offset)%26)+97);
      } else if(33<=string.charCodeAt(i) && string.charCodeAt(i)<=47) {
        textenc += String.fromCharCode(((string.charCodeAt(i)-33+offset)%15)+33);
      } else if(48<=string.charCodeAt(i) && string.charCodeAt(i)<=57) {
        textenc += String.fromCharCode(((string.charCodeAt(i)-48+offset)%10)+48);
      }
     } return textenc;
  },
  decode: (offset,string) => {
    let textdec = '';
    for (let i = 0; i< string.length; i++) {
      if(65<=string.charCodeAt(i) && string.charCodeAt(i)<=90) {
        textdec += String.fromCharCode(((string.charCodeAt(i)-90-offset)%26)+90); 
      } else if(97<=string.charCodeAt(i) && string.charCodeAt(i)<=122) {
        textdec += String.fromCharCode(((string.charCodeAt(i)-122-offset)%26)+122);
      } else if(33<=string.charCodeAt(i) && string.charCodeAt(i)<=47) {
        textdec += String.fromCharCode(((string.charCodeAt(i)-47-offset)%15)+47);
      } else if(48<=string.charCodeAt(i) && string.charCodeAt(i)<=57) {
        textdec +=  String.fromCharCode(((string.charCodeAt(i)-57-offset)%10)+57);
      }
    } return textdec;
  }
};

