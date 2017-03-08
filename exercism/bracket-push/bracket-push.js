function bracket(string) {
  // if (string === '{}') {
  //   return true
  // }
  // else {
  //   return false
  // }
  var openingBracket = '['
  var closingBracket = ']'
  var openingCurlyBrace = '{'
  var closingCurlyBrace = '}'

  if (string.includes(openingBracket) && string.includes(closingBracket) ) {
      return true
  } else {
    return false
  }
 if (string.includes(openingCurlyBrace) && string.includes(closingCurlyBrace) ) {
      return true
  } else {
    return false
  }
//if string.includes(openingBracket) then string must include closingBracket && if string includes openingCurlyBrace then string must include closingCurlyBrace, return true. Else return false.

}

// var bracket = function(element) {
//   if(element == '{}')
//     return true
//       // if(element == '}')
//       //   return
//       //     if(element == '[')
//       //       return
//       //         if(element == '[')
//       //           return


// }






module.exports = bracket
