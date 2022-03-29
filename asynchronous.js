const printNumbersForEvery1Sec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 2000)
      }
  }
  printNumbersForEvery1Sec(5);
/*for (var i = 0; i <= 10; i++){
    print(i);
}

function print(i) {
    setTimeout(function(){
        console.log(i)
    },2000);
}*/

let arr=[ 5, 2, 1, -10, 8];
let sorted