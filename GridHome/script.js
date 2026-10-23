/**
 * GRID HOME | Architectural Furniture for Modern Indian Living
 * Client-side Controller & Interactive Engine v2.0
 */

// ==========================================================================
// 1. Product Data Catalog
// ==========================================================================
const PRODUCTS = [
    {
        id: "oslo-bed",
        title: "Oslo Storage Bed",
        category: "bedroom",
        categoryLabel: "Bedroom Suite",
        tag: "Best Seller",
        basePrice: 58000,
        image: "./assets/oslo.jpg",
        material: "Natural Sheesham",
        shortDims: "78″ × 72″ (King)",
        description: "Minimalist low-profile platform bed featuring dual hydraulic gas-lifts that elevate the mattress effortlessly, revealing 720 liters of dust-sealed underbed storage. Built in solid A-grade Sheesham with chamfered corner profiles to save shin strikes in compact urban rooms.",
        finishes: ["Natural Honey Sheesham", "Smoked European Oak", "Dark Walnut Stain"],
        sizes: [
            { label: "King (78″ × 72″)", delta: 0 },
            { label: "Queen (78″ × 60″)", delta: -4000 }
        ],
        joinery: "Blind Mortise & Tenon",
        hardware: "German Suspa 1200N Gas Struts",
        leadTime: "10–14 Days"
    },
    {
        id: "axis-table",
        title: "Axis Architectural Dining Table",
        category: "dining",
        categoryLabel: "Dining Hall",
        tag: "Iconic Piece",
        basePrice: 44500,
        image: "./assets/axis.jpg",
        material: "Solid Plantation Teak / Sheesham",
        shortDims: "72″ × 36″ × 30″ (6P)",
        description: "A sculptural dining table designed with a 30-degree reverse-chamfer edge profile that appears remarkably thin while maintaining full structural strength. Inverted trestle legs provide complete knee freedom without corner leg collisions in tight dining nooks.",
        finishes: ["Warm Natural Teak", "A-Grade Sheesham", "Smoked Blackened Teak"],
        sizes: [
            { label: "6-Seater (72″ × 36″)", delta: 0 },
            { label: "4-Seater (54″ × 36″)", delta: -6500 },
            { label: "8-Seater (90″ × 40″)", delta: 12000 }
        ],
        joinery: "CNC Milled Bridle Joints",
        hardware: "Solid Brass Leveler Feet",
        leadTime: "12–16 Days"
    },
    {
        id: "shift-desk",
        title: "Shift Minimalist Work Desk",
        category: "atelier",
        categoryLabel: "Home Atelier",
        tag: "Space Savvy",
        basePrice: 28500,
        image: "./assets/shift.jpg",
        material: "Matte European Oak & Steel",
        shortDims: "54″ × 26″ × 30″",
        description: "Engineered specifically for remote knowledge workers in urban apartments. Features a hidden recessed cable trough with integrated magnetic organizers, a discreet under-desk power strip bay, and a shallow felt-lined laptop drawer with a hand-lathed solid brass pull.",
        finishes: ["European White Oak", "Natural Honey Sheesham", "Matte Blackened Ash"],
        sizes: [
            { label: "Standard (54″ × 26″)", delta: 0 },
            { label: "Compact Studio (46″ × 24″)", delta: -3500 },
            { label: "Executive (62″ × 28″)", delta: 5000 }
        ],
        joinery: "Steel-Reinforced Concealed Dovetail",
        hardware: "Blum Soft-Close Glides & Solid Brass Pull",
        leadTime: "7–10 Days"
    },
    {
        id: "frame-console",
        title: "Frame Floating Media Console",
        category: "living",
        categoryLabel: "Living Room",
        tag: "Compact Pick",
        basePrice: 24000,
        image: "./assets/frame.jpg",
        material: "Fluted Solid Sheesham & Steel",
        shortDims: "68″ × 16″ × 14″",
        description: "Wall-hung architectural media console that frees up precious floor area. Acoustic slatted drop-down doors allow remote IR signals and soundbar audio to pass through without opening the cabinet. Includes internal cable pass-through channels and ventilation slots for gaming consoles.",
        finishes: ["Natural Fluted Sheesham", "Smoked European Oak", "Charcoal Stained Teak"],
        sizes: [
            { label: "Standard (68″ × 16″)", delta: 0 },
            { label: "Compact (52″ × 16″)", delta: -3000 },
            { label: "Grand (80″ × 16″)", delta: 4500 }
        ],
        joinery: "Beveled Mitered Casing",
        hardware: "Heavy-Duty French Cleat Wall System",
        leadTime: "10–12 Days"
    },
    {
        id: "kyoto-chair",
        title: "Kyoto Low-Profile Lounge Chair",
        category: "living",
        categoryLabel: "Living Room",
        tag: "Artisan Built",
        basePrice: 22500,
        image: "./assets/livingroom.jpg",
        material: "Curved Oak & Textured Bouclé",
        shortDims: "30″ × 32″ × 28″",
        description: "An architectural accent chair inspired by Japanese minimal craft and Scandinavian ergonomics. Precision steam-bent oak arms cradle a contoured 105-degree reclined seating angle, upholstered in heavy stain-resistant textured natural bouclé fabric.",
        finishes: ["Blonde European Oak", "Natural Honey Sheesham", "Ebonized Walnut"],
        sizes: [
            { label: "Standard Armchair", delta: 0 },
            { label: "With Matching Ottoman", delta: 8500 }
        ],
        joinery: "Mortise & Tenon with Exposed Splines",
        hardware: "High-Resilience Multi-Density Foam",
        leadTime: "10–14 Days"
    },
    {
        id: "atelier-credenza",
        title: "Atelier Architectural Credenza",
        category: "atelier",
        categoryLabel: "Home Atelier",
        tag: "Heirloom Build",
        basePrice: 34000,
        image: "./assets/wfh.jpg",
        material: "Solid Sheesham & Solid Brass",
        shortDims: "48″ × 18″ × 32″",
        description: "Multipurpose credenza that works seamlessly as an executive office storage cabinet or living room sideboard. Features asymmetric reeded sliding doors, interior adjustable shelving for vinyl records or book collections, and solid brass cylindrical feet.",
        finishes: ["Natural Honey Sheesham", "Smoked European Oak", "Two-Tone Brass & Teak"],
        sizes: [
            { label: "2-Door (48″ × 18″)", delta: 0 },
            { label: "3-Door (64″ × 18″)", delta: 7000 }
        ],
        joinery: "Half-Lap Joinery & Solid Backing",
        hardware: "Blum Soft-Close Hinges",
        leadTime: "14–18 Days"
    }
];

// ==========================================================================
// 2. Material Provenance Database
// ==========================================================================
const MATERIALS_DATA = {
    sheesham: {
        title: "A-Grade Indian Sheesham",
        latin: "Dalbergia sissoo • North India / Rajasthan",
        img: "./assets/sheesham.jpg",
        desc: "Sourced from certified sustainably managed agro-forestry plantations in Northern India. Sheesham is celebrated worldwide for its dramatic, interlocked grain figure and contrasting heartwood. Extremely dense and heavy, it exhibits natural resistance to decay and dry-wood termites. Our timber undergoes 45 days of controlled vacuum kiln seasoning down to 8–10% moisture content to prevent seasonal movement.",
        hardness: "1,660 lbf (Janka Scale)",
        moisture: "8% – 10% (Jaipur Kiln Standard)",
        finish: "Matte Organic Poly-Hardwax Oil (Zero VOC)",
        care: "Dust with a dry microfibre cloth. Apply natural beeswax polish twice a year to maintain deep lustre."
    },
    oak: {
        title: "European White Oak",
        latin: "Quercus alba • PEFC Certified European Timber",
        img: "./assets/oak.jpg",
        desc: "Renowned for its clean, linear grain, soft beige-to-amber tones, and exceptional dimensional stability. European White Oak delivers an understated architectural elegance that softens minimal interiors. High tannin content naturally repels moisture and pests. Sourced exclusively from responsibly harvested European forests with chain-of-custody tracking.",
        hardness: "1,360 lbf (Janka Scale)",
        moisture: "7% – 9% Equilibrium Moisture",
        finish: "Ultra-Matte Invisible Polyurethane Oil",
        care: "Clean with mild pH-neutral soap and damp cloth. Highly resistant to everyday coffee and wine spills."
    },
    brass: {
        title: "Solid Architectural Brass",
        latin: "Pure C26000 Cartridge Alloy • Hand Lathed",
        img: "./assets/hardware.jpg",
        desc: "We refuse to use plated zinc or faux-gold finishes that peel. Every knob, pull, handle, and foot-cap on a GRID piece is machined from solid, hefty cartridge brass billets in our Jaipur metal workshop. Left unlacquered, the brass develops a warm, authentic living patina over years of human touch, reflecting the storied history of your home.",
        hardness: "Solid Forged & Lathed Brass",
        moisture: "100% Solid Metal (Non-Ferrous)",
        finish: "Hand-Brushed Living Patina (Unlacquered)",
        care: "Leaves natural patina untouched, or restore bright golden shine with lemon juice and baking soda paste."
    }
};

// ==========================================================================
// 3. State Management
// ==========================================================================
let cart = [];
let currentCategory = "all";
let activeProductModal = null;
let selectedFinish = "";
let selectedSize = null;
let modalQuantity = 1;

// Load cart safely from localStorage
try {
    const savedCart = localStorage.getItem("grid_home_cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
} catch (e) {
    console.warn("Storage not available:", e);
}

// ==========================================================================
// 4. Initialization & Event Routing
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initCustomCursor();
    renderProducts();
    initCatalogFilters();
    initModals();
    initCartDrawer();
    initCalculator();
    initNewsletter();
    initScrollEffects();
    updateCartUI();
});

// ==========================================================================
// 5. Navigation & Mobile Menu
// ==========================================================================
function initNavigation() {
    const mainNav = document.getElementById("main-nav");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileCloseBtn = document.getElementById("mobile-close-btn");
    const modalBackdrop = document.getElementById("modal-backdrop");

    // Scroll Navbar Background Blur
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
    }, { passive: true });

    // Mobile Menu Toggle
    let isMenuOpen = false;

    function openMobileMenu() {
        isMenuOpen = true;
        mobileNav.classList.add("active");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        isMenuOpen = false;
        mobileNav.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", () => {
        if (isMenuOpen) closeMobileMenu();
        else openMobileMenu();
    });

    mobileCloseBtn.addEventListener("click", closeMobileMenu);

    // Close mobile nav on link click
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", (e) => {
            closeMobileMenu();
        });
    });

    // Mobile Consult button
    document.getElementById("mobile-consult-btn").addEventListener("click", () => {
        closeMobileMenu();
        openConsultationModal();
    });

    // Mobile Spec Sheet button
    document.getElementById("mobile-spec-sheet-btn").addEventListener("click", () => {
        closeMobileMenu();
        openCartDrawer();
    });

    // Desktop Nav Consult button
    document.getElementById("book-consult-nav-btn").addEventListener("click", openConsultationModal);
    document.getElementById("hero-custom-btn").addEventListener("click", openConsultationModal);
    document.getElementById("book-consult-main-btn").addEventListener("click", openConsultationModal);

    // Escape Key listener for all overlays
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllModals();
            closeCartDrawer();
            if (isMenuOpen) closeMobileMenu();
        }
    });

    // Back to top smooth scroll
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Space cards category links in spaces section
    document.querySelectorAll(".cat-box").forEach(box => {
        const cat = box.getAttribute("data-category");
        box.addEventListener("click", () => {
            setCategoryFilter(cat);
            const featuredSection = document.getElementById("featured");
            if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: "smooth" });
            }
        });
        box.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                box.click();
            }
        });
    });

    // Footer category link delegates
    document.querySelectorAll("[data-filter-link]").forEach(link => {
        link.addEventListener("click", (e) => {
            const cat = link.getAttribute("data-filter-link");
            setCategoryFilter(cat);
        });
    });
}

// ==========================================================================
// 6. Custom Cursor (Safe, Desktop Fine-Pointer Only)
// ==========================================================================
function initCustomCursor() {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursor-follower");

    if (!isFinePointer || window.innerWidth <= 1024) {
        document.body.classList.remove("custom-cursor-active");
        if (cursor) cursor.style.display = "none";
        if (follower) follower.style.display = "none";
        return;
    }

    document.body.classList.add("custom-cursor-active");
    cursor.style.display = "block";
    follower.style.display = "block";

    let mX = -100, mY = -100, fX = -100, fY = -100;

    window.addEventListener("mousemove", (e) => {
        mX = e.clientX;
        mY = e.clientY;
        cursor.style.transform = `translate(${mX}px, ${mY}px)`;
    }, { passive: true });

    function renderFollower() {
        fX += (mX - fX) * 0.18;
        fY += (mY - fY) * 0.18;
        follower.style.transform = `translate(${fX}px, ${fY}px)`;
        requestAnimationFrame(renderFollower);
    }
    renderFollower();

    // Hover scale effects on interactive elements
    function attachCursorHovers() {
        document.querySelectorAll("a, button, .cat-box, .p-card, .mat-card, select, input").forEach(el => {
            el.addEventListener("mouseenter", () => {
                follower.style.width = "56px";
                follower.style.height = "56px";
                follower.style.backgroundColor = "rgba(74, 61, 46, 0.12)";
                follower.style.borderColor = "var(--color-accent)";
            });
            el.addEventListener("mouseleave", () => {
                follower.style.width = "36px";
                follower.style.height = "36px";
                follower.style.backgroundColor = "transparent";
                follower.style.borderColor = "var(--color-accent)";
            });
        });
    }
    attachCursorHovers();

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1024) {
            document.body.classList.remove("custom-cursor-active");
            cursor.style.display = "none";
            follower.style.display = "none";
        } else {
            document.body.classList.add("custom-cursor-active");
            cursor.style.display = "block";
            follower.style.display = "block";
        }
    });
}

// ==========================================================================
// 7. Product Catalog Rendering & Filtering
// ==========================================================================
function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = currentCategory === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === currentCategory);

    filtered.forEach(p => {
        const card = document.createElement("article");
        card.className = "p-card reveal is-revealed";
        card.setAttribute("data-id", p.id);

        card.innerHTML = `
            <div class="p-img-wrap">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <span class="p-badge">${p.tag}</span>
            </div>
            <div class="p-details">
                <span class="p-category-tag">${p.categoryLabel}</span>
                <h3 class="p-title">${p.title}</h3>
                <p class="p-material-line">${p.material}</p>
                <div class="p-price-row">
                    <span class="p-price">₹${p.basePrice.toLocaleString("en-IN")}</span>
                    <span class="p-dims">${p.shortDims}</span>
                </div>
                <div class="p-actions">
                    <button type="button" class="btn-card-quick" data-action="quick-specs" data-id="${p.id}">
                        Quick Specs
                    </button>
                    <button type="button" class="btn-card-add" data-action="add-cart" data-id="${p.id}">
                        + Spec Sheet
                    </button>
                </div>
            </div>
        `;

        card.querySelector('[data-action="quick-specs"]').addEventListener("click", () => {
            openProductModal(p.id);
        });

        card.querySelector('[data-action="add-cart"]').addEventListener("click", () => {
            addToCart(p.id, p.finishes[0], p.sizes[0].label, p.basePrice, 1);
            showToast(`Added ${p.title} to Project Spec Sheet`, "📐");
        });

        grid.appendChild(card);
    });
}

function initCatalogFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-filter");
            setCategoryFilter(cat);
        });
    });
}

function setCategoryFilter(cat) {
    currentCategory = cat;
    document.querySelectorAll(".filter-btn").forEach(b => {
        const match = b.getAttribute("data-filter") === cat;
        b.classList.toggle("active", match);
        b.setAttribute("aria-selected", match ? "true" : "false");
    });
    renderProducts();
}

// ==========================================================================
// 8. Product Quick Specs Modal
// ==========================================================================
function initModals() {
    const modalBackdrop = document.getElementById("modal-backdrop");
    const pClose = document.getElementById("modal-close-btn");
    const cClose = document.getElementById("consult-close-btn");
    const mClose = document.getElementById("mat-close-btn");
    const mActionClose = document.getElementById("mat-modal-close-action");

    [pClose, cClose, mClose, mActionClose].forEach(btn => {
        if (btn) btn.addEventListener("click", closeAllModals);
    });

    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", () => {
            closeAllModals();
            closeCartDrawer();
        });
    }

    const qtyMinus = document.getElementById("modal-qty-minus");
    const qtyPlus = document.getElementById("modal-qty-plus");
    const qtyVal = document.getElementById("modal-qty-val");

    if (qtyMinus && qtyPlus) {
        qtyMinus.addEventListener("click", () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                qtyVal.textContent = modalQuantity;
            }
        });
        qtyPlus.addEventListener("click", () => {
            modalQuantity++;
            qtyVal.textContent = modalQuantity;
        });
    }

    const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener("click", () => {
            if (!activeProductModal) return;
            const currentPrice = calculateModalPrice();
            addToCart(
                activeProductModal.id,
                selectedFinish,
                selectedSize ? selectedSize.label : "Standard",
                currentPrice,
                modalQuantity
            );
            closeAllModals();
            showToast(`Added ${modalQuantity}× ${activeProductModal.title} to Spec Sheet`, "📐");
            openCartDrawer();
        });
    }

    document.querySelectorAll(".mat-card").forEach(card => {
        const matKey = card.getAttribute("data-material");
        card.addEventListener("click", () => openMaterialModal(matKey));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openMaterialModal(matKey);
            }
        });
    });

    const consultForm = document.getElementById("consultation-form");
    if (consultForm) {
        consultForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("c-name").value;
            const phone = document.getElementById("c-phone").value;
            const city = document.getElementById("c-city").value;
            const space = document.getElementById("c-space").value;
            const notes = document.getElementById("c-notes").value;

            closeAllModals();
            showToast(`Thank you ${name}! Consultation requested for ${city}.`, "✓");

            const waMsg = encodeURIComponent(
                `Hello GRID HOME Atelier, I would like to book a design consultation for my home in ${city}.

Name: ${name}
Phone: ${phone}
Scope: ${space}
Notes: ${notes || "None"}`
            );
            window.open(`https://wa.me/919829014820?text=${waMsg}`, "_blank");
        });
    }
}

function openProductModal(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    activeProductModal = p;
    selectedFinish = p.finishes[0];
    selectedSize = p.sizes[0];
    modalQuantity = 1;

    document.getElementById("modal-p-img").src = p.image;
    document.getElementById("modal-p-img").alt = p.title;
    document.getElementById("modal-p-tag").textContent = p.tag;
    document.getElementById("modal-p-category").textContent = p.categoryLabel;
    document.getElementById("modal-p-title").textContent = p.title;
    document.getElementById("modal-p-desc").textContent = p.description;
    document.getElementById("modal-p-joinery").textContent = p.joinery;
    document.getElementById("modal-p-hardware").textContent = p.hardware;
    document.getElementById("modal-qty-val").textContent = "1";

    updateModalPriceDisplay();

    const finishGroup = document.getElementById("modal-finish-options");
    finishGroup.innerHTML = "";
    p.finishes.forEach((fin, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `finish-pill ${idx === 0 ? "active" : ""}`;
        btn.textContent = fin;
        btn.addEventListener("click", () => {
            finishGroup.querySelectorAll(".finish-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedFinish = fin;
            updateModalWhatsAppLink();
        });
        finishGroup.appendChild(btn);
    });

    const sizeGroup = document.getElementById("modal-size-options");
    sizeGroup.innerHTML = "";
    p.sizes.forEach((s, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `size-pill ${idx === 0 ? "active" : ""}`;
        btn.textContent = s.label;
        btn.addEventListener("click", () => {
            sizeGroup.querySelectorAll(".size-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = s;
            updateModalPriceDisplay();
            updateModalWhatsAppLink();
        });
        sizeGroup.appendChild(btn);
    });

    updateModalWhatsAppLink();

    const backdrop = document.getElementById("modal-backdrop");
    const modal = document.getElementById("product-modal");
    backdrop.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function calculateModalPrice() {
    if (!activeProductModal) return 0;
    const base = activeProductModal.basePrice;
    const delta = selectedSize ? selectedSize.delta : 0;
    return base + delta;
}

function updateModalPriceDisplay() {
    const price = calculateModalPrice();
    document.getElementById("modal-p-price").textContent = `₹${price.toLocaleString("en-IN")}`;
}

function updateModalWhatsAppLink() {
    if (!activeProductModal) return;
    const price = calculateModalPrice();
    const link = document.getElementById("modal-whatsapp-btn");
    const msg = encodeURIComponent(
        `Hello GRID HOME! I am inquiring about the ${activeProductModal.title}.

Finish: ${selectedFinish}
Size: ${selectedSize ? selectedSize.label : "Standard"}
Estimated Price: ₹${price.toLocaleString("en-IN")}`
    );
    link.href = `https://wa.me/919829014820?text=${msg}`;
}

function openConsultationModal() {
    closeAllModals();
    const backdrop = document.getElementById("modal-backdrop");
    const modal = document.getElementById("consultation-modal");
    backdrop.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function openMaterialModal(key) {
    const data = MATERIALS_DATA[key];
    if (!data) return;

    document.getElementById("mat-modal-img").style.backgroundImage = `url('${data.img}')`;
    document.getElementById("mat-modal-title").textContent = data.title;
    document.getElementById("mat-modal-latin").textContent = data.latin;
    document.getElementById("mat-modal-desc").textContent = data.desc;
    document.getElementById("mat-modal-hardness").textContent = data.hardness;
    document.getElementById("mat-modal-moisture").textContent = data.moisture;
    document.getElementById("mat-modal-finish").textContent = data.finish;
    document.getElementById("mat-modal-care").textContent = data.care;

    const backdrop = document.getElementById("modal-backdrop");
    const modal = document.getElementById("material-modal");
    backdrop.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAllModals() {
    document.querySelectorAll(".modal-dialog").forEach(m => m.classList.remove("active"));
    const backdrop = document.getElementById("modal-backdrop");
    if (!document.getElementById("cart-drawer").classList.contains("active")) {
        backdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
    activeProductModal = null;
}

// ==========================================================================
// 9. Project Spec Sheet / Cart Drawer Management
// ==========================================================================
function initCartDrawer() {
    const specSheetBtn = document.getElementById("spec-sheet-btn");
    const drawer = document.getElementById("cart-drawer");
    const drawerClose = document.getElementById("drawer-close-btn");
    const cartClearBtn = document.getElementById("cart-clear-btn");
    const cartCheckoutBtn = document.getElementById("cart-checkout-btn");
    const cartWhatsAppBtn = document.getElementById("cart-whatsapp-order-btn");
    const emptyBrowseBtn = document.getElementById("empty-cart-browse-btn");

    specSheetBtn.addEventListener("click", openCartDrawer);
    drawerClose.addEventListener("click", closeCartDrawer);

    if (emptyBrowseBtn) {
        emptyBrowseBtn.addEventListener("click", () => {
            closeCartDrawer();
        });
    }

    if (cartClearBtn) {
        cartClearBtn.addEventListener("click", () => {
            cart = [];
            saveCart();
            updateCartUI();
            showToast("Project Spec Sheet cleared", "🗑");
        });
    }

    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener("click", () => {
            if (cart.length === 0) return;
            closeCartDrawer();
            openConsultationModal();
            showToast("Reviewing your Spec Sheet for official quotation", "📋");
        });
    }

    if (cartWhatsAppBtn) {
        cartWhatsAppBtn.addEventListener("click", () => {
            if (cart.length === 0) return;
            let summary = "Hello GRID HOME Atelier, here is my Project Spec Sheet request:\n\n";
            cart.forEach((item, i) => {
                summary += `${i + 1}. ${item.title} (${item.size}, ${item.finish}) × ${item.qty} = ₹${(item.price * item.qty).toLocaleString("en-IN")}
`;
            });
            const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
            summary += `
Estimated Project Total: ₹${total.toLocaleString("en-IN")}
Delhi NCR / Jaipur delivery inquiries.`;

            window.open(`https://wa.me/919829014820?text=${encodeURIComponent(summary)}`, "_blank");
        });
    }
}

function openCartDrawer() {
    closeAllModals();
    const backdrop = document.getElementById("modal-backdrop");
    const drawer = document.getElementById("cart-drawer");
    backdrop.classList.add("active");
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    const backdrop = document.getElementById("modal-backdrop");
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
}

function addToCart(productId, finish, size, price, qty = 1) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    const existingIndex = cart.findIndex(item => 
        item.id === productId && item.finish === finish && item.size === size
    );

    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            id: p.id,
            title: p.title,
            image: p.image,
            finish: finish,
            size: size,
            price: price,
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartQty(index, newQty) {
    if (newQty <= 0) {
        removeFromCart(index);
    } else {
        cart[index].qty = newQty;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    try {
        localStorage.setItem("grid_home_cart", JSON.stringify(cart));
    } catch (e) {
        console.warn("Could not save to localStorage:", e);
    }
}

function updateCartUI() {
    const countBadge = document.getElementById("cart-count-badge");
    const mobileCount = document.getElementById("mobile-cart-count");
    const drawerItemCount = document.getElementById("drawer-item-count");
    const cartItemsContainer = document.getElementById("cart-drawer-items");
    const cartFooter = document.getElementById("cart-drawer-footer");
    const totalPriceEl = document.getElementById("cart-total-price");
    const emptyState = document.getElementById("cart-empty-state");

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (countBadge) countBadge.textContent = totalQty;
    if (mobileCount) mobileCount.textContent = totalQty;
    if (drawerItemCount) drawerItemCount.textContent = `${totalQty} Item${totalQty === 1 ? "" : "s"}`;

    if (cart.length === 0) {
        if (emptyState) emptyState.style.display = "block";
        if (cartFooter) cartFooter.style.display = "none";
        const items = cartItemsContainer.querySelectorAll(".cart-item");
        items.forEach(el => el.remove());
    } else {
        if (emptyState) emptyState.style.display = "none";
        if (cartFooter) cartFooter.style.display = "block";
        if (totalPriceEl) totalPriceEl.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;

        const existingItems = cartItemsContainer.querySelectorAll(".cart-item");
        existingItems.forEach(el => el.remove());

        cart.forEach((item, idx) => {
            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="ci-info">
                    <h4>${item.title}</h4>
                    <p class="ci-variant">${item.size} • ${item.finish}</p>
                    <p class="ci-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</p>
                </div>
                <div class="ci-controls">
                    <div class="qty-stepper" style="transform: scale(0.85); transform-origin: right center;">
                        <button type="button" class="ci-minus" data-idx="${idx}">&minus;</button>
                        <span>${item.qty}</span>
                        <button type="button" class="ci-plus" data-idx="${idx}">&#43;</button>
                    </div>
                    <button type="button" class="ci-remove-btn" data-idx="${idx}">Remove</button>
                </div>
            `;

            itemEl.querySelector(".ci-minus").addEventListener("click", () => updateCartQty(idx, item.qty - 1));
            itemEl.querySelector(".ci-plus").addEventListener("click", () => updateCartQty(idx, item.qty + 1));
            itemEl.querySelector(".ci-remove-btn").addEventListener("click", () => removeFromCart(idx));

            cartItemsContainer.appendChild(itemEl);
        });
    }
}

// ==========================================================================
// 10. Space Fit & Room Clearance Calculator
// ==========================================================================
function initCalculator() {
    const roomTypeSelect = document.getElementById("calc-room-type");
    const pieceSelect = document.getElementById("calc-piece-select");
    const customDimRow = document.getElementById("custom-dim-row");
    const widthInput = document.getElementById("calc-room-width");
    const lengthInput = document.getElementById("calc-room-length");
    const computeBtn = document.getElementById("calc-compute-btn");

    const statusBadge = document.getElementById("calc-fit-status");
    const fitTitle = document.getElementById("calc-fit-title");
    const clearanceVal = document.getElementById("calc-clearance-val");
    const footprintVal = document.getElementById("calc-footprint-val");
    const comfortVal = document.getElementById("calc-comfort-val");
    const adviceText = document.getElementById("calc-fit-advice");

    const presets = {
        "bed-master": { w: 12, l: 14, title: "Master Bedroom" },
        "bed-compact": { w: 10, l: 12, title: "Compact Bedroom" },
        "living-standard": { w: 14, l: 18, title: "Living Hall" },
        "dining-nook": { w: 10, l: 11, title: "Dining Nook" },
        "study-atelier": { w: 9, l: 11, title: "Study / Atelier" }
    };

    const furnitureSizes = {
        "oslo-bed": { l: 6.8, w: 6.2, name: "Oslo Storage Bed (King)" },
        "axis-table": { l: 6.0, w: 3.0, name: "Axis Dining Table (6-Seater)" },
        "shift-desk": { l: 4.5, w: 2.2, name: "Shift Minimal Desk" },
        "frame-console": { l: 5.7, w: 1.3, name: "Frame Floating Console" },
        "kyoto-chair": { l: 2.7, w: 2.5, name: "Kyoto Lounge Chair" }
    };

    roomTypeSelect.addEventListener("change", () => {
        if (roomTypeSelect.value === "custom") {
            customDimRow.style.display = "grid";
        } else {
            customDimRow.style.display = "none";
            const p = presets[roomTypeSelect.value];
            if (p) {
                widthInput.value = p.w;
                lengthInput.value = p.l;
            }
        }
        calculateClearance();
    });

    computeBtn.addEventListener("click", calculateClearance);
    pieceSelect.addEventListener("change", calculateClearance);

    function calculateClearance() {
        let w = parseFloat(widthInput.value) || 12;
        let l = parseFloat(lengthInput.value) || 14;

        if (roomTypeSelect.value !== "custom") {
            const p = presets[roomTypeSelect.value];
            if (p) {
                w = p.w;
                l = p.l;
            }
        }

        const roomArea = w * l;
        const item = furnitureSizes[pieceSelect.value] || furnitureSizes["oslo-bed"];
        const pieceArea = item.l * item.w;
        const footprintPct = Math.round((pieceArea / roomArea) * 100);

        const remainingW = (w - item.w) * 12;
        const walkingClearance = Math.max(18, Math.round(remainingW / 2));

        clearanceVal.textContent = `${walkingClearance}″`;
        footprintVal.textContent = `${footprintPct}%`;

        if (walkingClearance >= 36) {
            statusBadge.textContent = "Optimal Architectural Fit";
            statusBadge.style.background = "#e8f5e9";
            statusBadge.style.color = "var(--color-success)";
            fitTitle.textContent = "Excellent Spatial Corridor";
            comfortVal.textContent = "Spacious";
            adviceText.textContent = `At ${walkingClearance} inches of perimeter clearance, this piece leaves ample room for standard 36″ walking corridors, effortless wardrobe door swings, and natural ventilation without crowding your room.`;
        } else if (walkingClearance >= 26) {
            statusBadge.textContent = "Comfortable Urban Fit";
            statusBadge.style.background = "#fef3c7";
            statusBadge.style.color = "#92400e";
            fitTitle.textContent = "Balanced Compact Layout";
            comfortVal.textContent = "Optimal";
            adviceText.textContent = `At ${walkingClearance} inches of side clearance, the piece fits modern urban apartment corridors comfortably. Recommend floating bedside units or wall sconces to keep visual floor lines clear.`;
        } else {
            statusBadge.textContent = "Tight Fit Consideration";
            statusBadge.style.background = "#fee2e2";
            statusBadge.style.color = "#991b1b";
            fitTitle.textContent = "Consider Sizing Down";
            comfortVal.textContent = "Compact";
            adviceText.textContent = `Clearance is ${walkingClearance} inches, which may feel tight near bedside walkways. Consider selecting our Queen configuration or booking our free in-home laser measurement call to customize dimensions.`;
        }
    }

    calculateClearance();
}

// ==========================================================================
// 11. Toast Notifications System
// ==========================================================================
function showToast(message, icon = "✓") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================================================
// 12. Newsletter Lookbook Subscription
// ==========================================================================
function initNewsletter() {
    const form = document.getElementById("newsletter-form");
    const status = document.getElementById("nl-status");
    if (!form || !status) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.textContent = "✓ You are subscribed! 2026 Lookbook dispatched to your inbox.";
        status.style.color = "#9fe2bf";
        showToast("2026 Lookbook & Timber Catalog dispatched", "📖");
        form.reset();
        setTimeout(() => {
            status.textContent = "";
        }, 5000);
    });
}

// ==========================================================================
// 13. GSAP & Scroll Observer Fallback
// ==========================================================================
function initScrollEffects() {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.from(".hero-title", { opacity: 0, y: 40, duration: 1, ease: "power3.out" })
          .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".btn-group", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6");

        gsap.utils.toArray(".reveal").forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power2.out",
                onComplete: () => el.classList.add("is-revealed")
            });
        });
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }
}
