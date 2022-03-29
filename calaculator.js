 let calculator={
     num1:0, 
     num2:0,

read: ()=>{
    num1=prompt('Enter first number');
    num2=prompt('Enter first number');
    console.log(num1,':',num2);
     },
add: ()=>{
console.log(num1+num2);
        },
multiply: ()=>{
    console.log(num1*num2);
        }
 }//cre obj
 calculator.read();//fun call
 calculator.add();
 calculator.multiply();
 
