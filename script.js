
/* CART SYSTEM */
let cartCount = 0;

function add() {
  cartCount++;
  const cart = document.getElementById("cartCount");
  if (cart) cart.innerText = cartCount;

  alert("🛒 Added to cart!");
}

/* SMOOTH SCROLL */
function goProducts() {
  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

/* DARK MODE TOGGLE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* FILTER PRODUCTS */
function filterProducts(type) {
  const items = document.querySelectorAll(".product");

  items.forEach(item => {
    if (type === "all") {
      item.style.display = "block";
    } else {
      item.style.display =
        item.classList.contains(type) ? "block" : "none";
    }
  });
}

/* SCROLL ANIMATION (REVEAL ON SCROLL) */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

/* HOVER EFFECT (DYNAMIC CLASS CONTROL) */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hovered");
  });
});

/* INPUT VALIDATION (NEWSLETTER) */
function subscribe() {
  const email = document.querySelector("input[type='email']").value;

  if (!email.includes("@")) {
    alert("❌ Enter valid email");
  } else {
    alert("✅ Subscribed successfully!");
  }
}

/* BACK TO TOP BUTTON */
function createBackToTop() {
  const btn = document.createElement("button");
  btn.innerText = "⬆ Top";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 15px";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.background = "#2e7d32";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  btn.style.display = "none";

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

/* RUN ON LOAD */
window.onload = () => {
  createBackToTop();
};

/* PRODUCT SEARCH */
function searchProducts() {
  const input = document.getElementById("searchBox")?.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(p => {
    const text = p.innerText.toLowerCase();
    p.style.display = text.includes(input) ? "block" : "none";
  });
}

/* PRICE COUNTER ANIMATION */
function animatePrice(element, target) {
  let start = 0;
  let speed = 20;

  let interval = setInterval(() => {
    start += 1;
    element.innerText = "$" + start;

    if (start >= target) {
      clearInterval(interval);
    }
  }, speed);
}

/* INTERACTIVE CARD CLICK */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("active-card");
  }
});
