
const body = document.querySelector("body");
const cursor = document.querySelector("#suspect-cursor");

const enter_txt = document.querySelector(".enter-txt");

const suspect_init = document.querySelector(".suspect-init");
const suspect_people = document.querySelectorAll(".suspect-people > li");
const suspect_list = document.querySelectorAll(".suspect-list>li");
const suspect_box = document.querySelector(".suspect-box");
const prev = document.querySelector(".suspect-prevbtn");
const next = document.querySelector(".suspect-nextbtn");
const list_name = document.querySelector(".suspect-btn > p");
const back = document.querySelector(".back-btn");

window.addEventListener("load", function(){

    body.addEventListener("mousemove", function(e){
        e.preventDefault();
        const width = parseInt(window.getComputedStyle(cursor).width); 
        const height = parseInt(window.getComputedStyle(cursor).height);
        const top = e.y - height/2;
        const left = e.x - width/2;

        cursor.style.top = top + "px";
        cursor.style.left = left + "px";

    });

    body.addEventListener("mouseenter", function(e){
        const cursor = document.querySelector(".suspect-cursor");
        cursor.classList.remove("out");
    })
    body.addEventListener("mouseleave", function(e){
        const cursor = document.querySelector(".suspect-cursor");
        cursor.classList.add("out");
    })

    window.addEventListener("keydown", key, false)
    
    var keys = [];
    
    function key(e) {
        keys[e.keyCode] = true;
    
        if (keys[13]) {
            cursor.style.display = "none";
            enter_txt.classList.add("off");
            suspect_init.classList.add("active");
        }
    
    }
})

suspect_people.forEach((el, index)=>{
    suspect_people[index].addEventListener("click", ()=>{
        suspect_init.style.display = "none";
        suspect_init.classList.remove("active");
        suspect_list[index].classList.add("on");
        let txt = suspect_list[index].querySelector("h2").textContent;
        list_name.innerText = txt;
        suspect_box.classList.add("active");
    })
});

back.addEventListener("click", (e)=>{
    e.preventDefault();
    suspect_list.forEach((el)=>{
        el.classList.remove("on");
    })
    suspect_init.style.display = "flex";
    suspect_init.classList.add("active");
    suspect_box.classList.remove("active");
})


click();

function click() {

    let index = 0;
    console.log(suspect_list.length);

    prev.addEventListener("click", ()=> {

        suspect_list.forEach((el) => {
            el.classList.remove("on");
        })
    
        if(--index < 0  || index > suspect_list.length-1) {
            index = suspect_list.length - 1;
        }

        suspect_list[index].classList.add("on");

        let txt = suspect_list[index].querySelector("h2").textContent;
        list_name.innerText = txt;

        suspect_box.classList.add("active");
    })
    
    
    next.addEventListener("click", ()=> {
    
        suspect_list.forEach((el) => {
            el.classList.remove("on");
        })
    
        if(index >= 0  && index < suspect_list.length-1) {
            index++;
        }
        else {
            index = 0;
        }
    
        suspect_list[index].classList.add("on");

        let txt = suspect_list[index].querySelector("h2").textContent;
        list_name.innerText = txt;

        suspect_box.classList.add("active");
    
    })

}




