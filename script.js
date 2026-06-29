// Document load hone ke baad code run hoga
document.addEventListener("DOMContentLoaded", () => {
  setupNavbarBlur();
  setupTypingEffect();
});

// 1. Navigation Scroll Effect: Scroll karne par navbar automatically solid blur ho jata hai
function setupNavbarBlur() {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    } else {
      nav.style.boxShadow = "none";
    }
  });
}

// 2. Typing Cursor Accent Effect Animation
function setupTypingEffect() {
  const words = ["Java Full Stack Developer", "Web Developer", "Problem Solver"];
  const roleSpan = document.querySelector(".role-accent");
  if (!roleSpan) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      roleSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Poora word type hone par hold break
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Agla word start hone se pehle ka break
    }

    setTimeout(type, typeSpeed);
  }
  
  // Custom typing start karne ke liye is line ko uncomment kar sakte hain
  // type();
}

// 3. Contact Form Handle (Form Submission Simulation)
function handleSubmit(event) {
  event.preventDefault(); // Default submission reload rokne ke liye

  const submitBtn = document.getElementById("submitBtn");
  const formMsg = document.getElementById("formMsg");
  
  // Inputs fields fetching
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const subject = document.getElementById("csubject").value.trim();
  const message = document.getElementById("cmsg").value.trim();

  // Basic Frontend Validation
  if (!name || !email || !message) {
    formMsg.className = "form-feedback error";
    formMsg.textContent = "❌ Please fill all the required fields.";
    return;
  }

  // Submit button visual loading status code
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending Message... ⏳";
  formMsg.textContent = "";

  // Formspree API integration, Backend connection, ya Email trigger simulator (2 Seconds delay)
  setTimeout(() => {
    // UI response handling success
    formMsg.className = "form-feedback success";
    formMsg.textContent = `🎉 Thank you, ${name}! Your message has been simulated successfully. Muskan will reach back within 24 hours.`;
    
    // Form clear resetting setup
    document.querySelector(".contact-form").reset();
    
    // Button state reset
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message →";
  }, 2000);
}