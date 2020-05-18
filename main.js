const footerBtn = document.querySelector('.back-to-top');
const landingBtn = document.querySelector('.button');
const aboutSection = document.getElementById('about-section');

landingBtn.addEventListener('click', smoothScrollDown);
footerBtn.addEventListener('click', smoothScrollTop);


function smoothScrollDown() {
    const targetPosition = aboutSection.offsetTop;
    goToTarget(targetPosition)
}


function smoothScrollTop() {
    const targetPosition = 0;
    goToTarget(targetPosition)
}
function goToTarget(targetPosition) {
    const startPosition = window.pageYOffset;
    console.log(startPosition);
    const distance = targetPosition - startPosition;
    const duration = 750
    let start = null;

    window.requestAnimationFrame(step)

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}