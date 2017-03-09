function bracket(str){
var paren = ['(', ')']
var curly = ['{','}']
var square = ['[',']']
var closings = [')', '}', ']']

var arr = str.split('')
var stack = []

  for( var i in arr ){
    if( closings.includes( arr[i] ) ){
    var type = check( arr[i] )
      if( check(stack.pop()) !== type ){
        return false
      }
    }else{
      stack.push( arr[i] )
    }
  }

  function check(element){
    if( paren.includes(element) ){
      return 'paren'
    }else if( curly.includes(element) ){
      return 'curly'
    }else if( square.includes(element) ){
      return 'square'
    }else{
      return false
    }
  }
  if( stack.length > 0 ) return false
  return true
}



// var bracket_pairs = {
//   "{": "}",
//   "[":"]",
//   "(":")"
// };

// function bracket(brackets) {
//   /* checks that bracket syntax is correct */
//   var stack = [];
//   for( var i = 0; i < brackets.length; i++) {
//     var character = brackets[i];
//     if( bracket_pairs.hasOwnProperty(character) ) {
//       stack.push(bracket_pairs[character]);
//       console.log(bracket_pairs[character]);
//     } else if( stack.length !== 0 && stack[stack.length - 1] === character) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };







module.exports = bracket
