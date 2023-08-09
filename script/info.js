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


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5807835, 127.004133), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = '../img/marker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(60, 60), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5807835, 127.0041332); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
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
