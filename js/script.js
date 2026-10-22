// Contact form functionality

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your demo message was submitted successfully.`;

    contactForm.reset();
});