gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById("menu");
    const mobileNavbar = document.getElementById("mobile-navbar");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        mobileNavbar.classList.toggle("open")
    });

    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" })
        .from('.hero-desc', { y: 30, opacity: 0, duration: 1 }, "-=1")
        .from('.hero-img-box', { scale: 1.1, opacity: 0, duration: 2, ease: "power3.out" }, "-=1.5")
        .from('.location-badge', { scale: 0, rotation: -45, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=1");

    gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 90%" },
            y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
        });
    });

    gsap.utils.toArray('.reveal-img').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            scale: 1.05, opacity: 0, duration: 1.8, ease: "power2.out"
        });
    });

    gsap.from('.stagger-up', {
        scrollTrigger: { trigger: '.offering-grid', start: "top 85%" },
        y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
    });

    const video = document.getElementById('hero-video')
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
    });


});