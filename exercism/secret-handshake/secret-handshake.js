//Keeping these comments for future reference:
//convert decimal to binary using toString method
//convert binary to decimal using parseInt method
//check for length of decimal returned
//answer minus 10, 100, 1000, 10000 depending on length
//return values for corresponding keys in legend object


module.exports = class SecretHandshake{
  constructor(num){
    if(!Number.isInteger(num)){
      throw new Error('Handshake must be a number')
    }
    this.num = num
    this.secret = []
  }


  commands(){
    console.log(this.num)
    if(this.num & 1){
      this.secret.push('wink')
    }
    if(this.num & 2){
      this.secret.push('double blink')
    }
    if(this.num & 4){
      this.secret.push('close your eyes')
    }
    if(this.num & 8){
      this.secret.push('jump')
    }
    if(this.num & 16){
      this.secret.reverse()
    }

    return this.secret
  }


}


var test = new SecretHandshake()
