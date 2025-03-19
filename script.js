document.addEventListener("DOMContentLoaded", function () ) {
    // Animasi saat halaman dimuat
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-text", { duration: 1, x: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".hero-image", { duration: 1, x: 50, opacity: 0, ease: "power2.out", delay: 0.5 });}