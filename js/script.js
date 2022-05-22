let body = document.querySelector('body'),
header = document.querySelector('header'),
box = document.querySelector('.box'),
aa = document.querySelector('.aa'),
bb = document.querySelector('.bb'),
cc = document.querySelector('.cc'),
navigation = document.querySelector('.navigation'),
modeSwitch = document.querySelector('.mode_switch'),
navContainer = document.querySelector('.navContainer'),
nav_link = document.querySelectorAll('.navLi');


function navClosing(){
    bb.classList.remove('bbStyle');
    aa.classList.remove('aaStyle');
    cc.classList.remove('ccStyle');
    navigation.classList.remove('isShow');
    navContainer.classList.add('navAnimation');
    // header.classList.replace('fixed-top','header_top');
    // body.classList.remove('vh-100');
}

box.addEventListener('click',()=>{
    if(navigation.classList.contains('isShow')){
       navClosing();
    }else{
        bb.classList.add('bbStyle');
        aa.classList.add('aaStyle');
        cc.classList.add('ccStyle');
        navigation.classList.add('isShow');
        navContainer.classList.remove('navAnimation');
        // header.classList.replace('header_top','fixed-top');
        // body.classList.add('vh-100');
    }
});

nav_link.forEach(x=>{
    x.addEventListener('click',navClosing)
});

// window.addEventListener('scroll',()=>{
//     if(scrollY>500){
//         header.classList.replace('header_top','fixed-top');
//     }else{
//         header.classList.replace('fixed-top','header_top');
//     }
// })


let sections = document.querySelectorAll('section');

function scrollNav(){
    
    let current = window.scrollY;
    
    sections.forEach(sec=>{
        let sectionTop = sec.offsetTop -50,
            sectionHeight = sec.offsetHeight,
            sectionId = sec.getAttribute('id');
        // console.log('Current: ', current ,'Top: ',sectionTop, 'Height: ',sectionHeight);
        if(current > sectionTop && current <= sectionTop + sectionHeight){
            // console.log(sectionId);
            document.querySelector(`.${sectionId}`).classList.add('activate');
        }else{
            document.querySelector(`.${sectionId}`).classList.remove('activate');
        }
    });
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
};



window.addEventListener('scroll',scrollNav);

modeSwitch.addEventListener('click',()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
        modeSwitch.classList.replace('fa-moon','fa-sun');
    }else{
        localStorage.setItem('theme','light');
        modeSwitch.classList.replace('fa-sun','fa-moon');
    }
});

window.addEventListener('load',()=>{
    let theme = localStorage.getItem('theme');
    if(theme==='dark'){
        body.classList.add('dark');
        modeSwitch.classList.replace('fa-moon','fa-sun');
    }else{
        body.classList.remove('dark');
        modeSwitch.classList.replace('fa-sun','fa-moon');
    }
})

            // labels
let labels = document.querySelectorAll('.labels');
let info = document.querySelectorAll('.info');

function active(id){
    info.forEach(aa=>{
        if(!aa.classList.contains('d-none')){
            aa.classList.add('d-none');
        }
    });
    let result = Array.from(info).filter(aa=>aa.classList.contains(id))[0];
    result.classList.remove('d-none');
}

labels.forEach(la=>{
    la.addEventListener('click',()=>{
        labels.forEach(y=>y.classList.remove('label_active'));
        la.classList.add('label_active');
        let id = la.getAttribute('id');
        active(id);
    })
})

// scroll Reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: false,
})

sr.reveal(`#Home`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.bottom`,{
    origin: 'bottom',
    interval: 100,
})

sr.reveal(`.left`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.right`,{
    origin: 'right',
    interval: 100,
})



// typed.js

var typed = new Typed('.auto_text',{
    strings: ['A Web Developer.','A Quick Learner.','Interested in Tech.'],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true
})





