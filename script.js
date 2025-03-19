document.addEventListener("DOMContentLoaded", function () {
    // Animasi saat halaman dimuat
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-text", { duration: 1, x: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".hero-image", { duration: 1, x: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

    // Animasi saat scrolling
    const sections = document.querySelectorAll(".about-section, .extra-info, .skills-section, .soft-skill-proof, .project-grid, .contact-section");

    const scrollAnimation = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(scrollAnimation, { threshold: 0.2 });

    sections.forEach((section) => {
        gsap.set(section, { opacity: 0, y: 50 });
        observer.observe(section);
    });

    // Efek hover pada proyek
    document.querySelectorAll(".project").forEach((project) => {
        project.addEventListener("mouseenter", () => {
            gsap.to(project, { scale: 1.05, duration: 0.3 });
        });

        project.addEventListener("mouseleave", () => {
            gsap.to(project, { scale: 1, duration: 0.3 });
        });
    });
});
