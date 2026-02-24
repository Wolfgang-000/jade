const app = {
    currentPage: 'home',
    user: null,
    cart: [],
    favorites: [],
    orders: [],
    currentProduct: null,
    filters: {
        category: 'all',
        sort: 'default',
        priceMin: '',
        priceMax: ''
    }
};

const products = [
    {
        id: 1,
        name: '冰种翡翠观音吊坠',
        description: '精选缅甸冰种翡翠，通透温润，雕工精湛，观音大慈大悲，保平安吉祥。',
        price: 28888,
        originalPrice: 35888,
        category: '吊坠',
        material: '冰种翡翠',
        spec: '尺寸：45x30x8mm',
        weight: '25g',
        certification: '国家级鉴定证书',
        stock: 5,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20green%20jade%20pendant%20jewelry%20elegant%20Chinese%20style&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20pendant%20close%20up%20detail%20high%20quality&image_size=square_hd'
        ],
        badge: 'hot',
        tags: ['新品', '热销']
    },
    {
        id: 2,
        name: '帝王绿翡翠手镯',
        description: '极品帝王绿翡翠，色泽浓郁均匀，质地细腻通透，收藏级珍品，传世之作。',
        price: 188888,
        originalPrice: 258888,
        category: '手镯',
        material: '帝王绿翡翠',
        spec: '圈口：58mm',
        weight: '65g',
        certification: '国家级鉴定证书',
        stock: 2,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20jade%20bracelet%20high%20quality%20jewelry%20elegant&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20jade%20bracelet%20close%20up&image_size=square_hd'
        ],
        badge: 'hot',
        tags: ['收藏级', '限量']
    },
    {
        id: 3,
        name: '18K金镶翡翠戒指',
        description: '奢华18K金镶嵌，配以优质翡翠，设计简约大方，彰显尊贵气质。',
        price: 15888,
        originalPrice: 19888,
        category: '戒指',
        material: '18K金 + 翡翠',
        spec: '圈号：13-17号可选',
        weight: '8g',
        certification: '国家级鉴定证书',
        stock: 12,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20ring%20with%20gold%20setting%20luxury%20jewelry&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=gold%20jade%20ring%20detail&image_size=square_hd'
        ],
        badge: 'new',
        tags: ['新品', '推荐']
    },
    {
        id: 4,
        name: '冰种翡翠耳坠',
        description: '温润如玉，灵动优雅，冰种翡翠配以精美设计，展现东方女性之美。',
        price: 22888,
        originalPrice: 28888,
        category: '耳饰',
        material: '冰种翡翠 + 18K金',
        spec: '尺寸：25x12mm',
        weight: '12g',
        certification: '国家级鉴定证书',
        stock: 8,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20earrings%20elegant%20Chinese%20jewelry%20green&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20jade%20earrings%20close%20up&image_size=square_hd'
        ],
        badge: '',
        tags: ['推荐']
    },
    {
        id: 5,
        name: '飘花翡翠项链',
        description: '天然飘花翡翠，意境优美，配以精美链身，佩戴典雅高贵。',
        price: 35888,
        originalPrice: 45888,
        category: '项链',
        material: '飘花翡翠 + 18K金',
        spec: '链长：45cm',
        weight: '35g',
        certification: '国家级鉴定证书',
        stock: 6,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20necklace%20elegant%20jewelry%20luxury&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20jade%20pendant%20necklace%20detail&image_size=square_hd'
        ],
        badge: 'new',
        tags: ['新品']
    },
    {
        id: 6,
        name: '黄翡貔貅手把件',
        description: '精选黄翡，雕刻貔貅瑞兽，寓意招财进宝，辟邪保平安。',
        price: 12888,
        originalPrice: 16888,
        category: '手把件',
        material: '黄翡',
        spec: '尺寸：60x40x30mm',
        weight: '85g',
        certification: '国家级鉴定证书',
        stock: 10,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yellow%20jade%20carving%20Chinese%20style%20pixiu&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20carving%20detail%20close%20up&image_size=square_hd'
        ],
        badge: '',
        tags: ['推荐']
    },
    {
        id: 7,
        name: '紫罗兰翡翠平安扣',
        description: '罕见紫罗兰翡翠，色泽温润，平安扣寓意平平安安，圆满如意。',
        price: 45888,
        originalPrice: 58888,
        category: '吊坠',
        material: '紫罗兰翡翠',
        spec: '直径：35mm',
        weight: '20g',
        certification: '国家级鉴定证书',
        stock: 3,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=purple%20jade%20pendant%20safety%20coin%20jewelry&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lavender%20jade%20close%20up%20detail&image_size=square_hd'
        ],
        badge: 'hot',
        tags: ['稀有', '收藏级']
    },
    {
        id: 8,
        name: '墨翠龙牌挂件',
        description: '顶级墨翠，黑中透绿，雕刻龙纹，尊贵大气，彰显王者风范。',
        price: 52888,
        originalPrice: 68888,
        category: '吊坠',
        material: '墨翠',
        spec: '尺寸：60x40x10mm',
        weight: '45g',
        certification: '国家级鉴定证书',
        stock: 4,
        images: [
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=black%20jade%20dragon%20carving%20pendant%20luxury&image_size=square_hd',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20jade%20carving%20detail&image_size=square_hd'
        ],
        badge: '',
        tags: ['收藏级']
    }
];

const categories = ['全部', '吊坠', '手镯', '戒指', '耳饰', '项链', '手把件'];

function init() {
    loadFromStorage();
    navigateTo('home');
    updateCartBadge();
    updateUserUI();
}

function saveToStorage() {
    localStorage.setItem('jade_cart', JSON.stringify(app.cart));
    localStorage.setItem('jade_favorites', JSON.stringify(app.favorites));
    localStorage.setItem('jade_orders', JSON.stringify(app.orders));
    localStorage.setItem('jade_user', JSON.stringify(app.user));
}

function loadFromStorage() {
    const cart = localStorage.getItem('jade_cart');
    const favorites = localStorage.getItem('jade_favorites');
    const orders = localStorage.getItem('jade_orders');
    const user = localStorage.getItem('jade_user');
    
    if (cart) app.cart = JSON.parse(cart);
    if (favorites) app.favorites = JSON.parse(favorites);
    if (orders) app.orders = JSON.parse(orders);
    if (user) app.user = JSON.parse(user);
}

function navigateTo(page, params = {}) {
    app.currentPage = page;
    updateNavigation();
    
    const mainContent = document.getElementById('mainContent');
    
    switch(page) {
        case 'home':
            renderHomePage();
            break;
        case 'products':
            renderProductsPage();
            break;
        case 'product':
            renderProductPage(params.id);
            break;
        case 'cart':
            renderCartPage();
            break;
        case 'checkout':
            renderCheckoutPage();
            break;
        case 'login':
            renderLoginPage();
            break;
        case 'register':
            renderRegisterPage();
            break;
        case 'profile':
            renderProfilePage();
            break;
        case 'orders':
            renderOrdersPage();
            break;
        case 'favorites':
            renderFavoritesPage();
            break;
        default:
            renderHomePage();
    }
}

function updateNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === app.currentPage) {
            item.classList.add('active');
        }
    });
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = app.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateUserUI() {
    const userLink = document.getElementById('userLink');
    if (app.user) {
        userLink.innerHTML = `<i class="fas fa-user"></i> ${app.user.name}`;
        userLink.onclick = () => navigateTo('profile');
    } else {
        userLink.innerHTML = '登录';
        userLink.onclick = () => navigateTo('login');
    }
}

function renderHomePage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="hero">
            <div class="hero-content">
                <h2>翠韵天成 · 玉润人生</h2>
                <p>精选缅甸顶级翡翠，传承东方美学精髓</p>
                <button class="btn" onclick="navigateTo('products')">探索精品</button>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <div class="feature-grid">
                    <div class="feature-item">
                        <i class="fas fa-certificate"></i>
                        <h3>正品保证</h3>
                        <p>每件翡翠均通过权威鉴定</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-gem"></i>
                        <h3>匠心工艺</h3>
                        <p>传承百年雕刻技艺</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-tools"></i>
                        <h3>终身保养</h3>
                        <p>专业的售后保养服务</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-shipping-fast"></i>
                        <h3>全国配送</h3>
                        <p>安全可靠的物流保障</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="categories-section">
            <div class="container">
                <div class="section-title">
                    <h2>精品分类</h2>
                    <p>探索各类翡翠珍品</p>
                </div>
                <div class="category-grid">
                    <div class="category-item" onclick="filterByCategory('吊坠')">
                        <i class="fas fa-necklace"></i>
                        <h3>吊坠</h3>
                        <p>吉祥寓意</p>
                    </div>
                    <div class="category-item" onclick="filterByCategory('手镯')">
                        <i class="fas fa-ring"></i>
                        <h3>手镯</h3>
                        <p>圆满如意</p>
                    </div>
                    <div class="category-item" onclick="filterByCategory('戒指')">
                        <i class="fas fa-gem"></i>
                        <h3>戒指</h3>
                        <p>尊贵典雅</p>
                    </div>
                    <div class="category-item" onclick="filterByCategory('耳饰')">
                        <i class="fas fa-star"></i>
                        <h3>耳饰</h3>
                        <p>灵动优雅</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="products">
            <div class="container">
                <div class="section-title">
                    <h2>精选翡翠饰品</h2>
                    <p>每一件都是独一无二的艺术品</p>
                </div>
                <div class="product-grid">
                    ${products.slice(0, 4).map(product => renderProductCard(product)).join('')}
                </div>
                <div style="text-align: center; margin-top: 40px;">
                    <button class="btn" onclick="navigateTo('products')">查看更多</button>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <h2>品牌故事</h2>
                        <p>御翠珠宝创立于1920年，是中国百年珠宝老字号。我们专注于翡翠珠宝的设计与制作，坚持"御翠臻品，尊贵传承"的品牌理念。</p>
                        <p>每一件御翠珠宝的翡翠，都源自缅甸顶级矿场，经过我们资深工匠的精心雕琢，将东方美学与现代工艺完美融合。</p>
                        <button class="btn" onclick="navigateTo('products')">探索精品</button>
                    </div>
                    <div class="about-image">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20Chinese%20jewelry%20store%20elegant%20luxury%20interior&image_size=square_hd" alt="品牌故事">
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderProductCard(product) {
    const isFavorite = app.favorites.includes(product.id);
    return `
        <div class="product-card" onclick="navigateTo('product', {id: ${product.id}})">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'new' ? '新品' : '热销'}</div>` : ''}
            <div class="product-favorite" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
            </div>
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.material}</p>
                <div class="product-meta">
                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>
                <p class="product-price">¥${product.price.toLocaleString()}</p>
                <div class="product-actions">
                    <button class="btn btn-small" onclick="event.stopPropagation(); addToCart(${product.id})">加入购物车</button>
                    <button class="btn btn-small btn-outline" onclick="event.stopPropagation(); navigateTo('product', {id: ${product.id}})">详情</button>
                </div>
            </div>
        </div>
    `;
}

function filterByCategory(category) {
    app.filters.category = category;
    navigateTo('products');
}

function renderProductsPage() {
    const mainContent = document.getElementById('mainContent');
    let filteredProducts = [...products];
    
    if (app.filters.category && app.filters.category !== 'all' && app.filters.category !== '全部') {
        filteredProducts = filteredProducts.filter(p => p.category === app.filters.category);
    }
    
    if (app.filters.priceMin) {
        filteredProducts = filteredProducts.filter(p => p.price >= parseInt(app.filters.priceMin));
    }
    if (app.filters.priceMax) {
        filteredProducts = filteredProducts.filter(p => p.price <= parseInt(app.filters.priceMax));
    }
    
    if (app.filters.sort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (app.filters.sort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    mainContent.innerHTML = `
        <div class="products-page">
            <div class="container">
                <div class="section-title">
                    <h2>翡翠饰品</h2>
                    <p>共找到 ${filteredProducts.length} 件商品</p>
                </div>
                
                <div class="filter-bar">
                    <div class="filter-group">
                        <label>分类：</label>
                        <select onchange="updateFilter('category', this.value)">
                            ${categories.map(cat => `<option value="${cat}" ${app.filters.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>排序：</label>
                        <select onchange="updateFilter('sort', this.value)">
                            <option value="default" ${app.filters.sort === 'default' ? 'selected' : ''}>默认排序</option>
                            <option value="price-asc" ${app.filters.sort === 'price-asc' ? 'selected' : ''}>价格从低到高</option>
                            <option value="price-desc" ${app.filters.sort === 'price-desc' ? 'selected' : ''}>价格从高到低</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>价格：</label>
                        <div class="price-range">
                            <input type="number" placeholder="最低" value="${app.filters.priceMin}" onchange="updateFilter('priceMin', this.value)">
                            <span>-</span>
                            <input type="number" placeholder="最高" value="${app.filters.priceMax}" onchange="updateFilter('priceMax', this.value)">
                        </div>
                    </div>
                    <button class="btn btn-small" onclick="resetFilters()">重置</button>
                </div>
                
                <div class="product-grid">
                    ${filteredProducts.length > 0 
                        ? filteredProducts.map(product => renderProductCard(product)).join('')
                        : '<div style="grid-column: 1/-1; text-align: center; padding: 80px;"><h3>暂无符合条件的商品</h3></div>'
                    }
                </div>
            </div>
        </div>
    `;
}

function updateFilter(key, value) {
    app.filters[key] = value;
    renderProductsPage();
}

function resetFilters() {
    app.filters = {
        category: '全部',
        sort: 'default',
        priceMin: '',
        priceMax: ''
    };
    renderProductsPage();
}

function renderProductPage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        navigateTo('products');
        return;
    }
    
    app.currentProduct = product;
    const isFavorite = app.favorites.includes(product.id);
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="product-detail">
            <div class="container">
                <div class="detail-container">
                    <div class="detail-gallery">
                        <div class="main-image">
                            <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
                        </div>
                        <div class="thumbnail-list">
                            ${product.images.map((img, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                                    <img src="${img}" alt="">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="detail-info">
                        <h1>${product.name}</h1>
                        <p class="detail-price">¥${product.price.toLocaleString()}</p>
                        <p style="color: #999; text-decoration: line-through; margin-bottom: 20px;">原价：¥${product.originalPrice.toLocaleString()}</p>
                        <p class="detail-description">${product.description}</p>
                        
                        <div class="detail-specs">
                            <h3>商品参数</h3>
                            <div class="spec-item">
                                <span class="spec-label">材质</span>
                                <span class="spec-value">${product.material}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">规格</span>
                                <span class="spec-value">${product.spec}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">重量</span>
                                <span class="spec-value">${product.weight}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">证书</span>
                                <span class="spec-value">${product.certification}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">库存</span>
                                <span class="spec-value">${product.stock} 件</span>
                            </div>
                        </div>
                        
                        <div class="quantity-selector">
                            <label>数量：</label>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                                <input type="text" class="quantity-input" id="quantityInput" value="1" readonly>
                                <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                            </div>
                        </div>
                        
                        <div class="detail-actions">
                            <button class="btn" onclick="addToCart(${product.id}, true)">立即购买</button>
                            <button class="btn btn-outline" onclick="addToCart(${product.id})">加入购物车</button>
                            <button class="btn btn-outline" onclick="toggleFavorite(${product.id})">
                                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${isFavorite ? '已收藏' : '收藏'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function changeMainImage(src, element) {
    document.getElementById('mainProductImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function changeQuantity(delta) {
    const input = document.getElementById('quantityInput');
    let value = parseInt(input.value) + delta;
    value = Math.max(1, Math.min(value, app.currentProduct.stock));
    input.value = value;
}

function renderCartPage() {
    const mainContent = document.getElementById('mainContent');
    const total = app.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    mainContent.innerHTML = `
        <div class="cart-page">
            <div class="container">
                <div class="section-title">
                    <h2>购物车</h2>
                </div>
                
                ${app.cart.length > 0 ? `
                    <div class="cart-container">
                        <div class="cart-items">
                            <div class="cart-header">
                                <span>商品</span>
                                <span>单价</span>
                                <span>数量</span>
                                <span>操作</span>
                            </div>
                            ${app.cart.map(item => {
                                const product = products.find(p => p.id === item.productId);
                                if (!product) return '';
                                return `
                                    <div class="cart-item">
                                        <div class="cart-product">
                                            <div class="cart-product-img">
                                                <img src="${product.images[0]}" alt="${product.name}">
                                            </div>
                                            <div class="cart-product-info">
                                                <h4 onclick="navigateTo('product', {id: ${product.id}})" style="cursor: pointer;">${product.name}</h4>
                                                <p>${product.material}</p>
                                            </div>
                                        </div>
                                        <div class="cart-price">¥${product.price.toLocaleString()}</div>
                                        <div class="quantity-controls">
                                            <button class="quantity-btn" onclick="updateCartItem(${item.productId}, ${item.quantity - 1})">-</button>
                                            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                                            <button class="quantity-btn" onclick="updateCartItem(${item.productId}, ${item.quantity + 1})">+</button>
                                        </div>
                                        <button class="btn btn-danger btn-small" onclick="removeFromCart(${item.productId})">删除</button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div class="cart-summary">
                            <h3>订单摘要</h3>
                            <div class="summary-row">
                                <span>商品数量</span>
                                <span>${app.cart.reduce((sum, item) => sum + item.quantity, 0)} 件</span>
                            </div>
                            <div class="summary-row">
                                <span>商品金额</span>
                                <span>¥${total.toLocaleString()}</span>
                            </div>
                            <div class="summary-row">
                                <span>运费</span>
                                <span>¥0</span>
                            </div>
                            <div class="summary-row total">
                                <span>合计</span>
                                <span>¥${total.toLocaleString()}</span>
                            </div>
                            <button class="btn" style="width: 100%; margin-top: 20px;" onclick="navigateTo('checkout')">去结算</button>
                            <button class="btn btn-outline" style="width: 100%; margin-top: 10px;" onclick="navigateTo('products')">继续购物</button>
                        </div>
                    </div>
                ` : `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>购物车是空的</h3>
                        <p>快去挑选心仪的翡翠吧！</p>
                        <button class="btn" onclick="navigateTo('products')">去购物</button>
                    </div>
                `}
            </div>
        </div>
    `;
}

function addToCart(productId, goToCart = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantityInput = document.getElementById('quantityInput');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    const existingItem = app.cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        app.cart.push({ productId, quantity });
    }
    
    saveToStorage();
    updateCartBadge();
    showToast('已添加到购物车', 'success');
    
    if (goToCart) {
        navigateTo('checkout');
    }
}

function updateCartItem(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product && quantity > product.stock) {
        showToast('库存不足', 'error');
        return;
    }
    
    const item = app.cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = quantity;
        saveToStorage();
        updateCartBadge();
        renderCartPage();
    }
}

function removeFromCart(productId) {
    app.cart = app.cart.filter(item => item.productId !== productId);
    saveToStorage();
    updateCartBadge();
    renderCartPage();
    showToast('已从购物车移除', 'success');
}

function renderCheckoutPage() {
    if (app.cart.length === 0) {
        navigateTo('cart');
        return;
    }
    
    if (!app.user) {
        showToast('请先登录', 'info');
        navigateTo('login');
        return;
    }
    
    const total = app.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="checkout-page">
            <div class="container">
                <div class="section-title">
                    <h2>确认订单</h2>
                </div>
                
                <div class="checkout-container">
                    <div class="checkout-form">
                        <div class="checkout-section">
                            <h3>收货信息</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>收货人姓名</label>
                                    <input type="text" id="receiverName" value="${app.user.name || ''}" placeholder="请输入收货人姓名">
                                </div>
                                <div class="form-group">
                                    <label>联系电话</label>
                                    <input type="text" id="receiverPhone" value="${app.user.phone || ''}" placeholder="请输入联系电话">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>收货地址</label>
                                <textarea id="receiverAddress" rows="3" placeholder="请输入详细收货地址">${app.user.address || ''}</textarea>
                            </div>
                        </div>
                        
                        <div class="checkout-section">
                            <h3>支付方式</h3>
                            <div class="payment-methods">
                                <div class="payment-method" onclick="selectPayment(this, 'wechat')">
                                    <input type="radio" name="payment" value="wechat" checked>
                                    <i class="fab fa-weixin"></i>
                                    <label>微信支付</label>
                                </div>
                                <div class="payment-method" onclick="selectPayment(this, 'alipay')">
                                    <input type="radio" name="payment" value="alipay">
                                    <i class="fab fa-alipay"></i>
                                    <label>支付宝</label>
                                </div>
                                <div class="payment-method" onclick="selectPayment(this, 'card')">
                                    <input type="radio" name="payment" value="card">
                                    <i class="fas fa-credit-card"></i>
                                    <label>银行卡支付</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="checkout-section">
                            <h3>订单备注</h3>
                            <div class="form-group">
                                <textarea id="orderNote" rows="3" placeholder="如有特殊要求请在此说明..."></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div class="checkout-summary">
                        <h3>订单摘要</h3>
                        <div class="checkout-items">
                            ${app.cart.map(item => {
                                const product = products.find(p => p.id === item.productId);
                                if (!product) return '';
                                return `
                                    <div class="checkout-item">
                                        <div class="checkout-item-img">
                                            <img src="${product.images[0]}" alt="${product.name}">
                                        </div>
                                        <div class="checkout-item-info">
                                            <h4>${product.name}</h4>
                                            <span class="checkout-item-price">¥${product.price.toLocaleString()} x ${item.quantity}</span>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div class="summary-row">
                            <span>商品金额</span>
                            <span>¥${total.toLocaleString()}</span>
                        </div>
                        <div class="summary-row">
                            <span>运费</span>
                            <span>¥0</span>
                        </div>
                        <div class="summary-row total">
                            <span>应付金额</span>
                            <span>¥${total.toLocaleString()}</span>
                        </div>
                        <button class="btn btn-success" style="width: 100%; margin-top: 20px;" onclick="submitOrder()">
                            确认支付 ¥${total.toLocaleString()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function selectPayment(element, method) {
    document.querySelectorAll('.payment-method').forEach(pm => {
        pm.style.borderColor = '#e0e0e0';
    });
    element.style.borderColor = '#d4af37';
    element.querySelector('input').checked = true;
}

function submitOrder() {
    const name = document.getElementById('receiverName').value;
    const phone = document.getElementById('receiverPhone').value;
    const address = document.getElementById('receiverAddress').value;
    const note = document.getElementById('orderNote').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (!name || !phone || !address) {
        showToast('请填写完整的收货信息', 'error');
        return;
    }
    
    const total = app.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const order = {
        id: 'ORD' + Date.now(),
        items: [...app.cart],
        total: total,
        receiver: { name, phone, address },
        paymentMethod: paymentMethod,
        note: note,
        status: 'paid',
        createdAt: new Date().toISOString()
    };
    
    app.orders.unshift(order);
    app.cart = [];
    saveToStorage();
    updateCartBadge();
    
    showModal('success', '支付成功', `订单 ${order.id} 已创建，我们将尽快为您发货！`, () => {
        navigateTo('orders');
    });
}

function renderLoginPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="auth-page">
            <div class="auth-container">
                <h2>用户登录</h2>
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label>手机号</label>
                        <input type="text" id="loginPhone" placeholder="请输入手机号" required>
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <input type="password" id="loginPassword" placeholder="请输入密码" required>
                    </div>
                    <button type="submit" class="btn auth-btn">登录</button>
                </form>
                <div class="auth-switch">
                    还没有账号？<a href="#" onclick="navigateTo('register')">立即注册</a>
                </div>
            </div>
        </div>
    `;
}

function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    app.user = {
        id: 1,
        name: '珠宝爱好者',
        phone: phone,
        email: '',
        address: ''
    };
    
    saveToStorage();
    updateUserUI();
    showToast('登录成功', 'success');
    navigateTo('home');
}

function renderRegisterPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="auth-page">
            <div class="auth-container">
                <h2>用户注册</h2>
                <form onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label>姓名</label>
                        <input type="text" id="regName" placeholder="请输入姓名" required>
                    </div>
                    <div class="form-group">
                        <label>手机号</label>
                        <input type="text" id="regPhone" placeholder="请输入手机号" required>
                    </div>
                    <div class="form-group">
                        <label>邮箱</label>
                        <input type="email" id="regEmail" placeholder="请输入邮箱">
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <input type="password" id="regPassword" placeholder="请输入密码" required>
                    </div>
                    <div class="form-group">
                        <label>确认密码</label>
                        <input type="password" id="regPassword2" placeholder="请再次输入密码" required>
                    </div>
                    <button type="submit" class="btn auth-btn">注册</button>
                </form>
                <div class="auth-switch">
                    已有账号？<a href="#" onclick="navigateTo('login')">立即登录</a>
                </div>
            </div>
        </div>
    `;
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const password2 = document.getElementById('regPassword2').value;
    
    if (password !== password2) {
        showToast('两次密码不一致', 'error');
        return;
    }
    
    app.user = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        address: ''
    };
    
    saveToStorage();
    updateUserUI();
    showToast('注册成功', 'success');
    navigateTo('home');
}

function renderProfilePage() {
    if (!app.user) {
        navigateTo('login');
        return;
    }
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="profile-page">
            <div class="container">
                <div class="profile-container">
                    <div class="profile-sidebar">
                        <ul class="profile-nav">
                            <li><a href="#" class="active" onclick="showProfileTab('info')"><i class="fas fa-user"></i> 个人信息</a></li>
                            <li><a href="#" onclick="showProfileTab('address')"><i class="fas fa-map-marker-alt"></i> 收货地址</a></li>
                            <li><a href="#" onclick="navigateTo('orders')"><i class="fas fa-shopping-bag"></i> 我的订单</a></li>
                            <li><a href="#" onclick="navigateTo('favorites')"><i class="fas fa-heart"></i> 我的收藏</a></li>
                            <li><a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> 退出登录</a></li>
                        </ul>
                    </div>
                    <div class="profile-content">
                        <div class="profile-header">
                            <h2>个人信息</h2>
                        </div>
                        <form onsubmit="updateProfile(event)">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>姓名</label>
                                    <input type="text" id="profileName" value="${app.user.name || ''}" placeholder="请输入姓名">
                                </div>
                                <div class="form-group">
                                    <label>手机号</label>
                                    <input type="text" id="profilePhone" value="${app.user.phone || ''}" placeholder="请输入手机号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>邮箱</label>
                                <input type="email" id="profileEmail" value="${app.user.email || ''}" placeholder="请输入邮箱">
                            </div>
                            <div class="form-group">
                                <label>收货地址</label>
                                <textarea id="profileAddress" rows="3" placeholder="请输入收货地址">${app.user.address || ''}</textarea>
                            </div>
                            <button type="submit" class="btn">保存修改</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showProfileTab(tab) {
    document.querySelectorAll('.profile-nav a').forEach(a => a.classList.remove('active'));
    event.target.closest('a').classList.add('active');
}

function updateProfile(e) {
    e.preventDefault();
    app.user.name = document.getElementById('profileName').value;
    app.user.phone = document.getElementById('profilePhone').value;
    app.user.email = document.getElementById('profileEmail').value;
    app.user.address = document.getElementById('profileAddress').value;
    
    saveToStorage();
    updateUserUI();
    showToast('信息已更新', 'success');
}

function logout() {
    app.user = null;
    saveToStorage();
    updateUserUI();
    showToast('已退出登录', 'success');
    navigateTo('home');
}

function renderOrdersPage() {
    if (!app.user) {
        navigateTo('login');
        return;
    }
    
    const mainContent = document.getElementById('mainContent');
    const statusLabels = {
        pending: '待付款',
        paid: '已付款',
        shipped: '已发货',
        completed: '已完成',
        cancelled: '已取消'
    };
    
    mainContent.innerHTML = `
        <div class="orders-page">
            <div class="container">
                <div class="section-title">
                    <h2>我的订单</h2>
                </div>
                
                <div class="orders-filter">
                    <button class="active" onclick="filterOrders('all')">全部订单</button>
                    <button onclick="filterOrders('pending')">待付款</button>
                    <button onclick="filterOrders('paid')">已付款</button>
                    <button onclick="filterOrders('shipped')">已发货</button>
                    <button onclick="filterOrders('completed')">已完成</button>
                </div>
                
                <div id="ordersList">
                    ${app.orders.length > 0 ? app.orders.map(order => `
                        <div class="order-card">
                            <div class="order-header">
                                <div class="order-info">
                                    <span>订单号：<strong>${order.id}</strong></span>
                                    <span>下单时间：<strong>${new Date(order.createdAt).toLocaleString()}</strong></span>
                                </div>
                                <span class="order-status ${order.status}">${statusLabels[order.status]}</span>
                            </div>
                            <div class="order-items">
                                ${order.items.map(item => {
                                    const product = products.find(p => p.id === item.productId);
                                    if (!product) return '';
                                    return `
                                        <div class="order-product">
                                            <div class="order-product-img">
                                                <img src="${product.images[0]}" alt="${product.name}">
                                            </div>
                                            <div class="order-product-info">
                                                <h4>${product.name}</h4>
                                                <p>${product.material} · 数量：${item.quantity}</p>
                                            </div>
                                            <div class="cart-price">¥${(product.price * item.quantity).toLocaleString()}</div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                            <div class="order-footer">
                                <div class="order-total">
                                    共 ${order.items.reduce((sum, i) => sum + i.quantity, 0)} 件商品，合计：<strong>¥${order.total.toLocaleString()}</strong>
                                </div>
                                <div class="order-actions">
                                    ${order.status === 'paid' ? `<button class="btn btn-small" onclick="cancelOrder('${order.id}')">取消订单</button>` : ''}
                                    ${order.status === 'shipped' ? `<button class="btn btn-small btn-success" onclick="confirmReceive('${order.id}')">确认收货</button>` : ''}
                                    <button class="btn btn-small btn-outline" onclick="navigateTo('product', {id: ${order.items[0].productId}})">查看详情</button>
                                </div>
                            </div>
                        </div>
                    `).join('') : `
                        <div class="cart-empty">
                            <i class="fas fa-shopping-bag"></i>
                            <h3>暂无订单</h3>
                            <p>快去挑选心仪的翡翠吧！</p>
                            <button class="btn" onclick="navigateTo('products')">去购物</button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
}

function filterOrders(status) {
    document.querySelectorAll('.orders-filter button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function cancelOrder(orderId) {
    const order = app.orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'cancelled';
        saveToStorage();
        showToast('订单已取消', 'success');
        renderOrdersPage();
    }
}

function confirmReceive(orderId) {
    const order = app.orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'completed';
        saveToStorage();
        showToast('确认收货成功', 'success');
        renderOrdersPage();
    }
}

function renderFavoritesPage() {
    const mainContent = document.getElementById('mainContent');
    const favoriteProducts = products.filter(p => app.favorites.includes(p.id));
    
    mainContent.innerHTML = `
        <div class="favorites-page">
            <div class="container">
                <div class="section-title">
                    <h2>我的收藏</h2>
                    <p>共收藏 ${favoriteProducts.length} 件商品</p>
                </div>
                
                ${favoriteProducts.length > 0 ? `
                    <div class="product-grid">
                        ${favoriteProducts.map(product => renderProductCard(product)).join('')}
                    </div>
                ` : `
                    <div class="favorites-empty">
                        <i class="fas fa-heart"></i>
                        <h3>暂无收藏</h3>
                        <p>快去收藏心仪的商品吧！</p>
                        <button class="btn" onclick="navigateTo('products')">去逛逛</button>
                    </div>
                `}
            </div>
        </div>
    `;
}

function toggleFavorite(productId) {
    const index = app.favorites.indexOf(productId);
    if (index > -1) {
        app.favorites.splice(index, 1);
        showToast('已取消收藏', 'info');
    } else {
        app.favorites.push(productId);
        showToast('已添加到收藏', 'success');
    }
    saveToStorage();
    
    if (app.currentPage === 'product') {
        renderProductPage(productId);
    } else if (app.currentPage === 'products' || app.currentPage === 'home') {
        navigateTo(app.currentPage);
    } else if (app.currentPage === 'favorites') {
        renderFavoritesPage();
    }
}

function handleSearch(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const keyword = document.getElementById('searchInput').value.trim();
    if (keyword) {
        app.filters.keyword = keyword;
        navigateTo('products');
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showModal(type, title, message, callback) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <i class="${type === 'success' ? 'fas fa-check-circle success' : 'fas fa-times-circle error'}"></i>
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="btn" onclick="closeModal(${callback ? 'true' : 'false'})">确定</button>
        </div>
    `;
    modal.classList.add('show');
    window.modalCallback = callback;
}

function closeModal(runCallback) {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    if (runCallback && window.modalCallback) {
        window.modalCallback();
    }
}

document.addEventListener('DOMContentLoaded', init);
