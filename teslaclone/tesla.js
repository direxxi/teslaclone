const navlist = document.querySelector('.navlist');

window.addEventListener('scroll', () => {
    navlist.classList.toggle('sticky', window.scrollY > 0);
})
const sr = ScrollReveal ({
    distance: '45px',
    duration : 2700,
    reset: true
})

sr.reveal('.title1, .title2, .title3, .title4, .title5, .title6, .title7', {delay: 350, origin:"right"})
