const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
// const burger = document.querySelector(".close");
 menu.addEventListener('click',(e)=>{

    if(menu.classList.contains('md:hidden')){
        menu.classList.remove('hidden');
        menu.classList.remove('md:hidden');
        burger.classList.remove('hidden');
   
    }
    else{
        menu.classList.add('hidden');
        menu.classList.remove('md:hidden');
        burger.classList.remove('hidden');
    }
    console.log( menu.classList)
    console.log("dfgsfd")
 })

 