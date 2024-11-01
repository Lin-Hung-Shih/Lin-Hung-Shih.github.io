//幻燈片用 
let index=0;
let slides=document.getElementsByClassName("slide_show_img");

function plus(n){
    index+=n;
    if(index>3) {
        index=0;
    }
    if(index<0){
        index=3;
    }
    showslide(index);
}


function showslide(){
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[index].style.display="block";
}

function autorun(){
    plus(1);
    auto();
}

function auto(){
        setTimeout(autorun,5000);
}

// RWD navigation 用

function change(x){
    x.classList.toggle("change");
    document.getElementsByClassName("RWD_content")[0].classList.toggle("RWD_content_show");
}

function RWD_course_show(x){
    x.classList.toggle("RWD_course_show");
}

