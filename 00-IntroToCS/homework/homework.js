"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
    if (num.constructor != String) {
      return null;
    }

    return Number.parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
  
  return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
