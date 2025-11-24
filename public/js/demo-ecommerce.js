(() => {
    const products = [
        {
            id: 1,
            name: 'Headset Quantum Noise Cancel 2',
            category: 'eletronicos',
            categoryLabel: 'Eletrônicos',
            price: 1299.9,
            priceOld: 1599.9,
            badge: 'Promoção',
            rating: 4.8,
            reviews: 264,
            image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Fones premium com cancelamento ativo, 40h de bateria e modo transparência.',
            specs: ['Bluetooth 5.3', 'ANC híbrido', 'Driver 40mm', 'USB-C', 'Compatível com iOS/Android']
        },
        {
            id: 2,
            name: 'Smartwatch Pulse Pro',
            category: 'eletronicos',
            categoryLabel: 'Eletrônicos',
            price: 899.9,
            priceOld: 1099.9,
            badge: 'Lançamento',
            rating: 4.6,
            reviews: 184,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Monitore exercícios, sono e notificações com tela AMOLED 1.7".',
            specs: ['GPS integrado', 'Resistência 5ATM', 'Oxímetro', 'Bateria 7 dias', 'Pulseira hipoalergênica']
        },
        {
            id: 3,
            name: 'Sneaker Flux Knit',
            category: 'moda',
            categoryLabel: 'Moda',
            price: 499.9,
            priceOld: 649.9,
            badge: 'Frete Grátis',
            rating: 4.7,
            reviews: 312,
            image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Tênis knit ultraleve com entressola responsiva e palmilha memory foam.',
            specs: ['Peso 240g', 'Solado antiderrapante', 'Respirável', 'Palmilha removível']
        },
        {
            id: 4,
            name: 'Mochila Metro 28L',
            category: 'acessorios',
            categoryLabel: 'Acessórios',
            price: 359.9,
            priceOld: 429.9,
            badge: 'Nova cor',
            rating: 4.5,
            reviews: 96,
            image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Compartimento para notebook 16", tecido repelente à água e porta USB.',
            specs: ['Capacidade 28L', 'Bolsos secretos', 'Alça acolchoada', 'Zíper YKK']
        },
        {
            id: 5,
            name: 'Luminária Aurora Smart',
            category: 'casa',
            categoryLabel: 'Casa & Decoração',
            price: 279.9,
            priceOld: 349.9,
            badge: 'Smart',
            rating: 4.4,
            reviews: 142,
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Luz inteligente com 16M cores, dimerizável e controle por app/voz.',
            specs: ['Wi-Fi + Bluetooth', 'Compatível Alexa/Google', 'Consumo 9W', 'Timer e cenas']
        },
        {
            id: 6,
            name: 'Cafeteira Drip Barista',
            category: 'casa',
            categoryLabel: 'Casa & Decoração',
            price: 699.9,
            priceOld: 849.9,
            badge: 'Promo',
            rating: 4.9,
            reviews: 88,
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Cafeteira de extração lenta com jarra térmica e pré-infusão programável.',
            specs: ['Programação 24h', 'Filtro permanente', 'Jarra 1.2L', 'Função blooming']
        },
        {
            id: 7,
            name: 'Console Nebula XS',
            category: 'gaming',
            categoryLabel: 'Gaming',
            price: 3499.9,
            priceOld: 3799.9,
            badge: 'Lançamento',
            rating: 4.8,
            reviews: 421,
            image: 'https://images.unsplash.com/photo-1582719478171-2f2df44c9c0c?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1582719478171-2f2df44c9c0c?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1582719478171-2f2df44c9c0c?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Console 4K HDR com SSD ultrarrápido e controle com resposta háptica.',
            specs: ['SSD 1TB', '120fps', 'Ray tracing', 'Controle feedback adaptativo']
        },
        {
            id: 8,
            name: 'Mouse Gamer Vortex',
            category: 'gaming',
            categoryLabel: 'Gaming',
            price: 349.9,
            priceOld: 449.9,
            badge: 'Favorito',
            rating: 4.6,
            reviews: 233,
            image: 'https://images.unsplash.com/photo-1582719478185-1f1593c6940b?auto=format&fit=crop&w=900&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1582719478185-1f1593c6940b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1582719478185-1f1593c6940b?auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Sensor 26K DPI, 8 botões programáveis e iluminação RGB dinâmica.',
            specs: ['Sensor ótico 26K', 'Polling 1000Hz', 'Cabo ultraflex', 'Software macro']
        }
    ];

    const categories = [
        { id: 'eletronicos', name: 'Eletrônicos', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
        { id: 'moda', name: 'Moda', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
        { id: 'acessorios', name: 'Acessórios', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
        { id: 'casa', name: 'Casa & Decoração', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' },
        { id: 'gaming', name: 'Gaming', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2c804fb?auto=format&fit=crop&w=1200&q=80' }
    ];

    const state = {
        cart: [],
        favorites: [],
        orders: [],
        user: null
    };

    const currency = value => `R$ ${value.toFixed(2).replace('.', ',')}`;

    function loadState() {
        try {
            const saved = JSON.parse(localStorage.getItem('aurora-demo')) || {};
            Object.assign(state, saved);
        } catch (e) {
            console.warn('Não foi possível carregar estado anterior', e);
        }
    }

    function saveState() {
        localStorage.setItem('aurora-demo', JSON.stringify(state));
    }

    function findProduct(id) {
        return products.find(p => p.id === Number(id));
    }

    function renderCategories() {
        const grid = document.getElementById('categories-grid');
        if (!grid) return;
        grid.innerHTML = categories.map(cat => `
            <a class="category-card" href="/demo/ecommerce/category/${cat.id}">
                <img src="${cat.image}" alt="${cat.name}">
                <h3>${cat.name}</h3>
            </a>
        `).join('');
    }

    function productCard(product) {
        return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="card-img" style="background-image:url('${product.image}')">
                <button class="fav-btn js-fav-toggle" data-product-id="${product.id}"><i class='bx bx-heart'></i></button>
                <span class="flag">${product.badge}</span>
            </div>
            <div class="card-body">
                <p class="meta">${product.categoryLabel}</p>
                <h3>${product.name}</h3>
                <div class="price-row">
                    <span class="price">${currency(product.price)}</span>
                    <span class="old">${currency(product.priceOld)}</span>
                </div>
                <div class="rating"><i class='bx bxs-star'></i> ${product.rating} (${product.reviews})</div>
                <div class="card-actions">
                    <button class="btn ghost js-add-cart" data-product-id="${product.id}"><i class='bx bx-cart'></i> Adicionar</button>
                    <a class="btn link-btn" href="/demo/ecommerce/product/${product.id}">Detalhes</a>
                </div>
            </div>
        </article>`;
    }

    function renderGrid(targetId, items) {
        const el = document.getElementById(targetId);
        if (!el) return;
        el.innerHTML = items.map(productCard).join('');
        syncFavButtons();
    }

    function renderHomeGrids() {
        const promos = products.filter(p => p.priceOld - p.price > 0);
        const bestsellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
        renderGrid('promo-grid', promos);
        renderGrid('bestsellers-grid', bestsellers);
        const allGrid = document.getElementById('all-products-grid');
        if (allGrid) renderGrid('all-products-grid', products);
    }

    function renderFavorites() {
        const grid = document.getElementById('favorites-grid');
        if (!grid) return;
        if (!state.favorites.length) {
            grid.innerHTML = `<div class="empty">Nenhum favorito ainda. Clique no coração em qualquer produto.</div>`;
            return;
        }
        const favProducts = state.favorites.map(findProduct).filter(Boolean);
        grid.innerHTML = favProducts.map(productCard).join('');
        syncFavButtons();
    }

    function updateBadges() {
        const favCount = document.getElementById('fav-count');
        const cartCount = document.getElementById('cart-count');
        if (favCount) favCount.textContent = state.favorites.length;
        if (cartCount) cartCount.textContent = state.cart.reduce((acc, item) => acc + item.qty, 0);
    }

    function toggleFavorite(id) {
        const index = state.favorites.indexOf(Number(id));
        if (index >= 0) state.favorites.splice(index, 1);
        else state.favorites.push(Number(id));
        saveState();
        updateBadges();
        renderFavorites();
        syncFavButtons();
    }

    function syncFavButtons() {
        document.querySelectorAll('.js-fav-toggle').forEach(btn => {
            const id = Number(btn.dataset.productId);
            if (state.favorites.includes(id)) {
                btn.classList.add('active');
                btn.innerHTML = "<i class='bx bxs-heart'></i>";
            } else {
                btn.classList.remove('active');
                btn.innerHTML = "<i class='bx bx-heart'></i>";
            }
        });
    }

    function addToCart(id, qty = 1) {
        const parsedQty = Math.max(1, Number(qty) || 1);
        const existing = state.cart.find(item => item.id === Number(id));
        if (existing) existing.qty += parsedQty;
        else state.cart.push({ id: Number(id), qty: parsedQty });
        saveState();
        updateBadges();
        renderCheckoutSummary();
        renderCartPage();
    }

    function renderCheckoutSummary() {
        const summary = document.getElementById('checkout-summary');
        if (!summary) return;
        if (!state.cart.length) {
            summary.innerHTML = `<div class="empty">Nenhum item no carrinho. Adicione um produto para simular o pagamento.</div>`;
            document.getElementById('checkout-total').textContent = currency(0);
            return;
        }
        let total = 0;
        summary.innerHTML = state.cart.map(item => {
            const product = findProduct(item.id);
            if (!product) return '';
            const subtotal = product.price * item.qty;
            total += subtotal;
            return `<div class="summary-row"><span>${product.name} x${item.qty}</span><span>${currency(subtotal)}</span></div>`;
        }).join('');
        document.getElementById('checkout-total').textContent = currency(total);
    }

    function renderCartPage() {
        const list = document.getElementById('cart-items');
        if (!list) return;
        if (!state.cart.length) {
            list.innerHTML = `<div class="empty">Seu carrinho está vazio. Adicione um produto para continuar.</div>`;
            document.getElementById('summary-subtotal').textContent = currency(0);
            document.getElementById('summary-total').textContent = currency(0);
            return;
        }
        let subtotal = 0;
        list.innerHTML = state.cart.map(item => {
            const product = findProduct(item.id);
            if (!product) return '';
            const lineTotal = product.price * item.qty;
            subtotal += lineTotal;
            return `
            <div class="cart-line" data-product-id="${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <div class="title">${product.name}</div>
                    <div class="meta">${product.categoryLabel}</div>
                </div>
                <div class="price">${currency(product.price)}</div>
                <div class="qty">
                    <button class="js-cart-qty" data-dir="-1">-</button>
                    <input type="number" min="1" value="${item.qty}">
                    <button class="js-cart-qty" data-dir="1">+</button>
                </div>
                <button class="remove js-remove-line"><i class='bx bx-trash'></i></button>
            </div>`;
        }).join('');
        document.getElementById('summary-subtotal').textContent = currency(subtotal);
        document.getElementById('summary-total').textContent = currency(subtotal);
    }

    function handleCartInteractions(e) {
        const line = e.target.closest('.cart-line');
        if (!line) return;
        const id = Number(line.dataset.productId);
        if (e.target.classList.contains('js-remove-line')) {
            state.cart = state.cart.filter(item => item.id !== id);
            saveState();
            renderCartPage();
            updateBadges();
            renderCheckoutSummary();
        }
        if (e.target.classList.contains('js-cart-qty')) {
            const dir = Number(e.target.dataset.dir);
            const item = state.cart.find(it => it.id === id);
            if (!item) return;
            item.qty = Math.max(1, item.qty + dir);
            saveState();
            renderCartPage();
            updateBadges();
            renderCheckoutSummary();
        }
    }

    function handleGlobalClicks(e) {
        const addBtn = e.target.closest('.js-add-cart');
        if (addBtn) {
            const qtyInput = document.getElementById('detail-qty');
            const qty = qtyInput ? Number(qtyInput.value) : 1;
            addToCart(addBtn.dataset.productId, qty);
        }
        const favBtn = e.target.closest('.js-fav-toggle');
        if (favBtn) {
            toggleFavorite(favBtn.dataset.productId);
        }
        const payTab = e.target.closest('.tab');
        if (payTab) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            payTab.classList.add('active');
            const target = payTab.dataset.pay;
            document.querySelectorAll('.pay-panel').forEach(panel => {
                panel.classList.toggle('hidden', panel.dataset.panel !== target);
            });
        }
    }

    function renderSearchPage() {
        const page = document.getElementById('search-page');
        if (!page) return;
        const term = (page.dataset.term || '').toLowerCase();
        const results = term
            ? products.filter(p => `${p.name} ${p.categoryLabel}`.toLowerCase().includes(term))
            : [];
        const grid = document.getElementById('search-results-grid');
        if (!grid) return;
        if (!term) {
            grid.innerHTML = `<div class="empty">Digite algo para pesquisar produtos.</div>`;
            return;
        }
        if (!results.length) {
            grid.innerHTML = `<div class="empty">Nenhum resultado para "${term}".</div>`;
            return;
        }
        grid.innerHTML = results.map(productCard).join('');
        syncFavButtons();
    }

    function handleSearch() {
        const form = document.getElementById('search-form');
        if (!form) return;
        form.addEventListener('submit', ev => {
            const term = (document.getElementById('search-input')?.value || '').trim();
            if (!term) return;
            // allow default navigation to /search on dedicated page, else redirect
            if (!form.action.includes('/demo/ecommerce/search')) {
                ev.preventDefault();
                window.location.href = `/demo/ecommerce/search?q=${encodeURIComponent(term)}`;
            }
        });
    }

    function handleCheckoutForm() {
        const form = document.getElementById('checkout-form');
        if (!form) return;
        form.addEventListener('submit', ev => {
            ev.preventDefault();
            if (!state.cart.length) {
                setFeedback('checkout-feedback', 'Adicione pelo menos 1 item ao carrinho para finalizar.', true);
                return;
            }
            const data = new FormData(form);
            const payMethod = document.querySelector('.tab.active')?.dataset.pay || 'card';
            const orderNumber = `#${Math.floor(Math.random() * 90000) + 10000}`;
            state.orders.unshift({
                number: orderNumber,
                total: state.cart.reduce((sum, item) => {
                    const product = findProduct(item.id);
                    return sum + (product ? product.price * item.qty : 0);
                }, 0),
                method: payMethod,
                email: data.get('email'),
                items: [...state.cart],
                date: new Date().toLocaleDateString('pt-BR')
            });
            state.cart = [];
            saveState();
            renderCheckoutSummary();
            renderCartPage();
            updateBadges();
            renderOrders();
            setFeedback('checkout-feedback', `Pedido confirmado! Número do pedido: ${orderNumber}`);
        });
    }

    function setFeedback(id, message, isError = false) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = message;
            el.style.color = isError ? 'var(--danger)' : 'var(--accent)';
        }
    }

    function handleLoginForm() {
        const form = document.getElementById('login-form');
        if (!form) return;
        form.addEventListener('submit', ev => {
            ev.preventDefault();
            const data = new FormData(form);
            state.user = {
                name: data.get('nome'),
                email: data.get('email')
            };
            saveState();
            updateAccountLabel();
            setFeedback('login-feedback', 'Login/cadastro demo realizado com sucesso.');
        });
    }

    function updateAccountLabel() {
        const label = document.getElementById('account-label');
        if (label && state.user) {
            label.textContent = `Olá, ${state.user.name.split(' ')[0]}`;
        }
    }

    function renderOrders() {
        const list = document.getElementById('orders-list');
        if (!list) return;
        if (!state.orders.length) {
            list.innerHTML = `<div class="empty">Sem pedidos ainda. Conclua um checkout demo para gerar um número de pedido.</div>`;
            return;
        }
        list.innerHTML = state.orders.map(order => {
            return `
            <div class="order">
                <div class="meta">Pedido ${order.number} • ${order.date} • ${order.method.toUpperCase()}</div>
                <div class="total">${currency(order.total)}</div>
                <div class="meta">${order.items.length} item(ns) • Enviaremos confirmação para ${order.email}</div>
            </div>`;
        }).join('');
    }

    function heroCarousel() {
        const slides = Array.from(document.querySelectorAll('.slide'));
        const dots = Array.from(document.querySelectorAll('.dot'));
        if (!slides.length) return;
        let current = 0;
        const activate = idx => {
            slides.forEach((s, i) => s.classList.toggle('active', i === idx));
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
            current = idx;
        };
        dots.forEach(dot => dot.addEventListener('click', () => activate(Number(dot.dataset.slide))));
        setInterval(() => activate((current + 1) % slides.length), 5000);
    }

    function bindDetailThumbs() {
        const hero = document.querySelector('.hero-img');
        if (!hero) return;
        document.querySelectorAll('.thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                hero.style.backgroundImage = thumb.style.backgroundImage;
            });
        });
        const qtyInput = document.getElementById('detail-qty');
        document.querySelectorAll('.js-qty').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!qtyInput) return;
                const dir = Number(btn.dataset.dir);
                qtyInput.value = Math.max(1, Number(qtyInput.value || 1) + dir);
            });
        });
    }

    function bindFavoritesClear() {
        const clearBtn = document.querySelector('.js-clear-favs');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                state.favorites = [];
                saveState();
                renderFavorites();
                syncFavButtons();
                updateBadges();
            });
        }
    }

    function init() {
        loadState();
        renderCategories();
        renderHomeGrids();
        renderFavorites();
        renderCheckoutSummary();
        renderOrders();
        renderCartPage();
        renderSearchPage();
        updateBadges();
        updateAccountLabel();
        handleSearch();
        handleCheckoutForm();
        handleLoginForm();
        heroCarousel();
        bindDetailThumbs();
        bindFavoritesClear();
        document.addEventListener('click', handleGlobalClicks);
        document.addEventListener('click', handleCartInteractions);
    }

    document.addEventListener('DOMContentLoaded', init);
})();
