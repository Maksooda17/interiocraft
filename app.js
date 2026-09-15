/**
 * InterioCraft - Interactive Application Logic
 * Lead Designer: Abdul Samad Y
 * Contact: +91 8113807210
 * Instagram: @_interio_craft_
 */

// Dataset of the 5 Completed Works by InterioCraft
const WORKS = [
  {
    id: 0,
    title: "Fluted TV Console & Marble Feature Wall",
    category: "Living Room",
    categoryKey: "living",
    image: "assets/images/work-1-tv-unit.jpg",
    description: "Floor-to-ceiling dark acoustic fluted wood wall panelling framed with warm recessed LED cove illumination, backlit Italian marble accent panel, floating lower storage console, and a vertical curio shelving tower with integrated spotlights.",
    features: [
      "Backlit Italian marble focal wall",
      "Concealed warm LED cove lighting",
      "Dark acoustic fluted vertical battens",
      "Full-width push-to-open drawer console",
      "Integrated vertical spotlight display tower"
    ]
  },
  {
    id: 1,
    title: "Modern Island Counter & Open Kitchen",
    category: "Kitchen & Dining",
    categoryKey: "kitchen",
    image: "assets/images/work-2-kitchen-counter.jpg",
    description: "Contemporary open-concept kitchen and breakfast counter featuring vertical slatted texture on the marble-topped island, suspended decorative brass pendant lights, glossy smoke cabinetry with under-cabinet warm strip lighting, and display niches.",
    features: [
      "Fluted marble-top breakfast island counter",
      "Suspended geometric pendant fixtures",
      "High-gloss smoke grey modular cabinetry",
      "Concealed under-counter warm task lights",
      "Illuminated recessed wall display niches"
    ]
  },
  {
    id: 2,
    title: "Glossy Wardrobes & Bay Window Seating",
    category: "Bedroom & Storage",
    categoryKey: "bedroom",
    image: "assets/images/work-3-wardrobes.jpg",
    description: "Full-height high-gloss acrylic wardrobe system in warm ivory-taupe with sleek matte black vertical profile handles, upper overhead storage lofts, and an integrated bay window seating bench with under-bench storage cabinets.",
    features: [
      "Floor-to-ceiling high-gloss acrylic wardrobes",
      "Full-extension overhead storage lofts",
      "Matte black architectural edge handles",
      "Integrated cushioned bay window seating nook",
      "Base cabinets under window with soft-close hinges"
    ]
  },
  {
    id: 3,
    title: "Teak Wood Jali & Display Partition",
    category: "Partitions & Screens",
    categoryKey: "partitions",
    image: "assets/images/work-4-partition-screen.jpg",
    description: "Architectural floor-to-ceiling room divider featuring CNC laser-cut decorative lattice jali screens, warm walnut/teak wood veneer frame, multi-tier curio display shelves, and a fluted wainscot base for subtle privacy and open light flow.",
    features: [
      "Laser-cut CNC acoustic lattice jali panels",
      "Teak and walnut warm timber frame",
      "Multi-tier open shelving for decor and plants",
      "Fluted lower acoustic paneling",
      "Defines dining and living zones without blocking light"
    ]
  },
  {
    id: 4,
    title: "Integrated Study Desk & Bookcase Unit",
    category: "Workspaces & Study",
    categoryKey: "partitions",
    image: "assets/images/work-5-study-desk.jpg",
    description: "Ergonomic study station seamlessly integrated into the bedroom suite with under-shelf warm LED task strip, multi-shelf cubbies for books and decor, smooth-glide drawer storage, and an adjacent full-height wardrobe tower.",
    features: [
      "Integrated warm LED task lighting strip",
      "Overhead open bookcase with plant cubbies",
      "Ergonomic wide desk surface with cable channel",
      "Adjoining vertical storage unit and wardrobe",
      "Durable scratch-resistant woodgrain laminate"
    ]
  }
];

let currentLightboxIndex = 0;

// Initialize Lucide icons on load
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Filter Works
function filterWorks(category) {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    if (tab.dataset.filter === category) {
      tab.classList.add("active", "text-craft-charcoal");
      tab.classList.remove("text-craft-muted");
    } else {
      tab.classList.remove("active");
      tab.classList.add("text-craft-muted");
    }
  });

  const cards = document.querySelectorAll(".work-card");
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.transition = "opacity 0.3s ease";
        card.style.opacity = "1";
      }, 20);
    } else {
      card.style.display = "none";
    }
  });
}

// Lightbox Open / Close / Navigation
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100", "pointer-events-auto");
    document.body.style.overflow = "auto";
  }
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % WORKS.length;
  updateLightboxContent();
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + WORKS.length) % WORKS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const work = WORKS[currentLightboxIndex];
  if (!work) return;

  const imgEl = document.getElementById("lightbox-img");
  const catEl = document.getElementById("lightbox-category");
  const idxEl = document.getElementById("lightbox-index");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const featEl = document.getElementById("lightbox-features");
  const waBtn = document.getElementById("lightbox-whatsapp-btn");

  if (imgEl) {
    imgEl.src = work.image;
    imgEl.alt = work.title;
  }
  if (catEl) catEl.textContent = work.category;
  if (idxEl) idxEl.textContent = `${currentLightboxIndex + 1} of ${WORKS.length}`;
  if (titleEl) titleEl.textContent = work.title;
  if (descEl) descEl.textContent = work.description;

  if (featEl) {
    featEl.innerHTML = work.features
      .map(f => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-craft-gold shrink-0"></span><span>${f}</span></li>`)
      .join("");
  }

  if (waBtn) {
    const waText = encodeURIComponent(`Hi Abdul Samad, I saw "${work.title}" on InterioCraft website and I would like to inquire about this design for my house.`);
    waBtn.href = `https://wa.me/918113807210?text=${waText}`;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Close lightbox on Escape key & navigate with left/right arrows
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("lightbox-modal");
  if (modal && modal.classList.contains("opacity-100")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
  }
});

// Consultation form submit handling
function handleConsultationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("client-name").value.trim();
  const phone = document.getElementById("client-phone").value.trim();
  const space = document.getElementById("house-type").value;
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone) {
    alert("Please provide your name and phone number.");
    return;
  }

  // Show thank you banner
  const successBox = document.getElementById("form-success");
  if (successBox) {
    successBox.classList.remove("hidden");
  }

  // Reset form
  e.target.reset();

  // Scroll smoothly to notification
  successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Send via WhatsApp directly
function sendViaWhatsApp() {
  const name = document.getElementById("client-name").value.trim();
  const phone = document.getElementById("client-phone").value.trim();
  const space = document.getElementById("house-type").value;
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message").value.trim();

  let text = `Hello Abdul Samad, I am contacting you from the InterioCraft website regarding interior designs for my house.

`;
  if (name) text += `*Name:* ${name}
`;
  if (phone) text += `*Phone:* ${phone}
`;
  if (space) text += `*Space/Type:* ${space}
`;
  if (location) text += `*Location:* ${location}
`;
  if (message) text += `*Requirements:* ${message}
`;

  const waUrl = `https://wa.me/918113807210?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}
