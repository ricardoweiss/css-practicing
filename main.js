const counter = document.querySelector('.counter');
const button = document.querySelector('.button');

const startClock = () => {
    setInterval(() => {

    counter.innerHTML = "breno"

    }, 1000)

};

button.addEventListener('click', startClock);