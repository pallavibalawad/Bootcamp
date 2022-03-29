//task 3
let pageInfo = {
    width: 500,
    height: 800,
    title: 'My page'
}
let total_sum=0;
for(let amount in pageInfo)
{
    if(typeof pageInfo[amount]=='num')
    {
        pageInfo[amount]*=2;
    }
    console.log('total amount :',total_sum);
    console.log(pageInfo);
}