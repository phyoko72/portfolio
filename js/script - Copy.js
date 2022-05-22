let box = document.querySelector('.box'),
aa = document.querySelector('.aa'),
bb = document.querySelector('.bb'),
cc = document.querySelector('.cc'),
navigation = document.querySelector('.navigation'),
modeSwitch = document.querySelector('.mode_switch'),
navContainer = document.querySelector('.navContainer');

box.addEventListener('click',()=>{
    if(navigation.classList.contains('isShow')){
        bb.classList.remove('bbStyle');
        aa.classList.remove('aaStyle');
        cc.classList.remove('ccStyle');
        navigation.classList.remove('isShow');
        navContainer.classList.add('navAnimation');
    }else{
        bb.classList.add('bbStyle');
        aa.classList.add('aaStyle');
        cc.classList.add('ccStyle');
        navigation.classList.add('isShow');
        navContainer.classList.remove('navAnimation');
    }
});


let sections = document.querySelectorAll('section');

function scrollNav(){
    
    let current = window.scrollY;
    
    sections.forEach(sec=>{
        let sectionTop = sec.offsetTop -50,
            sectionHeight = sec.offsetHeight,
            sectionId = sec.getAttribute('id');
        console.log('Current: ', current ,'Top: ',sectionTop, 'Height: ',sectionHeight);
        if(current > sectionTop && current <= sectionTop + sectionHeight){
            console.log(sectionId);
            document.querySelector(`.${sectionId}`).classList.add('activate');
        }else{
            document.querySelector(`.${sectionId}`).classList.remove('activate');
        }
    });
};

window.addEventListener('scroll',scrollNav);
// window.addEventListener('load',scrollNav);

modeSwitch.addEventListener('click',()=>{
    navigation.classList.toggle('dark_mode');
    if(navigation.classList.contains('dark_mode')){
        modeSwitch.textContent = 'On'
    }else{
        modeSwitch.textContent = 'Off';
    }
});

let colorful = document.querySelectorAll('.colorful'),
    navy = document.querySelector('.navy'),
    rebe = document.querySelector('.rebe');

colorful.forEach(cc=>{
    cc.addEventListener('click',()=>{
        if(navigation.classList.contains('coloring')){
            navigation.classList.remove('coloring');
            console.log('Remove Coloring Class');
        }   
        
        // let color = cc.classList[0];
        let color = getComputedStyle(cc).backgroundColor;
        
        // console.log(cc.classList[0]);
        // navigation.classList.add(`${color}`);
        navigation.classList.add('coloring');

        function coloringMode(x){
            document.querySelector('.coloring').style.background = x;
        }
        coloringMode(color);

        
        
        // switch (color) {
        //     case 'navy':
        //         document.querySelector('.coloring').style.background = 'navy';
        //         break;
        //     case 'rebe':
        //         document.querySelector('.coloring').style.background = '#663399';
        //     default:
        //         break;
        // }

        // document.querySelector('.coloring').style.background = 'navy'
    })

})

let colorMode = document.querySelector('.colorMode');
let hide = document.querySelector('.hideColorful');

colorMode.addEventListener('click',()=>{
    hide.style.right = '0%'
})


