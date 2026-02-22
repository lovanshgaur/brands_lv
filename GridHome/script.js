const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
const mainNav = document.getElementById('main-nav');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
});

let menuOpen = false;
menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (menuOpen) {
        gsap.to('.mobile-nav a', { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power4.out", delay: 0.3 });
        document.body.style.overflow = 'hidden';
    } else {
        gsap.set('.mobile-nav a', { opacity: 0, y: 30 });
        document.body.style.overflow = 'auto';
    }
});

function closeMenu() {
    menuOpen = false;
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
    gsap.set('.mobile-nav a', { opacity: 0, y: 30 });
    document.body.style.overflow = 'auto';
}

function initCursor() {
    if (!isTouch && window.innerWidth > 1024) {
        cursor.style.display = 'block';
        follower.style.display = 'block';

        let mX = 0, mY = 0, fX = 0, fY = 0;

        window.addEventListener('mousemove', (e) => {
            mX = e.clientX;
            mY = e.clientY;
            gsap.set(cursor, { x: mX, y: mY });
        });

        const loop = () => {
            fX += (mX - fX) * 0.15;
            fY += (mY - fY) * 0.15;
            gsap.set(follower, { x: fX, y: fY });
            requestAnimationFrame(loop);
        };
        loop();

        document.querySelectorAll('a, button, .cat-box, .mat-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, { scale: 1.8, backgroundColor: 'rgba(74, 61, 46, 0.1)', duration: 0.3 });
                gsap.to(cursor, { scale: 0.5, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
                gsap.to(cursor, { scale: 1, duration: 0.3 });
            });
        });
    } else {
        cursor.style.display = 'none';
        follower.style.display = 'none';
    }
}

gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
    initCursor();

    const tl = gsap.timeline();
    tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" })
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
        .to('.btn-group', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

    gsap.utils.toArray('.reveal').forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });
    });
};

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
    initCursor();
    if (window.innerWidth > 1024 && menuOpen) closeMenu();
});