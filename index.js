function scroll(){

let scrollslider =document.querySelector(".scroll-slider")
let list = document.querySelector(".scroll-list") 
let item = document.querySelector(".scroll-item")
let list2

const speed= 1

const width= list.offsetWidth

let x = 0 
let x2 = width

function clone(){ 
    list2 =list.cloneNode(true)
    scrollslider.appendChild(list2)
    list2.style.left= `${width}px`

}
function movefirst(){
    x-=speed
    if (width >=Math.abs(x)){
        list.style.left=`${x}px`
    }else{
        x=width
    }
}
function moveSecond(){
    x2-=speed
    if(list.affsetwidth>=Math.abs(x2)){
        list2.style.left=`${x2}px`
    }else{
        x2=width
    }
}
function hover(){
    clearInterval(a)
    clearInterval(b)
}
function unhover(){
    a = setInterval(movefirst,10)
    b = clearInterval(moveSecond,10)
}
clone()
let a = setInterval(movefirst,40)
let b = clearInterval(moveSecond,10)

scrollslider.addEventListener("mouseenter",hover)
scrollslider.addEventListener("mouseenter", unhover)

}
scroll()