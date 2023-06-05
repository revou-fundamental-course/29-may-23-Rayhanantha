var prevScrollpos = document.documentElement.scrollTop;

window.onscroll = () => {
    const currentScrollpos = document.documentElement.scrollTop;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollpos;
}

// let person = prompt("What is your name:", "User")
const nickname = document.getElementById("nickname");
nickname.innerHTML = person;

let item = document.querySelector('#revou-spin')

item.addEventListener('mouseover', () => {
    item.classList.add('spin-active')
})