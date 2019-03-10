window.cipher = {
  encode: (offset,string) => {
    let textenc = '';
    for (let i = 0; i< string.length; i++) {
      const Ascii = string.charCodeAt(i);
      if(65<=Ascii && Ascii<=90 && offset>=0) {
        textenc += String.fromCharCode((Ascii-65+offset)%26+65);
      } else if(97<=Ascii && Ascii<=122 && offset>=0) {
        textenc += String.fromCharCode((Ascii-97+offset)%26+97);
      } else if(33<=Ascii && Ascii<=47 && offset>=0) {
        textenc += String.fromCharCode((Ascii-33+offset)%15+33);
      } else if(48<=Ascii && Ascii<=57 && offset>=0) {
        textenc += String.fromCharCode((Ascii-48+offset)%10+48);
      } else if(32 === Ascii && offset>=0) {
        textenc += String.fromCharCode(Ascii);
      } else if(65<=Ascii && Ascii<=90 && offset<0) {
        textenc += String.fromCharCode((Ascii-90+offset)%26+90); 
      } 
     } return textenc;
  },
  decode: (offset,string) => {
    let textdec = '';
    for (let i = 0; i< string.length; i++) {
      const Ascii = string.charCodeAt(i);
      if(65<=Ascii && Ascii<=90 && offset>=0) {
        textdec += String.fromCharCode((Ascii-90-offset)%26+90); 
      } else if(97<=Ascii && Ascii<=122 && offset>=0) {
        textdec += String.fromCharCode((Ascii-122-offset)%26+122);
      } else if(33<=Ascii && Ascii<=47 && offset>=0) {
        textdec += String.fromCharCode((Ascii-47-offset)%15+47);
      } else if(48<=Ascii && Ascii<=57 && offset>=0) {
        textdec +=  String.fromCharCode((Ascii-57-offset)%10+57);
      } else if(32 === Ascii && offset>=0) {
        textdec += String.fromCharCode(Ascii);
      } else if(65<=Ascii && Ascii<=90 && offset<0) {
        textdec += String.fromCharCode((Ascii-65-offset)%26+65);
      } 
    } return textdec;
  }
};

