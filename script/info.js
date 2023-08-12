//57a8f8f5d73e57cbff851e98074433b0
const date = new Date();
const today = date.getDate();
const weeks = document.querySelectorAll(".week");
const turn = document.querySelector(".turn");
const turns = document.querySelectorAll(".turn>ul");
const weekday = turn.querySelector(".weekday");
const weekend = turn.querySelector(".weekend");
const lastdays = turn.querySelector(".lastdays");
const weekday_list = weekday.querySelectorAll("li>a");
const weekend_list = weekend.querySelectorAll("li>a");
const lastdays_list = lastdays.querySelectorAll("li>a");
const turns_list = [weekday_list, weekend_list, lastdays_list];
const random_num = document.querySelector(".num");


const info_navi = document.querySelector("#info-navi > ul");
const navi_arr = info_navi.querySelectorAll("li > a");
const scroll_arr = [navi_arr[1], navi_arr[2], navi_arr[3]];
const articles = document.querySelectorAll("article");



const ticketing_btn = document.querySelectorAll('.ticketing-btn');


var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.5807835, 127.004133),
        level: 1
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = '../img/marker.svg',   
    imageSize = new kakao.maps.Size(60, 60),
    imageOption = {offset: new kakao.maps.Point(27, 69)};
      
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5807835, 127.0041332);


var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage
});


marker.setMap(map);


weeks.forEach((el)=>{
    let days = el.querySelectorAll("li > a");

    days.forEach((el, index) => {

        el.classList.remove("today");
    
        if (parseInt(el.innerHTML) == today) {
            days[index].classList.add("today");
        }
        else if (parseInt(el.innerHTML) < today) {
            days[index].style.opacity = ".1";
            days[index].style.pointerEvents = "none";
        }

        if (index == 6) {
            days[index].style.color = "red";
        }

        if (index == 0) {
            days[index].style.color = "blue";
        }

    
        el.addEventListener("click", ()=> {

            weeks.forEach((el)=>{

                let days = el.querySelectorAll("li > a");
                
                days.forEach ((el)=>{
                    el.classList.remove("today");
                })

            })

            days[index].classList.add("today");



            turns.forEach((el)=>{
                el.classList.remove("active");
            })

            if (index == 6 || index == 0) {
                weekend.classList.add("active");
            }
            else if (parseInt(el.innerHTML) == 28 || parseInt(el.innerHTML) == 29 || parseInt(el.innerHTML) == 30 || parseInt(el.innerHTML) == 31) {
                lastdays.classList.add("active");
            }
            else {
                weekday.classList.add("active");
            }

            const random = Math.random();
            random_num.textContent = Math.floor( random * 160 );
        
        })
    
    })
})



weekday_list.forEach((el)=>{
    el.addEventListener("click", ()=>{
        weekday_list.forEach((el)=>{
            el.classList.remove("active");
        })
        
        el.classList.add("active");

        const random = Math.random();
        random_num.textContent = Math.floor( random * 160 );

    })
})

weekend_list.forEach((el)=>{
    el.addEventListener("click", ()=>{
        weekend_list.forEach((el)=>{
            el.classList.remove("active");
        })
        
        el.classList.add("active");

        const random = Math.random();
        random_num.textContent = Math.floor( random * 160 );

    })
})

lastdays_list.forEach((el)=>{
    el.addEventListener("click", ()=>{
        lastdays_list.forEach((el)=>{
            el.classList.remove("active");
        })
        
        el.classList.add("active");

        const random = Math.random();
        random_num.textContent = Math.floor( random * 160 );

    })
})



ticketing_btn.forEach((el) => {
    el.innerHTML = '<div><span>' + el.textContent.trim().split('').join('</span><span>') + '</span></div>'
});




scroll_arr.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault;
        window.scrollTo({top: articles[index].offsetTop, behavior: 'smooth'});
    })
})


