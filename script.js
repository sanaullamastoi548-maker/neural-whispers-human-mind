/* =========================================================
   NEURAL WHISPERS
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}


/* =========================================================
   SEARCH BUTTON
   ========================================================= */

const searchButton = document.querySelector(".search-button");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const search = prompt(
            "What would you like to search?"
        );

        if (search && search.trim() !== "") {

            alert(
                `Searching for: ${search.trim()}`
            );

        }

    });

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

const languageButton =
    document.querySelector(".language-button");

if (languageButton) {

    languageButton.addEventListener("click", () => {

        const currentLanguage =
            languageButton.innerText.trim();

        if (currentLanguage.startsWith("EN")) {

            languageButton.innerHTML =
                `اردو <span>⌄</span>`;

        } else {

            languageButton.innerHTML =
                `EN <span>⌄</span>`;

        }

    });

}


/* =========================================================
   HERO SLIDER DOTS
   ========================================================= */

const dots =
    document.querySelectorAll(".slider-dots .dot");

let currentDot = 0;

function changeDot(index) {

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}

if (dots.length > 0) {

    setInterval(() => {

        currentDot++;

        if (currentDot >= dots.length) {
            currentDot = 0;
        }

        changeDot(currentDot);

    }, 3500);

}


/* =========================================================
   CATEGORY BUTTONS
   ========================================================= */

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        event.preventDefault();

        const category =
            card.querySelector("span:last-child")?.textContent;

        if (category) {

            filterFacts(category);

        }

    });

});


/* =========================================================
   FILTER PSYCHOLOGY FACTS
   ========================================================= */

function filterFacts(category) {

    const factCards =
        document.querySelectorAll(".fact-card");

    if (!factCards.length) {
        return;
    }

    let found = false;

    factCards.forEach((card) => {

        const title =
            card.querySelector("h3")?.textContent
                .toLowerCase() || "";

        const description =
            card.querySelector("p")?.textContent
                .toLowerCase() || "";

        const text =
            `${title} ${description}`;

        const keyword =
            category.toLowerCase();

        if (
            text.includes(keyword) ||
            category === "Human Mind"
        ) {

            card.style.display = "flex";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (!found) {

        factCards.forEach((card) => {

            card.style.display = "flex";

        });

    }

}


/* =========================================================
   VIEW ALL CATEGORIES
   ========================================================= */

const viewCategoryButton =
    document.querySelector(
        ".view-category-button"
    );

if (viewCategoryButton) {

    viewCategoryButton.addEventListener(
        "click",
        () => {

            const categories =
                document.querySelector(
                    ".category-list"
                );

            if (categories) {

                categories.classList.toggle(
                    "expanded"
                );

                if (
                    categories.classList.contains(
                        "expanded"
                    )
                ) {

                    viewCategoryButton.innerHTML =
                        `Hide Categories <span>⌃</span>`;

                } else {

                    viewCategoryButton.innerHTML =
                        `View All Categories <span>⌄</span>`;

                }

            }

        }
    );

}


/* =========================================================
   VIEW ALL FACTS
   ========================================================= */

const viewAllFacts =
    document.querySelector(
        ".view-all-button"
    );

if (viewAllFacts) {

    viewAllFacts.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            const factsSection =
                document.querySelector(
                    ".psychology-section"
                );

            if (factsSection) {

                factsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


/* =========================================================
   NEWSLETTER FORM
   ========================================================= */

const newsletterForm =
    document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const emailInput =
                newsletterForm.querySelector(
                    "input[type='email']"
                );

            if (!emailInput) {
                return;
            }

            const email =
                emailInput.value.trim();


            if (email === "") {

                alert(
                    "Please enter your email address."
                );

                return;

            }


            if (!isValidEmail(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            alert(
                "Thank you for subscribing to Neural Whispers!"
            );

            emailInput.value = "";

        }
    );

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );

internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   FACT CARDS
   ========================================================= */

const factLinks =
    document.querySelectorAll(
        ".fact-content a"
    );

factLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            const card =
                link.closest(".fact-card");

            if (!card) {
                return;
            }

            const title =
                card.querySelector("h3")?.textContent
                || "Psychology Fact";

            const description =
                card.querySelector("p")?.textContent
                || "";

            alert(
                `${title}\n\n${description}`
            );

        }
    );

});


/* =========================================================
   SCROLL HEADER EFFECT
   ========================================================= */

const header =
    document.querySelector(".header");

if (header) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================================
   FADE-IN ANIMATION
   ========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".fact-card, .category-card, .did-you-know"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Neural Whispers website loaded successfully."
);
