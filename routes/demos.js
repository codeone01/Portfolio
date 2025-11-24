const express = require('express')
const path = require('path')
const router = express.Router()

// Layout specific for demos to avoid main site navigation/footer if desired, 
// or use main layout but with specific content. 
// For now, we'll use the main layout but we might want to customize it later.

// Mock Data for E-commerce (demo front-end only)
const categories = [
    { id: 'eletronicos', name: 'Eletrônicos', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
    { id: 'moda', name: 'Moda', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
    { id: 'acessorios', name: 'Acessórios', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
    { id: 'casa', name: 'Casa & Decoração', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' },
    { id: 'gaming', name: 'Gaming', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2c804fb?auto=format&fit=crop&w=1200&q=80' }
];

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

// E-commerce Routes

// Presentation Page
router.get('/ecommerce', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css', // Use main site style
        demoTitle: 'ShopMaster E-commerce',
        demoDescription: 'Uma plataforma de e-commerce completa com design premium, carrinho de compras e gestão de categorias.',
        demoImage: '/img/demos/ecommerce-preview.jpg', // Placeholder
        demoLink: '/demo/ecommerce/live',
        features: [
            { icon: 'bx bx-store', title: 'Design Premium', desc: 'Interface moderna e responsiva com foco na experiência do usuário.' },
            { icon: 'bx bx-cart', title: 'Carrinho Funcional', desc: 'Adicione produtos, visualize o resumo e simule o checkout.' },
            { icon: 'bx bx-category', title: 'Categorias', desc: 'Navegação fluida entre diferentes categorias de produtos.' }
        ]
    })
})

// Live Demo Home
router.get('/ecommerce/live', (req, res) => {
    res.render('demos/ecommerce/index', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Home',
        products,
        categories,
        demoName: 'ecommerce', // For demo-nav
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/products', (req, res) => {
    res.render('demos/ecommerce/products', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Produtos',
        products,
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/category/:id', (req, res) => {
    const categoryId = req.params.id;
    const category = categories.find(c => c.id === categoryId);
    const categoryProducts = products.filter(p => p.category === categoryId);

    if (!category) return res.redirect('/demo/ecommerce/live');

    res.render('demos/ecommerce/category', {
        style: 'demo-ecommerce.css',
        title: `ShopMaster - ${category.name}`,
        category: category,
        products: categoryProducts,
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/search', (req, res) => {
    const term = req.query.q || '';
    res.render('demos/ecommerce/search', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Busca',
        searchTerm: term,
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) return res.redirect('/demo/ecommerce/live');

    res.render('demos/ecommerce/product', {
        style: 'demo-ecommerce.css',
        title: `ShopMaster - ${product.name}`,
        product: product,
        relatedProducts: products.filter(p => p.category === product.category && p.id !== productId).slice(0, 3),
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/cart', (req, res) => {
    res.render('demos/ecommerce/cart', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Your Cart',
        cartItems: [products[0], products[3]],
        total: (products[0].price + products[3].price).toFixed(2),
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/checkout', (req, res) => {
    res.render('demos/ecommerce/checkout', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Checkout',
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/favoritos', (req, res) => {
    res.render('demos/ecommerce/favorites', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Favoritos',
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

router.get('/ecommerce/login', (req, res) => {
    res.render('demos/ecommerce/login', {
        style: 'demo-ecommerce.css',
        title: 'ShopMaster - Minha Conta',
        demoName: 'ecommerce',
        script: 'demo-ecommerce.js'
    })
})

// SaaS Demo
router.get('/saas', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css',
        demoTitle: 'AnalyticsPro SaaS',
        demoDescription: 'Dashboard administrativo para SaaS com autenticação e visualização de dados.',
        demoImage: '/img/demos/saas-preview.jpg',
        demoLink: '/demo/saas/live',
        features: [
            { icon: 'bx bx-lock-alt', title: 'Autenticação', desc: 'Sistema de login seguro com validação de credenciais.' },
            { icon: 'bx bx-bar-chart-alt-2', title: 'Dashboard', desc: 'Visão geral com gráficos e métricas importantes.' },
            { icon: 'bx bx-user', title: 'Gestão de Usuários', desc: 'Interface para administração de perfis.' }
        ]
    })
})

router.get('/saas/live', (req, res) => {
    res.render('demos/saas-react', {
        style: 'demo-saas.css',
        title: 'AnalyticsPro - SaaS Dashboard',
        demoName: 'saas'
    })
})

router.post('/saas/login', (req, res) => {
    // fluxo legado agora redireciona para a SPA React
    res.redirect('/demo/saas/live')
})

// Landing Page Demo
router.get('/landing', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css',
        demoTitle: 'TechCorp Landing Page',
        demoDescription: 'Landing page de alta conversão para empresas de tecnologia.',
        demoImage: '/img/demos/landing-preview.jpg',
        demoLink: '/demo/landing/live',
        features: [
            { icon: 'bx bx-rocket', title: 'Hero Section', desc: 'Área de destaque impactante para capturar a atenção.' },
            { icon: 'bx bx-check-shield', title: 'Prova Social', desc: 'Seção de depoimentos e logos de clientes.' },
            { icon: 'bx bx-envelope', title: 'Lead Capture', desc: 'Formulário otimizado para conversão.' }
        ]
    })
})

router.get('/landing/live', (req, res) => {
    res.render('demos/landing', {
        style: 'demo-landing.css',
        title: 'TechCorp - Soluções Digitais',
    })
})

// Barbearia Demo (formerly Booking)
router.get('/barbearia', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css',
        demoTitle: 'Barbearia Elite Prime',
        demoDescription: 'Sistema de agendamento online para barbearia premium com fluxo completo.',
        demoImage: '/img/demos/booking-preview.jpg',
        demoLink: '/demo/barbearia/live',
        features: [
            { icon: 'bx bx-calendar', title: 'Agendamento Fácil', desc: 'Wizard passo a passo intuitivo.' },
            { icon: 'bx bx-cut', title: 'Gestão de Serviços', desc: 'Catálogo completo de serviços e profissionais.' },
            { icon: 'bx bx-mobile', title: 'Mobile First', desc: 'Experiência perfeita em qualquer dispositivo.' }
        ]
    })
})

router.get('/barbearia/live', (req, res) => {
    res.render('demos/barbearia', {
        style: 'demo-barbearia.css',
        title: 'Barbearia Elite Prime - Agendamento',
        demoName: 'barbearia'
    })
})

// Chatbot Demo
router.get('/chatbot', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css',
        demoTitle: 'AutoBot AI Assistant',
        demoDescription: 'Interface de chat moderna para assistentes virtuais e suporte.',
        demoImage: '/img/demos/chatbot-preview.jpg',
        demoLink: '/demo/chatbot/live',
        features: [
            { icon: 'bx bx-message-dots', title: 'Chat Interface', desc: 'UI familiar e intuitiva similar a apps de mensagem.' },
            { icon: 'bx bx-bot', title: 'Respostas Automáticas', desc: 'Simulação de interação com IA.' },
            { icon: 'bx bx-support', title: 'Suporte 24/7', desc: 'Demonstração de disponibilidade contínua.' }
        ]
    })
})

router.get('/chatbot/live', (req, res) => {
    res.render('demos/chatbot', {
        style: 'demo-chatbot.css',
        title: 'Flux IA Chatbot - Demo',
        demoName: 'chatbot'
    })
})

// Real Estate Demo
router.get('/realestate', (req, res) => {
    res.render('demos/presentation', {
        style: 'style.css',
        demoTitle: 'ImobPrime Real Estate',
        demoDescription: 'Portal imobiliário para listagem e busca de propriedades de luxo.',
        demoImage: '/img/demos/realestate-preview.jpg',
        demoLink: '/demo/realestate/live',
        features: [
            { icon: 'bx bx-home', title: 'Listagem de Imóveis', desc: 'Cards detalhados com fotos e informações.' },
            { icon: 'bx bx-search', title: 'Filtros de Busca', desc: 'Ferramentas para encontrar o imóvel ideal.' },
            { icon: 'bx bx-map', title: 'Localização', desc: 'Integração visual com mapas e endereços.' }
        ]
    })
})

router.get('/realestate/live', (req, res) => {
    res.render('demos/realestate-live', {
        style: 'demo-realestate.css',
        title: 'VivaBem Imóveis',
        demoName: 'realestate'
    })
})

module.exports = router
