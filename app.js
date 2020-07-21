const spans=document.querySelectorAll('.name');
spans.forEach(span=> span.addEventListener('mouseover',function(e){
    span.classList.add('animated')

    setTimeout(function(){
        span.classList.remove('animated');
    },1200);
    

    
    
}));
spans.forEach(span=> span.addEventListener('click',function(e){
    span.classList.add('animated')

    setTimeout(function(){
        span.classList.remove('animated');
    },1200);
    

    
    
}));


const filterbuttons=document.querySelector('#filter-btns').children;
const items=document.querySelector('.portfolio-gallery').children;

for(let i=0;i<filterbuttons.length;i++){
    filterbuttons[i].addEventListener('click',function(){
        for(let j=0;j<filterbuttons.length;j++){
            filterbuttons[j].classList.remove('active');
        }
        this.classList.add('active');
        const target=this.getAttribute('data-target');
        for(let k=0;k<items.length;k++){
            items[k].style.display='none';
            if(target==items[k].getAttribute('data-id')){
                items[k].style.display='block';
            }
            if(target=='all'){
                items[k].style.display='block';
            }
        }
    })
}


const closelightbox=document.querySelector('.close-lightbox');
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox.querySelector('img');

closelightbox.addEventListener('click',function(){
    lightbox.classList.remove('show');
    lightbox.classList.add('hide');
    items.classList.add('disable');
})

const gallery=document.querySelector('.portfolio-gallery');
const galleryItem=gallery.querySelectorAll('.item');

galleryItem.forEach(function(e){
    e.querySelector('.fa-plus').addEventListener('click',function(){
        lightbox.classList.remove('hide');
        lightbox.classList.add('show');
        lightboxImage.src=e.querySelector('img').getAttribute('src');
        items.classList.remove('disable');
    })
})

//testimonial slider
const sliderContent=document.querySelector('.testi-slider');
const slides=sliderContent.children;
const containerWidth=sliderContent.offsetWidth;
const margin=30;
let itemsPerSlide=0;
let slideDots;
//responsive
const responsive=[
    {breakpoint:{width:0,item:1}},
    {breakpoint:{width:991,item:2}}
]

function load(){
    for(let i=0;i<responsive.length;i++){
        if(window.innerWidth>responsive[i].breakpoint.width){
            itemsPerSlide=responsive[i].breakpoint.item;
        }
    }
    start();
}

function start(){
    totalWidth=0;
    for(let i=0;i<slides.length;i++){
        slides[i].style.width=(containerWidth/itemsPerSlide)-margin +'px';
        slides[i].style.margin=margin/2 +'px';
        totalWidth+=containerWidth/itemsPerSlide;
    }

    sliderContent.style.width=totalWidth+'px';

   slideDots=Math.ceil(slides.length/itemsPerSlide);

    for(let i=0;i<slideDots;i++){
        const div=document.createElement('div');
        div.id=i;
        div.setAttribute('onclick','controlSlide(this)');
        if(i==0){
            div.classList.add('active');
        }
        document.querySelector('.slide-controls').appendChild(div);
    }

}

let currentSlide=0;
let autoslide=0;

function controlSlide(e){
    clearInterval(timer);
    timer=setInterval(autoPlay,4000);
    autoslide=e.id;
    currentSlide=e.id;
    changeSlide(currentSlide);
}

function changeSlide(currentSlide){
    controlButtons=document.querySelector('.slide-controls').children;
    for(let i=0;i<controlButtons.length;i++){
            controlButtons[i].classList.remove('active');
        }
            controlButtons[currentSlide].classList.add('active');
            sliderContent.style.marginLeft=-(containerWidth*currentSlide)+'px';
        
    }

function autoPlay(){
    if(autoslide==slideDots-1){
        autoslide=0;
    }
    else{
        autoslide++;
    }
    changeSlide(autoslide);
}

let timer=setInterval(autoPlay,4000);


window.onload=load();

//fixed navbar

// window.onscroll=function(){
//     const docScrollTop=document.documentElement.scrollTop;

//     if(window.innerWidth>991){
//         if(docScrollTop>100){
//             document.querySelector('header').classList.add('fixed');
//         }
//         else{
//             document.querySelector('header').classList.remove('fixed');
//         }
//     }
// }

//hamburger

const hamBurger=document.querySelector('.ham-burger');
hamBurger.addEventListener('click',function(){
    document.querySelector('header').classList.toggle('showcolor');
    document.querySelector('.navbar').classList.toggle('show');
})


const options={
    bottom: '40px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '34px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true ,// default: true
    
}

const darkmode = new Darkmode(options);
darkmode.showWidget();




let mousecursor=document.querySelector('.cursor');

window.addEventListener('mousemove',cursor);

function cursor(e){
     mousecursor.style.top=e.clientY+'px';
     mousecursor.style.left=e.clientX+'px';
    // var x=e.clientX;
    // var y=e.clientY;
    // cursor.style.left=x+'px';
    // cursor.style.top=y+'px';
}


function change(){
    var h3=document.querySelector('h3');
    if(h3.style.color=='#ffffff'){
        h3.innerHTML=='<h3>Programmer</h3>'
    }
}








