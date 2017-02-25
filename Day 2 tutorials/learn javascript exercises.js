//OBJECTS
//Hello,object
var user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Check for emptiness
function isEmpty(obj){
  for(let key in obj){
    return false;
  }
    return true;
}

//Constant objects?
const user = {
  name: "John"
};
user.name = "Pete";
//It works.

//Sum object properties
var sum = 0;
for(var key in salaries) {
  sum += salaries[key];
}
alert(sum);

//Multiply numeric properties by 2
function multiplyNumeric(obj){
  //for keys check if numbers
  //if yes multiply forEach by 2
  //return object
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

//ARRAYS
//Is array copied?
4

//Array Operations
var styles = ["jazz", "Blues"];
styles.push("Rock-n-Roll");
/*??*/[(styles.length + 1)] / 2] = "Classics";
/*??*/alert(styles.shift[0]);
syles.unshift("Rap", "Reggie");


//Calling in an array context
"a", "b", function


//Sum input numbers ????
function sumInput() {
  let numbers = [];
  //???
  numbers.push();
}

//A maximal subarray ????
function getMaxSubSUm(arr) {


}
