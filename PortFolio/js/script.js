
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && to<offset+height)
        {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

/*removing tooglle*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


//multiple text
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Artist', 'Problem Setter'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username:"shitalhote2002@gmail.com",
        Password:"Pict24@2002#",
        To:'shitalhote2002@gmail.com',
        From:document.getElementById("email").value,
        Subject: "Enquiry Generated",
        Body:"Name: "+document.getElementById("name").value+
        "<br> Email: "+document.getElementById("email").value+
        "<br> Phone No: "+document.getElementById("phone").value+ 
        "<br> Message: "+document.getElementById("message").value
        }).then(
            message=>alert("Message sent successfully!!")
        );
}