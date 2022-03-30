"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
    if (num.constructor != String) {
      return null;
    }

    return Number.parseInt(num, 2);
}
//var sum=0;
//for (let i=0;i<num.lenght; i++){
  //sum+= Math.pow (2, num.lenght-(i+1))* num[i]
  //}
  //return sum
//}
function DecimalABinario(num) {
  // tu codigo aca
  //return num.toString(2);
  //}
  
  var binary=''
while(0<num){
  binary = num %2 + binary
  num=Math.floor=(num/2)
}
return binary;
}
module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
