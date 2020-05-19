const backdrop = document.querySelector('.backdrop');


const matchgamePhoto = document.querySelector('.matchgame');
const matchgameModal = document.querySelector('.works__modal--matchgame');

const uhostPhoto = document.querySelector('.uhost');
const uhostModal = document.querySelector('.works__modal--uhost');

const sedazordPhoto = document.querySelector('.sedazord');
const sedazordModal = document.querySelector('.works__modal--sedazord');


function openMatchGameModal() {
    backdrop.style.display = "block";
    matchgameModal.style.display = "flex";
}

function openUhostModal() {
    backdrop.style.display = "block";
    console.log(uhostModal)
    uhostModal.style.display = "flex";
}

function openSedazordGameModal() {
    backdrop.style.display = "block";
    sedazordModal.style.display = "flex";
}

function closeMatchGameModal() {
    backdrop.style.display = "none";
    matchgameModal.style.display = "none";
}

function closeUhostModal() {
    backdrop.style.display = "none";
    uhostModal.style.display = "none";
}

function closeSedazordModal() {
    backdrop.style.display = "none";
    sedazordModal.style.display = "none";
}

sedazordPhoto.addEventListener('click', openSedazordGameModal);
uhostPhoto.addEventListener('click', openUhostModal);
matchgamePhoto.addEventListener('click', openMatchGameModal);

backdrop.addEventListener('click', closeMatchGameModal)
backdrop.addEventListener('click', closeUhostModal)
backdrop.addEventListener('click', closeSedazordModal)

