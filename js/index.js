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


const nickname = document.getElementById("nickname");

var fullname = document.querySelector('#name')
var dateBirth = document.querySelector('#birth-date')
var gender = document.querySelector('input[name="gender"]:checked').value
var message = document.querySelector('#message')
const submitBtn = document.querySelector('#submit-btn')

var sentCurrentTime = document.querySelector('.message-sent #current-time')
var sentFullname = document.querySelector('.message-sent #fullname')
var sentDateBirth = document.querySelector('.message-sent #birth-date')
var sentGender = document.querySelector('.message-sent #gender')
var sentMessage = document.querySelector('.message-sent #message')

submitBtn.addEventListener('click', () => {
    sentCurrentTime.innerHTML = "Current Time :"
    sentFullname.innerHTML = "Nama :"
    sentDateBirth.innerHTML = "Tanggal Lahir :"
    sentGender.innerHTML = "Jenis Kelamin :"
    sentMessage.innerHTML = "Pesan :"
    nickname.innerHTML = fullname.value

    var date = new Date()
    sentCurrentTime.textContent += ` ${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear() + 0} | 
    ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    sentFullname.innerHTML += " " + fullname.value
    sentDateBirth.innerHTML += " " + dateBirth.value
    sentGender.innerHTML += " " + gender
    sentMessage.innerHTML += " " + message.value
})

const dateToday = document.querySelector("#birth-date")
dateToday.value = formatDate()

console.log(formatDate());

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth()),
        padTo2Digits(date.getDate()),
    ].join('-');
}
