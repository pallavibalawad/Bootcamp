/*function camelize(str)
{
  let strobj = str.split('');
  let camelizedstr="";
  strobj.foreach((Element, index)=>{
      if(index!=0){
          camelizedstr+= Element.charat(0).toUppercase()+Element.slice(1)
      }
      else{
          camelizedstr+=element
      }
  })
}
console.log(camelize("background- color"));

/***************task2**********/

/*let arrObject=[
{ name: "Shantanu", age: 27 },
  { name: "Vignesh", age: 24 },
  { name: "Priya", age: 24 },
  { name: "Goutham", age: 26 },
];
let obj= arrObject.map((value)=>{
    return value.name;
}) 
console.log(obj);*/

// ['Shantanu','Vignesh','Priya', 'Goutham']

/*************convert the string to array***************/
const string = 'cake';

const usingSplit = string.split('');
const usingObjectAssign = Object.assign([], string);

/*******************task3**********/
//create calcutator using constructor fuction 
//it should have calculate =calculate("2"+"3")
//cal=new Calculator()
//cal.addMethod("+",(a,b) =>a+b)

cal.addMethod("+",(a,b) =>a+b)
let calculator = new Calculator();
  calculator.read();
  calculator.sum();
  calculator.multiply();