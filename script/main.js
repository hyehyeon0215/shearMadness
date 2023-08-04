const scene1 = document.querySelector(".scene1");
const scene2 = document.querySelector(".scene2");

const scene2_scroll = scene2.offsetTop;
const base = -200;



window.addEventListener("scroll", ()=> {
    const scroll = window.scrollY || window.pageYOffset;
    if (scroll >= scene2_scroll + base) {
        scene2.classList.add("on");
        exe();
    }
    else {
        scene2.classList.remove("on");
    }
})


const typing = document.querySelector(".story-typing")
const typing_txt = "언제나 말 많고 분주한 ‘쉬어매드니스 미용실’의 일상이 뒤집히는 날! \n\
미용실 위층에서 일어난 살인사건의 용의자를 반드시 찾아야 한다!\n\n\
사건의 피해자는 미용실 위층에 살고 있던 한 사람\n\
왕년에 잘 나가던 유명 피아니스트 ‘바이엘 하’\n\n\
손님으로 가장해 잠복하고 있던 형사들은 미용실에 함께 있던 사람들을 용의자로 지목하고,\n\
관객들은 목격자이자 배심원이 되어 용의자들의 행적을 캐묻는다.\n\n\
저마다 완벽하고 치밀한 알리바이를 내세워\n\
자신을 변호하는 네 명의 인물들\n\n\
당신이 지목할 범인은 누구인가?"

let i = 0;

function typing_event(){

    if (i < typing_txt.length) {
        let txt = typing_txt[i++];
        typing.innerHTML += txt === "\n" ? "<br>": txt;
    }
}

function exe() {
    setInterval(typing_event, 200);
}

