const yearTargets = document.querySelectorAll("[data-year]");
yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = document.querySelector("[data-form-status]");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      status.textContent = "Controlla i campi richiesti prima di inviare.";
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const firstName = String(formData.get("name") || "").trim().split(/\s+/)[0] || "grazie";
    status.textContent = `Grazie ${firstName}, la richiesta è pronta per essere presa in carico.`;
    contactForm.reset();
  });
}
