const menuItems = [
  {
    name: "Pancakes",
    category: "breakfast",
    image: "https://source.unsplash.com/250x160/?pancakes",
    desc: "Fluffy pancakes with maple syrup."
  },
  {
    name: "Omelette",
    category: "breakfast",
    image: "https://source.unsplash.com/250x160/?omelette",
    desc: "Cheesy egg omelette with veggies."
  },
  {
    name: "Burger",
    category: "lunch",
    image: "https://source.unsplash.com/250x160/?burger",
    desc: "Grilled beef burger with cheese."
  },
  {
    name: "Salad",
    category: "lunch",
    image: "https://source.unsplash.com/250x160/?salad",
    desc: "Fresh mixed green salad."
  },
  {
    name: "Steak",
    category: "dinner",
    image: "https://source.unsplash.com/250x160/?steak",
    desc: "Juicy grilled steak with herbs."
  },
  {
    name: "Pasta",
    category: "dinner",
    image: "https://source.unsplash.com/250x160/?pasta",
    desc: "Creamy alfredo pasta with garlic bread."
  }
];

const menuContainer = document.getElementById('menu-container');
const tabs = document.querySelectorAll('.tab');

// Render menu items
function renderMenu(category) {
  menuContainer.innerHTML = ''; // Clear existing items
  const filtered = category === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    `;
    menuContainer.appendChild(card);
  });
}

// Tab click event
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

// Initial render
renderMenu('all');
