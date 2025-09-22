// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// Order Form Confirmation
document.getElementById("orderForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your order has been placed successfully!");
});

// Image Slider Auto Scroll
const slider = document.querySelector(".slider");
if (slider) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 600;
    if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }, 3000);
}

// Animate on Scroll
const fadeInElements = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
