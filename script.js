/* =========================================
   VIDEO EDITOR PORTFOLIO
   script.js
========================================= */

const projects = [

    {
        title: "Subhash Chandra Bose : A Freedom fighter who never dies ",
        description:
            "Long-form documentary video edited with storytelling-focused pacing, visual transitions and supporting elements.",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/zQ9IqMjmQIs",
        watch: "https://www.youtube.com/watch?v=zQ9IqMjmQIs"
    },

    {
        title: "Major Iqbal : The Real Terror Behind Dhurandhar 😱| Ilyas Kashmiri Dark Truth Explained",
        description:
            "Documentary-style video edit focused on storytelling, pacing and engaging visual presentation.",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/U5wJ2SUCbuA",
        watch: "https://www.youtube.com/watch?v=U5wJ2SUCbuA"
    },

    {
        title: "Babur - From Local King to Mughal emperor | Mughal Invasion in India| Babur History |",
        description:
            "Story-driven documentary edit with structured pacing, visuals and cinematic presentation.",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/5UEAGTxqO4E",
        watch: "https://www.youtube.com/watch?v=5UEAGTxqO4E"
    },

    {
        title: "Motion Graphics Reel",
        description:
            "Short-form motion graphics video with animated elements, typography and dynamic visual transitions.",
        category: "MOTION GRAPHICS",
        video: "https://www.youtube.com/embed/48kstnTzGY0",
        watch: "https://www.youtube.com/watch?v=48kstnTzGY0"
    },

    {
        title: "India's Richest State",
        description:
            "Short-form informational video combining motion graphics, text animation, visual storytelling and engaging pacing.",
        category: "MOTION GRAPHICS",
        video: "https://www.youtube.com/embed/XLq98KyYgfk",
        watch: "https://www.youtube.com/watch?v=XLq98KyYgfk"
    },

    {
        title: "Dark Reality - Drug in India",
        description:
            "Podcast-style short video edited with engaging pacing, captions, visual elements and social-media focused presentation.",
        category: "PODCAST / SHORT",
        video: "https://www.youtube.com/embed/3GD_wHUYo-w",
        watch: "https://www.youtube.com/watch?v=3GD_wHUYo-w"
    }

];


/* =========================================
   SERVICES
========================================= */

const services = [

    {
        number: "01",
        title: "YouTube Video Editing",
        description:
            "Long-form YouTube videos with strong pacing, storytelling, B-roll, sound design and clean visuals."
    },

    {
        number: "02",
        title: "Shorts & Reels",
        description:
            "Engaging short-form content optimized for Instagram Reels and YouTube Shorts."
    },

    {
        number: "03",
        title: "Explainer Videos",
        description:
            "Clear and engaging explainer videos using motion graphics, visual storytelling and structured editing."
    },

    {
        number: "04",
        title: "Documentary Editing",
        description:
            "Story-focused documentary editing with cinematic pacing, sound design and visual continuity."
    },

    {
        number: "05",
        title: "Motion Graphics",
        description:
            "Clean motion graphics, text animations and visual elements that make information easier to understand."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const portfolioGrid =
    document.getElementById("portfolioGrid");

const servicesList =
    document.getElementById("servicesList");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const siteHeader =
    document.getElementById("siteHeader");

const pageLoader =
    document.getElementById("pageLoader");

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");


/* =========================================
   GET YOUTUBE VIDEO ID
========================================= */

function getYouTubeID(url) {

    if (!url) return null;

    const patterns = [
        /youtube\.com\/embed\/([^?&/]+)/i,
        /youtube\.com\/watch\?v=([^?&/]+)/i,
        /youtu\.be\/([^?&/]+)/i,
        /youtube\.com\/shorts\/([^?&/]+)/i
    ];

    for (const pattern of patterns) {

        const match = url.match(pattern);

        if (match) {
            return match[1];
        }
    }

    return null;
}


/* =========================================
   AUTOMATIC YOUTUBE THUMBNAIL
========================================= */

function getYouTubeThumbnail(videoURL) {

    const videoID =
        getYouTubeID(videoURL);

    if (!videoID) {
        return "";
    }

    return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
}


/* =========================================
   THUMBNAIL FALLBACK
========================================= */

function thumbnailFallback(image) {

    const videoID =
        getYouTubeID(image.dataset.video);

    if (
        videoID &&
        image.dataset.fallback !== "true"
    ) {

        image.dataset.fallback = "true";

        image.src =
            `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

        return;
    }

    const placeholder =
        document.createElement("div");

    placeholder.className =
        "thumbnail-placeholder";

    placeholder.innerHTML =
        "<span>▶</span>";

    const parent =
        image.parentElement;

    if (parent) {

        image.remove();

        parent.prepend(placeholder);
    }
}


/* =========================================
   RENDER PROJECTS
========================================= */

function renderProjects() {

    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = "";

    projects.forEach((project, index) => {

        const card =
            document.createElement("article");

        card.className =
            "project-card reveal";

        card.dataset.index = index;

        const thumbnail =
            getYouTubeThumbnail(project.video);

        let thumbnailHTML = "";

        if (thumbnail) {

            thumbnailHTML = `
                <img
                    src="${thumbnail}"
                    alt="${escapeHTML(project.title)}"
                    loading="lazy"
                    data-video="${project.video}"
                >
            `;

        } else {

            thumbnailHTML = `
                <div class="thumbnail-placeholder">
                    <span>▶</span>
                </div>
            `;
        }

        card.innerHTML = `

            <div class="project-thumbnail">

                ${thumbnailHTML}

                <div class="project-overlay">

                    <div class="project-play">
                        ▶
                    </div>

                    <span class="project-category">
                        ${escapeHTML(project.category)}
                    </span>

                </div>

            </div>

            <div class="project-info">

                <div>

                    <span class="project-category">
                        ${escapeHTML(project.category)}
                    </span>

                    <h3>
                        ${escapeHTML(project.title)}
                    </h3>

                    <p>
                        ${escapeHTML(project.description)}
                    </p>

                </div>

                <span class="project-watch">
                    VIEW PROJECT ↗
                </span>

            </div>
        `;

        const image =
            card.querySelector("img");

        if (image) {

            image.addEventListener(
                "error",
                () => thumbnailFallback(image)
            );
        }

        card.addEventListener(
            "click",
            () => openProject(index)
        );

        portfolioGrid.appendChild(card);

    });

    observeRevealElements();
}


/* =========================================
   RENDER SERVICES
========================================= */

function renderServices() {

    if (!servicesList) return;

    servicesList.innerHTML = "";

    services.forEach((service) => {

        const item =
            document.createElement("div");

        item.className =
            "service-item reveal";

        item.innerHTML = `

            <span class="service-number">
                ${escapeHTML(service.number)}
            </span>

            <div class="service-main">

                <h3>
                    ${escapeHTML(service.title)}
                </h3>

                <p>
                    ${escapeHTML(service.description)}
                </p>

            </div>

            <span class="service-arrow">
                ↗
            </span>
        `;

        servicesList.appendChild(item);

    });

    observeRevealElements();
}


/* =========================================
   OPEN PROJECT MODAL
========================================= */

function openProject(index) {

    const project =
        projects[index];

    if (
        !project ||
        !projectModal ||
        !modalContent
    ) {
        return;
    }

    let mediaHTML = "";

    if (project.video) {

        mediaHTML = `

            <div class="modal-video-wrapper">

                <iframe
                    class="modal-video"
                    src="${project.video}"
                    title="${escapeHTML(project.title)}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>

            </div>
        `;
    }

    modalContent.innerHTML = `

        <span class="modal-category">
            ${escapeHTML(project.category)}
        </span>

        <h3>
            ${escapeHTML(project.title)}
        </h3>

        <p>
            ${escapeHTML(project.description)}
        </p>

        ${mediaHTML}

        ${
            project.watch
                ? `
                    <a
                        class="button button-primary"
                        href="${project.watch}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="margin-top:25px;">

                        Watch on YouTube

                        <span>↗</span>

                    </a>
                `
                : ""
        }

    `;

    projectModal.showModal();

    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeProjectModal() {

    if (!projectModal) return;

    projectModal.close();

    document.body.classList.remove(
        "modal-open"
    );

    setTimeout(() => {

        if (modalContent) {
            modalContent.innerHTML = "";
        }

    }, 200);
}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );
}


/* =========================================
   CLOSE MODAL OUTSIDE
========================================= */

if (projectModal) {

    projectModal.addEventListener(
        "click",
        (event) => {

            const rect =
                projectModal.getBoundingClientRect();

            const clickedInside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!clickedInside) {
                closeProjectModal();
            }
        }
    );
}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.open
        ) {
            closeProjectModal();
        }

    }
);


/* =========================================
   MOBILE MENU
========================================= */

if (
    mobileMenuButton &&
    mobileNav
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle(
                    "active"
                );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            mobileMenuButton.classList.toggle(
                "active",
                isOpen
            );

        }
    );
}


/* =========================================
   MOBILE NAV LINKS
========================================= */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

                if (mobileMenuButton) {

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.classList.remove(
                        "active"
                    );
                }

            }
        );

    });
}


/* =========================================
   HEADER SCROLL
========================================= */

function handleHeaderScroll() {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );
    }
}


window.addEventListener(
    "scroll",
    handleHeaderScroll,
    {
        passive: true
    }
);

handleHeaderScroll();


/* =========================================
   SCROLL REVEAL
========================================= */

let revealObserver = null;

function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.reveal-observed)"
        );

    if (!elements.length) return;

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach((element) => {

            element.classList.add(
                "visible"
            );

        });

        return;
    }

    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            entry.target.classList.add(
                                "reveal-observed"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );
    }

    elements.forEach((element) => {

        element.classList.add(
            "reveal-observed"
        );

        revealObserver.observe(element);

    });
}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a"
    );

if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    const currentID =
                        entry.target.getAttribute(
                            "id"
                        );

                    navLinks.forEach((link) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            href ===
                            `#${currentID}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        } else {

                            link.classList.remove(
                                "active"
                            );
                        }

                    });

                });

            },
            {
                threshold: 0.25
            }
        );

    sections.forEach((section) => {

        sectionObserver.observe(section);

    });
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        () => {

            const submitButton =
                contactForm.querySelector(
                    ".form-submit"
                );

            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.innerHTML = `
                    Sending...
                    <span>→</span>
                `;
            }

        }
    );
}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (pageLoader) {

            pageLoader.classList.add(
                "loaded"
            );
        }

        observeRevealElements();

    }, 700);

});


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProjects();

        renderServices();

        observeRevealElements();

    }
);