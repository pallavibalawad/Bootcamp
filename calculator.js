let calculator={
    num1:0,
    num2:0,

read:function(){
    this.num1=prompt('eneter the number');
    this.num2=prompt('enter the second number');
            },
add:function(){
    let addition=this.num1+this.num2;
    console.log('sum of two number is'+addition);
    console.log(this.num1,this.num2);
           },
multiply:function(){
    let multiplication=this.num1+this.num2;
    console.log('multiplications of two number is'+addition);
           },

}
               
calculator.read();
calculator.add();
calculator.multiply();
