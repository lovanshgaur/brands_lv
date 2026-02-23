lucide.createIcons();

gsap.registerPlugin(ScrollTrigger);

// Cursor 
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(follower, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.15 });
  });

  document.querySelectorAll('a, button, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(255, 46, 46, 0.2)' });
      gsap.to(follower, { scale: 1.5, borderColor: 'var(--primary)' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'var(--primary)' });
      gsap.to(follower, { scale: 1, borderColor: 'rgba(255, 46, 46, 0.3)' });
    });
  });
}

// Reveal 
const reveals = document.querySelectorAll('.reveal');
reveals.forEach((el, i) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: i % 3 * 0.1 
  });
});

// nav
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    const nav = document.getElementById('navbar');
    if (self.direction === 1) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
  }
});

