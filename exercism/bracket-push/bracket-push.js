function bracket(str){
var paren = ['(', ')']
var curly = ['{','}']
var square = ['[',']']
var closings = [')', '}', ']']

var arr = str.split('') //['{','}']
var openingBracketsArr = []

  for( var i in arr ){
    if( closings.includes( arr[i] ) ){
    var bracketType = check( arr[i] )
      if( check(openingBracketsArr.pop()) !== bracketType ){
        return false
      }
    }else{
      openingBracketsArr.push( arr[i] )
    }
  }

  function check(element){
    if( paren.includes(element) ){
      return 'Im a paren' //why in quotes?
    }else if( curly.includes(element) ){
      return 'Im a curly'
    }else if( square.includes(element) ){
      return 'Im a square'
    }else{
      return false
    }
  }

  if( openingBracketsArr.length > 0 ) return false
   return true
}




module.exports = bracket
