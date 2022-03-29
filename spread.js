//write a fuction to merge the two array
//mergeArrays([1,2,3], [3,4,5]) => [1,2,3,4,5]
/******const arr1=[1,2,3];
const arr2=[2,4,5];
const mergerray =(arr1=[], arr2=[])=>
    {
        let result=[];
        while(arr1.length&& arr2.length){
        const next=(arr1[0]<arr2[0])?arr1.shift():arr2.shift();
        result.push(next);

    }
    if(arr1.length)
    {
     result=result.concate(arr1);   
    }
    else if( arr2.lenth){
        result=result.concate(arr2);
    }
       return result; 
    }; ****/
    //write a fuction to merge the two array
//mergeArrays([1,2,3], [3,4,5]) => [1,2,3,4,5]

/***const arr1=[1,2,3];
const arr2=[2,4,5];
const merged= [...arr1,...arr1.arr2];
console.log(merged);**/

/***Batton.onmouseover= function callmouseover(a)
{
    console.log(a);
    batton.style.background="red";
};**/
/**<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
//How to access <div>, <ul>, <li></li>***/

<script type="text/javascript">

var MyDiv1 = Document.getElementById('DIV1');
var MyDiv2 = Document.getElementById('Div2');
MyDiv2.innerHTML = MyDiv2; 

</script>
<body>
<div id="DIV1">
// Some content goes here.
</div>

<div id="DIV2">
</div>
</body>