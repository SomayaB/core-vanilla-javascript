var Hamming = function() {}

Hamming.prototype.compute = function (string1, string2) {
  var counter = 0

  if(string1.length !== string2.length) {
    throw "DNA strands must be of equal length."
  }

  for(var i = 0; i < string1.length; i++) {
    if(string1[i] !== string2[i]) {
      counter++
    }
  }
  return counter
}

module.exports = Hamming