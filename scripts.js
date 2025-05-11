function showCategory(category) {
    const main = document.getElementById('main-content');
    
    if (category === 'amulets') {
      main.innerHTML = `
        <h2>Амулети</h2>
        <div class="products">
          <div class="product-card">
            <img src="amulet1.png" alt="Амулет Сили">
            <h4>Амулет Сили</h4>
            <p>Додає неймовірну фізичну силу.</p>
            <div class="price">500 золота</div>
            <button>Купити</button>
          </div>
          <!-- More amulet products here -->
        </div>
        <button class="back-button" onclick="location.reload()">Назад до категорій</button>
      `;
    }
  
    if (category === 'weapons') {
      main.innerHTML = `
        <h2>Зброя</h2>
        <div class="products">
          <div class="product-card">
            <img src="sword.png" alt="Меч Дракона">
            <h4>Меч Дракона</h4>
            <p>Меч, що володіє силою вогню.</p>
            <div class="price">1000 золота</div>
            <button>Купити</button>
          </div>
          <!-- More weapon products here -->
        </div>
        <button class="back-button" onclick="location.reload()">Назад до категорій</button>
      `;
    }
  
    if (category === 'armor') {
      main.innerHTML = `
        <h2>Броня</h2>
        <div class="products">
          <div class="product-card">
            <img src="armor1.png" alt="Броня Воїна">
            <h4>Броня Воїна</h4>
            <p>Захищає від магічних атак.</p>
            <div class="price">800 золота</div>
            <button>Купити</button>
          </div>
          <!-- More armor products here -->
        </div>
        <button class="back-button" onclick="location.reload()">Назад до категорій</button>
      `;
    }
  
    if (category === 'artifacts') {
      main.innerHTML = `
        <h2>Артефакти</h2>
        <div class="products">
          <div class="product-card">
            <img src="artifact1.png" alt="Артефакт Вічності">
            <h4>Артефакт Вічності</h4>
            <p>Дає безсмертя.</p>
            <div class="price">5000 золота</div>
            <button>Купити</button>
          </div>
          <!-- More artifact products here -->
        </div>
        <button class="back-button" onclick="location.reload()">Назад до категорій</button>
      `;
    }
  
    if (category === 'potions') {
      main.innerHTML = `
        <h2>Зіля</h2>
        <div class="products">
          <div class="product-card">
            <img src="potion1.png" alt="Зілля Життя">
            <h4>Зілля Життя</h4>
            <p>Відновлює здоров'я.</p>
            <div class="price">200 золота</div>
            <button>Купити</button>
          </div>
          <!-- More potion products here -->
        </div>
        <button class="back-button" onclick="location.reload()">Назад до категорій</button>
      `;
    }
  }
  
