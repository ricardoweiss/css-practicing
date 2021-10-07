// Works modal -->

const backdrop = document.querySelector('.backdrop');

// const worksCloseButtons = document.querySelectorAll('.button-close');
// const worksPhotos = document.querySelectorAll('.works__photo');
// const worksModal = document.querySelectorAll('.works__modal');


function openModal(modal) {
    backdrop.style.display = "block";
    modal.style.display = "flex";
}

function closeModal(modal) {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

// // Open works modal's event listener
// for (let i = 0; i < worksPhotos.length; i++) {
//     worksPhotos[i].addEventListener('click', openModal.bind(null, worksModal[i]))
//     console.log('entrou 1');
// }
//
// // Close works modal's button event listener
// for (let i = 0; i < worksCloseButtons.length; i++) {
//     worksCloseButtons[i].addEventListener('click', closeModal.bind(null, worksModal[i]))
//     console.log('entrou 2');
//
// }
//
// // Close works modal blackdrop event listener
// for (let i = 0; i < worksModal.length; i++) {
//     backdrop.addEventListener('click', closeModal.bind(null, worksModal[i]))
//     console.log('entrou 3');
//
// }


// Certificates modal -->
const certificatesCloseButtons = document.querySelectorAll('.button-close-certificate');
const certificateModals = document.querySelectorAll('.certificates__modal');
const certificatePhotos = document.querySelectorAll('.certificates__photo');

// Close certificate modal's backdrop event listener
for (let i = 0; i < certificateModals.length; i++) {
    backdrop.addEventListener('click', closeModal.bind(null, certificateModals[i]));
}

// Close certificate modal's button event listener
for (let i = 0; i < certificatesCloseButtons.length; i++) {
    certificatesCloseButtons[i].addEventListener('click', closeModal.bind(null, certificateModals[i]))
}

// Open certificate modal's event listener
for (let i = 0; i < certificatePhotos.length; i++) {
    certificatePhotos[i].addEventListener('click', openModal.bind(null, certificateModals[i]))
}





