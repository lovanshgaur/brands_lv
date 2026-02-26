const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled')
    }
    else {
        nav.classList.remove('scrolled')
    }
})

const left = document.getElementById('left');
const right = document.getElementById('right');
const testimonials = document.querySelectorAll('.testimonial');

let index = 0;

function updateTestimonials() {
    testimonials.forEach((item, i) => {
        item.classList.remove('active', 'prev');

        if (i === index) {
            item.classList.add('active');
        }
        else if (i === index - 1) {
            item.classList.add('prev');
        }
    });
}

right.addEventListener('click', () => {
    index++;
    if (index >= testimonials.length) index = 0;
    updateTestimonials();
});

left.addEventListener('click', () => {
    index--;
    if (index < 0) index = testimonials.length - 1;
    updateTestimonials();
});

updateTestimonials();


gsap.registerPlugin(ScrollTrigger);

gsap.from(".cta-inner", {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta",
        start: "top 75%",
    }
});
