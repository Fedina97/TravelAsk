let iElems = document.querySelectorAll('i');
iElems.forEach(function (i) {
    i.addEventListener('mouseover', function (event) {
        addGoldenClass(event.target);
    });
    i.addEventListener('mouseout', function (event) {
        removeGoldenClass(event.target);
    });
});


function addGoldenClass(i) {
    i.classList.add('golden');
    let previousElem = i.previousElementSibling;
    if (previousElem !== null && previousElem.tagName === 'I') {
        return addGoldenClass(previousElem);
    }
}

function removeGoldenClass(i) {
    i.classList.remove('golden');
    let previousElem = i.previousElementSibling;
    if (previousElem !== null && previousElem.tagName === 'I') {
        return removeGoldenClass(previousElem);
    }
}


let textarea = document.querySelector('textarea');
let form = document.querySelector('.send-new');
let btn = document.querySelector('.send');
let message = document.querySelector('.message-block');

//время отправки с нулями

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;

let time = "" + hours + "." + minutes;

//отправка сообщения

form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.insertAdjacentHTML('beforeend',
        `<div class="message">
                <div class="blue-fon">
                    <img src="./img/girl.png" alt="">
                    <div class="text-message">${textarea.value}</div> 
                    <div class = "time-sending">${time}</div>
                </div>
            </div>`
    );
    let newMsg = document.querySelector('.blue-fon');
    setTimeout(function () {
        newMsg.classList.remove('blue-fon');
        newMsg.classList.add('gray-fon');
    }, 2000);

    textarea.value = '';
});