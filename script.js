const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menu.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Only intercept same-page anchor links (e.g. "#services").
        // Let normal page links (e.g. "services.html") navigate as usual.
        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

        navLinks.classList.remove("active");
        menu.textContent = "☰";
    });
});
const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

animatedSections.forEach(section => {
    observer.observe(section);
});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);
});

if (typeof emailjs !== "undefined") {

    emailjs.init("eN4pUqodtZ8HsFt");

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            emailjs.sendForm(
                "service_1cx66c6",
                "template_4ezp9j7",
                this
            )
            .then(() => {
                alert("Message sent successfully! We will get back to you soon.");
                this.reset();
            })
            .catch((error) => {
                alert("Failed to send message. Please try again.");
                console.log(error);
            });
        });
    }

}
const counters = document.querySelectorAll(".counter");

let started = false;

function startCounters() {

    if (started) return;

    const statsSection = document.querySelector(".stats");
    const sectionTop = statsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = Number(counter.getAttribute("data-target"));
            let count = 0;

            const timer = setInterval(() => {

                count++;

                counter.innerText = count;

                if (count >= target) {
                    clearInterval(timer);
                    counter.innerText = target + "+";
                }

            }, 30);

        });
    }
}

window.addEventListener("scroll", startCounters);
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});