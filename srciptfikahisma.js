// ==========================
//  INISIALISASI ANIMASI AOS
// ==========================
AOS.init({
    duration: 1000,
    once: true
});

// ==========================
//  SISTEM MODAL SERTIFIKAT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const certCards = document.querySelectorAll(".cert-clickable");
    const certModal = document.getElementById("certModal");
    const imgModalTarget = document.getElementById("imgModalTarget");
    const modalClose = document.querySelector(".modal-close");

    if (certCards.length > 0 && certModal && imgModalTarget) {
        certCards.forEach(card => {
            card.addEventListener("click", () => {
                const imgSrc = card.getAttribute("data-src");
                imgModalTarget.setAttribute("src", imgSrc);
                certModal.classList.add("show");
            });
        });
    }

    if (modalClose && certModal) {
        modalClose.addEventListener("click", () => {
            certModal.classList.remove("show");
        });

        certModal.addEventListener("click", (e) => {
            if (e.target === certModal) {
                certModal.classList.remove("show");
            }
        });
    }
});

// ==========================
//  FITUR TEMA GELAP 
// ==========================
const darkModeBtn = document.getElementById("darkMode");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (darkModeBtn) {
        const icon = darkModeBtn.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}

// ==========================
//  TOMBOL KEMBALI KE ATAS
// ==========================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
//  PELACAK MENU AKTIF 
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});

// ==========================
//  ANIMASI BAR KEAHLIAN 
// ==========================
const skillSection = document.querySelector("#skill");

if (skillSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector(".html").style.width = "85%";
                document.querySelector(".css").style.width = "85%";
                document.querySelector(".js").style.width = "75%";
                document.querySelector(".mysql").style.width = "90%";
                document.querySelector(".figma").style.width = "85%";
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillSection);
}

// ==========================
//  ANIMASI ANGKA STATISTIK 
// ==========================
const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = parseInt(counter.innerText);
        const current = +counter.getAttribute("data-count") || 0;
        const increment = Math.ceil(target / 40);

        if (current < target) {
            const next = current + increment;
            counter.setAttribute("data-count", next > target ? target : next);
            counter.innerText = (next > target ? target : next) + "+";
            setTimeout(updateCounter, 40);
        } else {
            counter.innerText = target + "+";
        }
    };
    updateCounter();
});