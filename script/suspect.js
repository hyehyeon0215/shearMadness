
const cursor = document.querySelector(".suspect_cursor");
const body = document.querySelector("body");
const enter_p = document.querySelector(".enter");
const click_p = document.querySelector(".click");
const sign = document.querySelector(".sign");



window.addEventListener("load", function(){

    body.addEventListener("mousemove", function(e){
        e.preventDefault();

        const cursor = document.querySelector(".suspect_cursor")
        const width = parseInt(window.getComputedStyle(cursor).width); 
        const height = parseInt(window.getComputedStyle(cursor).height);
        const top = e.y - height/2;
        const left = e.x - width/2;

        cursor.style.top = top + "px";
        cursor.style.left = left + "px";

    });

    body.addEventListener("mouseenter", function(e){
        const cursor = document.querySelector(".suspect_cursor");
        cursor.classList.remove("out");
    })
    body.addEventListener("mouseleave", function(e){
        const cursor = document.querySelector(".suspect_cursor");
        cursor.classList.add("out");
    })

    window.addEventListener("keydown", key, false)
    
    var keys = [];
    
    function key(e) {
        keys[e.keyCode] = true;
    
        if (keys[13]) {
            cursor.style.display = "none";
            enter_p.style.display = "none";
            click_p.style.display = "block";
            sign.style.display = "flex";
        }
    
    }
})


