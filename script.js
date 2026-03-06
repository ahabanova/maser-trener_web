// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu when clicking on a link
if (navLinks) {
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Active section highlighting in nav
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (
    sections.length &&
    navAnchors.length &&
    window.location.pathname.endsWith("index.html")
) {
    const setActiveLink = (id) => {
        navAnchors.forEach((link) => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`,
            );
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        {
            rootMargin: "-40% 0px -55% 0px", // sekce se označí, když je ve středu viewportu
            threshold: 0,
        },
    );

    sections.forEach((section) => observer.observe(section));
}
