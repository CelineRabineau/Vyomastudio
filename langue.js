let currentLang = localStorage.getItem('lang') || 'fr';

const toggleBtn = document.getElementById('langToggle');

function applyLanguage(lang) {

    document.querySelectorAll('[data-fr]').forEach(el => {

        const value = el.dataset[lang];
        if (!value) return;

        if (el.tagName === 'IMG') {
            el.src = value;
            return;
        }

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
            return;
        }

        el.innerHTML = value.replace(/\n/g, '<br>');
    });

    document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
        const value = lang === 'fr'
            ? el.getAttribute('data-fr-placeholder')
            : el.getAttribute('data-en-placeholder');

        if (value) el.placeholder = value;
    });

    if (toggleBtn) {
        toggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    document.documentElement.lang = lang;
}

/* ----------------------------
INIT LANGUAGE
---------------------------- */
applyLanguage(currentLang);

/* ----------------------------
TOGGLE LANGUAGE
---------------------------- */
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        applyLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
    });
}

/* ----------------------------
BURGER MENU
---------------------------- */
const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Langue du site (à adapter selon ton système)
let lang = document.documentElement.lang || "fr"; // ex: "fr" ou "en"

// Mapping des fichiers PDF
const pdfLinks = {
    cgv: {
        fr: "assets/pdf/cgv-fr.pdf",
        en: "assets/pdf/cgv-en.pdf"
    },
    privacy: {
        fr: "assets/pdf/politique-confidentialite-fr.pdf",
        en: "assets/pdf/politique-confidentialite-en.pdf"
    },
    legal: {
        fr: "assets/pdf/mentions-legale-fr.pdf",
        en: "assets/pdf/mentions-legale-en.pdf"
    }
};

// Ajout des événements
document.querySelectorAll(".footer-center button").forEach(button => {
    button.addEventListener("click", () => {
        const type = button.dataset.type;

        const pdfUrl = pdfLinks[type][lang] || pdfLinks[type]["fr"];

        // Ouvre dans un nouvel onglet
        window.open(pdfUrl, "_blank");
    });
});



