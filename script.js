/* Tomgai menu, navigation, gallery and modal interactions */

const menuData = [
  { name: "Dynamite Chicken", price: "999", category: "Appetizers", image: "assets/food_1.webp" },
  { name: "Honey Mustard Wings", price: "899", category: "Appetizers", image: "assets/food_2.webp" },
  { name: "Chilli Honey Wings", price: "849", category: "Appetizers", image: "assets/food_3.webp" },
  { name: "BBQ Wings", price: "799", category: "Appetizers", image: "assets/food_4.webp" },
  { name: "Finger Cheese Chicken", price: "849", category: "Appetizers", image: "assets/food_5.webp" },
  { name: "Tempura Prawns", price: "2099", category: "Appetizers", image: "assets/food_6.webp" },
  { name: "Dynamite Prawns", price: "1790", category: "Appetizers", image: "assets/food_7.webp" },
  { name: "Fish Cracker", price: "650", category: "Appetizers", image: "assets/food_8.webp" },
  { name: "Loaded Fries", price: "849", category: "Appetizers", image: "assets/food_9.webp" },
  { name: "Plain Fries", price: "449", category: "Appetizers", image: "assets/food_10.webp" },
  { name: "Fish & Chips", price: "1749", category: "Appetizers", image: "assets/food_11.webp" },
  { name: "Chicken Drum Sticks", price: "1199", category: "Appetizers", image: "assets/food_12.webp" },
  { name: "Special Chowmein", price: "1499", category: "Chinese Noodles", image: "assets/food_1.webp" },
  { name: "Chicken Chowmein", price: "1399", category: "Chinese Noodles", image: "assets/food_2.webp" },
  { name: "Vegetable Chowmein", price: "1199", category: "Chinese Noodles", image: "assets/food_3.webp" },
  { name: "Tomgai Special Rice", price: "899", category: "Chinese Rice", image: "assets/food_4.webp" },
  { name: "Chicken Fried Rice", price: "849", category: "Chinese Rice", image: "assets/food_5.webp" },
  { name: "Egg Fried Rice", price: "799", category: "Chinese Rice", image: "assets/food_6.webp" },
  { name: "Vegetable Fried Rice", price: "699", category: "Chinese Rice", image: "assets/food_7.webp" },
  { name: "Chicken Masala Rice", price: "849", category: "Chinese Rice", image: "assets/food_8.webp" },
  { name: "Hot Garlic Rice", price: "799", category: "Chinese Rice", image: "assets/food_9.webp" },
  { name: "Steamed Rice", price: "599", category: "Chinese Rice", image: "assets/food_10.webp" },
  { name: "Thai Bangkok Chicken", price: "1499 / 1299", category: "Main Course", image: "assets/food_11.webp" },
  { name: "Chicken Manchurian", price: "1399 / 1199", category: "Main Course", image: "assets/food_12.webp" },
  { name: "Mongolian Chicken", price: "1499 / 1249", category: "Main Course", image: "assets/food_13.webp" },
  { name: "Cashew Nut Chicken", price: "1599 / 1299", category: "Main Course", image: "assets/food_15.webp" },
  { name: "Kung Pao Chicken", price: "1499 / 1249", category: "Main Course", image: "assets/food_1.webp" },
  { name: "Chicken Chilli Dry", price: "1499 / 1249", category: "Main Course", image: "assets/food_2.webp" },
  { name: "Chicken Hot Garlic Sauce", price: "1349 / 1099", category: "Main Course", image: "assets/food_3.webp" },
  { name: "Dragon Chicken", price: "1799 / 1599", category: "Main Course", image: "assets/food_4.webp" },
  { name: "Beef Chili Dry", price: "1850 / 1599", category: "Main Course", image: "assets/food_5.webp" },
  { name: "Mongolian Beef", price: "1799 / 1549", category: "Main Course", image: "assets/food_6.webp" },
  { name: "Sweet & Sour Prawns", price: "1849 / 1599", category: "Main Course", image: "assets/food_7.webp" },
  { name: "Prawns Hot Garlic Sauce", price: "1849 / 1599", category: "Main Course", image: "assets/food_8.webp" },
  { name: "Fish Hot Garlic Sauce", price: "1799 / 1549", category: "Main Course", image: "assets/food_9.webp" },
  { name: "Kung Pao Fish", price: "1749 / 1549", category: "Main Course", image: "assets/food_10.webp" },
  { name: "Tomgai Signature Soup", price: "599 / 1599", category: "Soups", image: "assets/food_11.webp" },
  { name: "19B Soup", price: "549 / 1549", category: "Soups", image: "assets/food_12.webp" },
  { name: "Hot & Sour Soup", price: "449 / 1399", category: "Soups", image: "assets/food_13.webp" },
  { name: "Thai Clear Soup", price: "499 / 1399", category: "Soups", image: "assets/food_15.webp" },
  { name: "Chicken Szechuan Soup", price: "550 / 1499", category: "Soups", image: "assets/food_1.webp" },
  { name: "Chicken Corn Soup", price: "499 / 1399", category: "Soups", image: "assets/food_2.webp" },
  { name: "Cream & Mushrooms Soup", price: "699 / 1699", category: "Soups", image: "assets/food_3.webp" },
  { name: "Chicken Caesar Salad", price: "799", category: "Salads", image: "assets/food_4.webp" },
  { name: "Waldorf Salad", price: "999", category: "Salads", image: "assets/food_5.webp" },
  { name: "Chicken Pineapple Salad", price: "799", category: "Salads", image: "assets/food_6.webp" },
  { name: "Deluxe Russian Salad", price: "849", category: "Salads", image: "assets/food_7.webp" },
  { name: "Tomgai Signature Sandwich", price: "999", category: "Panini Grilled Sandwich", image: "assets/food_8.webp" },
  { name: "Club Sandwich", price: "899", category: "Panini Grilled Sandwich", image: "assets/food_9.webp" },
  { name: "Peri Peri Sandwich", price: "849", category: "Panini Grilled Sandwich", image: "assets/food_10.webp" },
  { name: "Crunchy Fried Fish Sandwich", price: "999", category: "Panini Grilled Sandwich", image: "assets/food_11.webp" },
  { name: "BBQ Grill & Cheese Sandwich", price: "799", category: "Panini Grilled Sandwich", image: "assets/food_12.webp" },
  { name: "California Panini Sandwich", price: "799", category: "Panini Grilled Sandwich", image: "assets/food_13.webp" },
  { name: "Tower Burger", price: "899", category: "Burgers", image: "assets/food_15.webp" },
  { name: "Moroccan Burger", price: "749", category: "Burgers", image: "assets/food_1.webp" },
  { name: "Schezwan Burger", price: "1099", category: "Burgers", image: "assets/food_2.webp" },
  { name: "Tomgai Special Jumbo Wrap", price: "799", category: "Wraps", image: "assets/food_3.webp" },
  { name: "Grill Chicken Wrap", price: "799", category: "Wraps", image: "assets/food_4.webp" },
  { name: "Crunchy Wrap", price: "799", category: "Wraps", image: "assets/food_5.webp" },
  { name: "Tuscan Polo Chicken", price: "1849", category: "Continental", image: "assets/food_6.webp" },
  { name: "Stuffed Chicken", price: "1649", category: "Continental", image: "assets/food_7.webp" },
  { name: "Mushroom Chicken with Brown Sauce", price: "1599", category: "Continental", image: "assets/food_8.webp" },
  { name: "Parmesan Cheese Chicken", price: "1599", category: "Continental", image: "assets/food_9.webp" },
  { name: "Italian Chicken", price: "1699", category: "Continental", image: "assets/food_10.webp" },
  { name: "Butter Mushroom Steak", price: "1549", category: "Steaks", image: "assets/food_11.webp" },
  { name: "Tarragon Chicken with White Sauce", price: "1499", category: "Steaks", image: "assets/food_12.webp" },
  { name: "Moroccan Chicken Steak", price: "1649", category: "Steaks", image: "assets/food_13.webp" },
  { name: "Lemon Butter Fish Steak", price: "1799", category: "Steaks", image: "assets/food_15.webp" },
  { name: "Chicken Lasagna Pasta", price: "1499", category: "Pasta", image: "assets/food_1.webp" },
  { name: "Fettuccine Alfredo Pasta", price: "1349", category: "Pasta", image: "assets/food_2.webp" },
  { name: "Classic Penne Pasta", price: "1299", category: "Pasta", image: "assets/food_3.webp" },
  { name: "Macaroni Pasta Bake", price: "1399", category: "Pasta", image: "assets/food_4.webp" },
  { name: "Arrabbiata Pasta", price: "1399", category: "Pasta", image: "assets/food_5.webp" },
  { name: "Blue Lady", price: "599", category: "Cold Beverages", image: "assets/food_6.webp" },
  { name: "Pink Lady", price: "549", category: "Cold Beverages", image: "assets/food_7.webp" },
  { name: "Pina Colada", price: "399", category: "Cold Beverages", image: "assets/food_8.webp" },
  { name: "Strawberry Margarita", price: "399", category: "Cold Beverages", image: "assets/food_9.webp" },
  { name: "Mint Margarita", price: "349", category: "Cold Beverages", image: "assets/food_10.webp" },
  { name: "Peach Margarita", price: "388", category: "Cold Beverages", image: "assets/food_11.webp" },
  { name: "Cocktail Mojito", price: "449", category: "Cold Beverages", image: "assets/food_12.webp" },
  { name: "Orange Mojito", price: "499", category: "Cold Beverages", image: "assets/food_13.webp" },
  { name: "Lemon Spark", price: "439", category: "Cold Beverages", image: "assets/food_15.webp" },
  { name: "Fresh Lime", price: "199", category: "Cold Beverages", image: "assets/food_1.webp" },
  { name: "Water Large", price: "150", category: "Cold Beverages", image: "assets/food_2.webp" },
  { name: "Water Small", price: "95", category: "Cold Beverages", image: "assets/food_3.webp" },
  { name: "Soft Drink", price: "169", category: "Cold Beverages", image: "assets/food_4.webp" }
];

const categories = [
  "Appetizers", "Chinese Noodles", "Chinese Rice", "Main Course", "Soups", "Salads",
  "Panini Grilled Sandwich", "Burgers", "Wraps", "Continental", "Steaks", "Pasta", "Cold Beverages"
];

const dishImageMap = {
  "Dynamite Chicken": "assets/food_1.webp",
  "Honey Mustard Wings": "assets/food_2.webp",
  "Chilli Honey Wings": "assets/food_3.webp",
  "BBQ Wings": "assets/food_4.webp",
  "Finger Cheese Chicken": "assets/food_5.webp",
  "Tempura Prawns": "assets/food_6.webp",
  "Dynamite Prawns": "assets/food_7.webp",
  "Fish Cracker": "assets/food_8.webp",
  "Loaded Fries": "assets/food_9.webp",
  "Plain Fries": "assets/food_10.webp",
  "Fish & Chips": "assets/food_11.webp",
  "Chicken Drum Sticks": "assets/food_12.webp",
  "Special Chowmein": "assets/food_1.webp",
  "Chicken Chowmein": "assets/food_2.webp",
  "Vegetable Chowmein": "assets/food_3.webp",
  "Tomgai Special Rice": "assets/food_4.webp",
  "Chicken Fried Rice": "assets/food_5.webp",
  "Egg Fried Rice": "assets/food_6.webp",
  "Vegetable Fried Rice": "assets/food_7.webp",
  "Chicken Masala Rice": "assets/food_8.webp",
  "Hot Garlic Rice": "assets/food_9.webp",
  "Steamed Rice": "assets/food_10.webp",
  "Thai Bangkok Chicken": "assets/food_11.webp",
  "Chicken Manchurian": "assets/food_12.webp",
  "Mongolian Chicken": "assets/food_13.webp",
  "Cashew Nut Chicken": "assets/food_15.webp",
  "Kung Pao Chicken": "assets/food_1.webp",
  "Chicken Chilli Dry": "assets/food_2.webp",
  "Chicken Hot Garlic Sauce": "assets/food_3.webp",
  "Dragon Chicken": "assets/food_4.webp",
  "Beef Chili Dry": "assets/food_5.webp",
  "Mongolian Beef": "assets/food_6.webp",
  "Sweet & Sour Prawns": "assets/food_7.webp",
  "Prawns Hot Garlic Sauce": "assets/food_8.webp",
  "Fish Hot Garlic Sauce": "assets/food_9.webp",
  "Kung Pao Fish": "assets/food_10.webp",
  "Tomgai Signature Soup": "assets/food_11.webp",
  "19B Soup": "assets/food_12.webp",
  "Hot & Sour Soup": "assets/food_13.webp",
  "Thai Clear Soup": "assets/food_15.webp",
  "Chicken Szechuan Soup": "assets/food_1.webp",
  "Chicken Corn Soup": "assets/food_2.webp",
  "Cream & Mushrooms Soup": "assets/food_3.webp",
  "Chicken Caesar Salad": "assets/food_4.webp",
  "Waldorf Salad": "assets/food_5.webp",
  "Chicken Pineapple Salad": "assets/food_6.webp",
  "Deluxe Russian Salad": "assets/food_7.webp",
  "Tomgai Signature Sandwich": "assets/food_8.webp",
  "Club Sandwich": "assets/food_9.webp",
  "Peri Peri Sandwich": "assets/food_10.webp",
  "Crunchy Fried Fish Sandwich": "assets/food_11.webp",
  "BBQ Grill & Cheese Sandwich": "assets/food_12.webp",
  "California Panini Sandwich": "assets/food_13.webp",
  "Tower Burger": "assets/food_15.webp",
  "Moroccan Burger": "assets/food_1.webp",
  "Schezwan Burger": "assets/food_2.webp",
  "Tomgai Special Jumbo Wrap": "assets/food_3.webp",
  "Grill Chicken Wrap": "assets/food_4.webp",
  "Crunchy Wrap": "assets/food_5.webp",
  "Tuscan Polo Chicken": "assets/food_6.webp",
  "Stuffed Chicken": "assets/food_7.webp",
  "Mushroom Chicken with Brown Sauce": "assets/food_8.webp",
  "Parmesan Cheese Chicken": "assets/food_9.webp",
  "Italian Chicken": "assets/food_10.webp",
  "Butter Mushroom Steak": "assets/food_11.webp",
  "Tarragon Chicken with White Sauce": "assets/food_12.webp",
  "Moroccan Chicken Steak": "assets/food_13.webp",
  "Lemon Butter Fish Steak": "assets/food_15.webp",
  "Chicken Lasagna Pasta": "assets/food_1.webp",
  "Fettuccine Alfredo Pasta": "assets/food_2.webp",
  "Classic Penne Pasta": "assets/food_3.webp",
  "Macaroni Pasta Bake": "assets/food_4.webp",
  "Arrabbiata Pasta": "assets/food_5.webp",
  "Blue Lady": "assets/food_6.webp",
  "Pink Lady": "assets/food_7.webp",
  "Pina Colada": "assets/food_8.webp",
  "Strawberry Margarita": "assets/food_9.webp",
  "Mint Margarita": "assets/food_10.webp",
  "Peach Margarita": "assets/food_11.webp",
  "Cocktail Mojito": "assets/food_12.webp",
  "Orange Mojito": "assets/food_13.webp",
  "Lemon Spark": "assets/food_15.webp",
  "Fresh Lime": "assets/food_1.webp",
  "Water Large": "assets/food_2.webp",
  "Water Small": "assets/food_3.webp",
  "Soft Drink": "assets/food_4.webp"
};

menuData.forEach((item) => {
  item.image = dishImageMap[item.name] || item.image;
});

const menuImageMap = {
  "Appetizers": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "Chinese Noodles": "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=85",
  "Chinese Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Main Course": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  "Soups": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Salads": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
  "Panini Grilled Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "Burgers": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Wraps": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "Continental": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
  "Steaks": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  "Pasta": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
  "Cold Beverages": "https://images.unsplash.com/photo-1544145945-f90425350222?auto=format&fit=crop&w=900&q=85"
};

const galleryItems = [
  { src: "assets/interior_1.webp", alt: "Warm and elegant restaurant interior", label: "Dining room" },
  { src: "assets/food_1.webp", alt: "Colourful Chinese meal served at Tomgai", label: "Signature plates" },
  { src: "assets/interior_2.webp", alt: "Restaurant ambience and seating", label: "Ambience" },
  { src: "assets/food_3.webp", alt: "Freshly prepared Asian dish", label: "Fresh flavours" },
  { src: "assets/food_5.webp", alt: "A beautifully plated restaurant meal", label: "Beautifully plated" },
  { src: "assets/interior_3.webp", alt: "Warm light inside Tomgai", label: "Evening atmosphere" },
  { src: "assets/food_10.webp", alt: "A rich, hearty meal", label: "Comfort food" },
  { src: "assets/interior_4.webp", alt: "Focused restaurant dining experience", label: "Fine dining" }
];

const reviews = [
  { name: "Zaria", text: "Had such a lovely experience here! The food was delicious, the interior was beautifully designed, and the overall atmosphere was warm and welcoming. It's a great family-friendly place where you can enjoy a nice meal in a comfortable and beautiful setting. Definitely recommend visiting.", ratings: "Food 5 · Service 5 · Atmosphere 5" },
  { name: "Hamza Mansoor", text: "Food 10/10 must recommended. There staff behavior is extra nice really shout out to there manager there he's such a great person accommodated us very efficiently. So if you're a Chinese lover this place should be your go to place in Sargodha.", ratings: "Guest favourite" },
  { name: "Nishwa Tasawwar", text: "Finally a nice fine dine in Sgd, tastes much better and the ambience is amazing, too.", ratings: "Food · Ambience" },
  { name: "Zara", text: "Had such a lovely experience here! The food was delicious, the interior was beautifully designed, and the overall atmosphere was warm and welcoming. It's a great family-friendly place where you can enjoy a nice meal in a comfortable and beautiful setting. Definitely recommend visiting.", ratings: "Food 5 · Service 5 · Atmosphere 5" }
];

const menuGrid = document.querySelector("#menu-grid");
const categoryFilters = document.querySelector("#category-filters");
const menuModal = document.querySelector("#menu-modal");
const galleryGrid = document.querySelector("#gallery-grid");
const galleryModal = document.querySelector("#gallery-modal");
const galleryImage = document.querySelector("#gallery-lightbox-image");
const galleryTitle = document.querySelector("#gallery-modal-title");
const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-navigation");
const reviewsTrack = document.querySelector("#reviews-track");
const menuShowToggle = document.querySelector("#menu-show-toggle");
let activeCategory = "All";
let showAllMenu = false;
let lastFocusedElement = null;
const defaultVisibleItems = 10;

function formatPrice(price) {
  return price.replace(" / ", "<span> / </span>");
}

function menuCard(item, visibleIndex) {
  const image = item.image || menuImageMap[item.category] || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85";
  return `
    <article class="menu-card" data-category="${item.category}" data-title="${item.name}" data-index="${visibleIndex}">
      <div class="menu-card-image">
        <img src="${image}" alt="${item.name}" loading="lazy" width="700" height="450">
        <span class="menu-card-category">${item.category}</span>
      </div>
      <div class="menu-card-content">
        <div class="menu-card-top">
          <h3>${item.name}</h3>
          <span class="menu-card-price">Rs. ${formatPrice(item.price)}</span>
        </div>
        <p>${item.category}</p>
      </div>
    </article>`;
}

function getVisibleMenuItems() {
  const filteredItems = activeCategory === "All"
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return filteredItems;
}

function updateMenuToggleButton() {
  if (!menuShowToggle) return;
  const filteredItems = getVisibleMenuItems();
  const hiddenCount = Math.max(0, filteredItems.length - defaultVisibleItems);

  if (filteredItems.length <= defaultVisibleItems) {
    menuShowToggle.hidden = true;
    menuShowToggle.textContent = "View All";
    menuShowToggle.setAttribute("aria-expanded", "false");
    return;
  }

  menuShowToggle.hidden = false;
  menuShowToggle.textContent = showAllMenu ? "Show Less" : `View All (${hiddenCount})`;
  menuShowToggle.setAttribute("aria-expanded", String(showAllMenu));
}

function renderMenu() {
  const allMenuItems = menuData.map((item, index) => menuCard(item, index)).join("");

  menuGrid.innerHTML = allMenuItems;
  categoryFilters.innerHTML = ["All", ...categories].map((category) => `
    <button class="filter-button" type="button" data-filter="${category}" aria-pressed="${category === activeCategory}">${category}</button>
  `).join("");

  updateMenuToggleButton();
  filterMenu(activeCategory);
}

function filterMenu(category) {
  activeCategory = category;
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const filteredItems = getVisibleMenuItems();
  const visibleItems = showAllMenu ? filteredItems : filteredItems.slice(0, defaultVisibleItems);
  const visibleNames = new Set(visibleItems.map((item) => item.name));

  document.querySelectorAll(".menu-card").forEach((card) => {
    const matchesCategory = category === "All" || card.dataset.category === category;
    card.hidden = !matchesCategory || !visibleNames.has(card.dataset.title);
  });

  updateMenuToggleButton();
}

function setModal(modal, open) {
  if (!modal) return;
  modal.hidden = !open;
  document.body.classList.toggle("modal-open", open);
  if (open) {
    lastFocusedElement = document.activeElement;
    modal.querySelector("button")?.focus();
  } else if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openGalleryItem(index) {
  const item = galleryItems[index];
  if (!item) return;
  lastFocusedElement = document.activeElement;
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryTitle.textContent = item.label;
  galleryModal.hidden = false;
  document.body.classList.add("modal-open");
  galleryModal.querySelector(".lightbox-close").focus();
}

function closeGallery() {
  galleryModal.hidden = true;
  document.body.classList.remove("modal-open");
  galleryImage.src = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <figure class="gallery-item reveal">
      <button class="gallery-item-button" type="button" aria-label="Open ${item.alt}" data-gallery-index="${index}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy" width="900" height="700">
        <span>${item.label}</span>
      </button>
    </figure>`).join("");

  galleryGrid.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => openGalleryItem(Number(button.dataset.galleryIndex)));
  });
}

function renderReviews() {
  const duplicatedReviews = [...reviews, ...reviews];
  reviewsTrack.innerHTML = duplicatedReviews.map((review) => `
    <article class="review-card">
      <div class="stars" aria-label="${review.ratings}">${"â˜…".repeat(5)}</div>
      <blockquote>â€œ${review.text}â€</blockquote>
      <div class="review-author">
        <strong>${review.name}</strong>
        <span>${review.ratings}</span>
      </div>
    </article>`).join("");
}

function setupNavigation() {
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    header.classList.toggle("menu-active", document.querySelector(".primary-nav.open"));
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    primaryNav.classList.toggle("open", !isOpen);
    header.classList.toggle("menu-active", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      primaryNav.classList.remove("open");
      header.classList.remove("menu-active");
    });
  });
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.11, rootMargin: "0px 0px -45px 0px" });

  revealElements.forEach((element) => observer.observe(element));
}

function setupModals() {
  document.querySelector("#full-menu-button").addEventListener("click", () => setModal(menuModal, true));
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", () => setModal(menuModal, false));
  });
  document.querySelectorAll("[data-close-gallery]").forEach((element) => {
    element.addEventListener("click", closeGallery);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!menuModal.hidden) setModal(menuModal, false);
      if (!galleryModal.hidden) closeGallery();
    }
  });

  menuModal.addEventListener("click", (event) => {
    if (event.target === menuModal) setModal(menuModal, false);
  });
}

function setupHeroTimeline() {
  const heroElements = document.querySelectorAll(".hero .reveal");
  requestAnimationFrame(() => heroElements.forEach((element, index) => {
    window.setTimeout(() => element.classList.add("visible"), 180 + index * 140);
  }));
}

function init() {
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  renderMenu();
  renderGallery();
  renderReviews();
  setupNavigation();
  setupModals();
  setupRevealAnimations();
  setupHeroTimeline();

  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button) {
      showAllMenu = false;
      filterMenu(button.dataset.filter);
    }
  });

  if (menuShowToggle) {
    menuShowToggle.addEventListener("click", () => {
      const filteredItems = getVisibleMenuItems();
      if (filteredItems.length <= defaultVisibleItems) return;

      showAllMenu = !showAllMenu;
      filterMenu(activeCategory);
    });
  }
}

init();
