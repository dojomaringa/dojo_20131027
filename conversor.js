var pri = {
  '+' : 1,
  '-' : 1,
  '*' : 2,
  '/' : 2,
  '(' : 3
};

var Conversor = function(e){
  var operandos = [];
  var operadores = [];

  this.compara = function(valor) {
        return  (operadores.length > 0 
      && pri[operadores[operadores.length - 1]] > pri[valor] ) 

  }

  this.converte = function(){
   var a = e.split(' ');

   for (var i=0; i < a.length; i++){
     if (/[0-9]/.test(a[i])){
       operandos.push(a[i]);
     } else {

      if (a[i] == ')'){
        continue;
      }

      if (this.compara(a[i])) {
         var topo = operadores.pop();
         if (topo != '(') {
          operandos.push(topo)
         }

      } 
      operadores.push(a[i]);
     }
   }
    
   var string = "";
   
   for (var i = 0; i < operandos.length; i++) {
     string += operandos[i].toString() + " ";
   }

   for (var i = operadores.length - 1 ; i >= 0; i--) {
     string += operadores[i].toString() + " ";
   }

   return string.trim();
  } 

}

exports.Conversor = Conversor
