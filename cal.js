function Calculator() {

    this.read = function() {
      this.num1 = prompt('eneter first number');
      this.num2= prompt('enter the second number');
    };
  
    this.sum =function() {
      return this.num1 + this.num2;
    };
  
    this.multiply = function() {
      return this.num1 * this.num2;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  calculator.sum();
  calculator.multiply();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.multiply() );