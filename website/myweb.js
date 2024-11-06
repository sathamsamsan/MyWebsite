/**  SCROLL ACTION*/
document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});




/**  SCROLL ACTION*/


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })  
        }
    });

    /* STICKEY NAVBAR*/ 

    let header= document.querySelectorAll('header');

    header.classList.toggle('sticky',window.scrollY > 100);

}
/* SCROLL REVEAL*/   // WORK
ScrollReveal({
     reset: true ,
     distance:'80px',
     duration :2000,
     delay:200
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.header', { origin: 'top' });
    ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form', {
         origin: 'bottom' });
         
    ScrollReveal().reveal('.home-content h1,.about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
    ScrollReveal().reveal(".skills_main", { origin: 'bottom' });
    

    /**TYPED JS**/ 

    const typed=new Typed('.multiple-text',{
        strings:['Frontend Developer','Web Developer','Angular Developer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })

         /**SKILLS**COUNT NUMBERS*/ 


        // let reload=document.querySelector("skill_bar")
        // reload.window.reload

         let number=document.getElementById("html");
        let count=0
        setInterval(()=>{
            if(count==90){
                clearInterval()
            }
            else{
                count+=1
                number.innerHTML=count+"%"
                
            }
        },30)


        let css=document.getElementById("css");
        let countcss=0
        setInterval(()=>{
            if(countcss==80){
                clearInterval()
            }
            else{
                countcss+=1
                css.innerHTML=countcss+"%"
                
            }
        },28)


        let js=document.getElementById("js");
        let countjs=0
        setInterval(()=>{
            if(countjs==75){
                clearInterval()
            }
            else{
                countjs+=1
                js.innerHTML=countjs+"%"
                
            }
        },32)


        let Angular=document.getElementById("angular");
        let countangulr=0
        setInterval(()=>{
            if(countangulr==75){
                clearInterval()
            }
            else{
                countangulr+=1
                Angular.innerHTML=countangulr+"%"
               
            }
        },32)

    
       
    