assert = require('assert');
Conversor = require('./conversor').Conversor;

describe('Um só valor',function(){
  it('um só numero',function(){
    var conversor = new Conversor("1");
    assert.equal(conversor.converte(),"1");
  })
})

describe('Dois operandos',function(){
  it('2 + 2 =  2 2 +',function(){
    var conversor = new Conversor("2 + 2");
    assert.equal(conversor.converte(),"2 2 +");
  })
})

describe('Mais de tres operandos somando',function(){
  it('2 + 3 + 4 + 5 + 6',function(){
    var conversor = new Conversor("2 + 3 + 4 + 5 + 6");
    assert.equal(conversor.converte(),"2 3 4 5 6 + + + +")
  })
})

describe('Tres operadores soma e multiplica',function(){
  it('2 * 3 + 4',function(){
    var conversor = new Conversor("2 * 3 + 4");
    assert.equal(conversor.converte(),"2 3 * 4 +")
  })

  it('quatro operadores alternando',function(){
    var conversor = new Conversor("2 * 3 + 4 * 5");
    assert.equal(conversor.converte(),"2 3 * 4 5 * +")
  })

})

describe('com parenteses',function(){
  it('2 * ( 3 + 4 )',function(){
    var conversor = new Conversor("2 * ( 3 + 4 )");
    assert.equal(conversor.converte(),"2 3 4 + *")
  })
})
