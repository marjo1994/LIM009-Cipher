describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=> {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
   
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=> {
    assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");

    });

    it('debería retornar "0123456789" para "3456789012" con offset 33', ()=> {
      assert.equal(cipher.encode(33,"0123456789"),"3456789012");
    });

    it('debería retornar simb2 para simb con offset 33', ()=> {
      const simb= '!' + '#$%&"()*+,-./';
      const simb2= '$'+ "&'()%+,-./!" + '"#';
      assert.equal(cipher.encode(33,simb),simb2);
    });

    it('debería retornar "LSPE QYRHS" para "HOLA MUNDO" con offset 30', ()=> {
      assert.equal(cipher.encode(30,"HOLA MUNDO"),"LSPE QYRHS");
    });

    it('debería retornar "Z" para "A" con offset -1', ()=> {
      assert.equal(cipher.encode(-1,"A"),"Z");
    });
    
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=> {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=> {
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789" para "3456789012" con offset 33', ()=> {
      assert.equal(cipher.decode(33,"3456789012"),"0123456789");
    });

    it('debería retornar simb para simb2 con offset 33', ()=> {
      const simb= '!' + '#$%&"()*+,-./';
      const simb2= '$'+ "&'()%+,-./!" + '"#';
      assert.equal(cipher.decode(33,simb2),simb);
    });

    it('debería retornar "HOLA MUNDO" para "LSPE QYRHS" con offset 30', ()=> {
      assert.equal(cipher.decode(30,"LSPE QYRHS"),"HOLA MUNDO");
    });

    it( 'debería retornar "B" para "A" con offset -1', ()=> {
      assert.equal(cipher.decode(-1,"A"),"B");
    });


  });

});
