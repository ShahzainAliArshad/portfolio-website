let btn=document.querySelector('.upper-button');
console.log(btn.innerHTML);
window.onscroll=function(){
    scrolup();
}
function scrolup()
{
    if(document.documentElement.scrollTop>20)
    {
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}
btn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
})