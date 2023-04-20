let ans = 0;
let val = document.getElementById('result');
val.innerHTML = ans;
let op = "";
let num = 0;
let decide = "";

document.getElementById('add1').addEventListener('click',(e)=>{
    op="+"
    if(ans===0)
    ans=num;
    else if(ans!==0 && num===0)
    {
        ans = ans;
    }
    else
    {
        ans+=num;
        val.textContent = ans;
    }
    count = 0.1; 
    num=0;
})
document.getElementById('sub1').addEventListener('click',(e)=>{
    op="-"
    if(ans===0)
    ans=num;
    else if(ans!==0 && num===0)
    {
        ans = ans;
    }
    else
    {
        ans-=num;
        val.textContent = ans;
    }
    count = 0.1;
    num=0;
})
document.getElementById('mult1').addEventListener('click',(e)=>{
    op="*"
    if(ans===0)
    ans=num;
    else if(ans!==0 && num===0)
    {
        ans = ans;
    }
    else
    {
        ans*=num;
        val.textContent = ans;
    }
    count = 0.1;
    num=0;
})
document.getElementById('div1').addEventListener('click',(e)=>{
    op="/";
    if(ans===0)
    ans=num;
    else if(ans!==0 && num===0)
    {
        ans = ans;
    }
    else
    {
        ans/=num;
        val.textContent = ans;
    }
    count = 0.1;
    num=0;
})
document.getElementById('decimal').addEventListener('click',(e)=>{
    op=".";
})
document.getElementById('equalto').addEventListener('click',(e)=>{
    if(op==="+")
    {
        ans+=num;
        count = 0.1;
        op = "";
        num = 0;
    }
    else if(op==="*")
    {
        ans*=num;
        op = "";
        count = 0.1;
        num = 0;
    }
    else if(op==="/")
    {
        op = "";
        ans/=num;
        num = 0;
        count = 0.1;
    }
    else if(op==="-")
    {
        op = "";
        count = 0.1;
        ans-=num;
        num = 0;
    }
    val.textContent = ans;
})

document.getElementById('clear').addEventListener('click',()=>{
    ans=0;
    num = 0;
    op = "";
    val.textContent = ans;
})


let count = 0.1;

function updateans(temp)
{
    if(op===".")
    {
        num+=count*temp;
        count/=10;
    }
    else
    {
    if(op==="")
    {
        ans = 0;
    }
        count = 0.1;
        num=num*10+temp;
    }
    val.textContent = num;
}
