window.SHOP = {
  cats: [
    { id: 'plantes-fleurs', fr: 'Plantes & fleurs', en: 'Plants & flowers', page: 'plantes-fleurs' },
    { id: 'oliviers', fr: 'Oliviers', en: 'Olive trees', page: 'oliviers' },
    { id: 'arbres-fruitiers', fr: 'Arbres fruitiers', en: 'Fruit trees', page: 'arbres-fruitiers' },
    { id: 'plantes-exotiques', fr: 'Plantes exotiques', en: 'Exotic plants', page: 'plantes-exotiques' },
    { id: 'poterie', fr: 'Poterie', en: 'Pottery', page: 'poterie' },
    { id: 'outillage', fr: 'Outillage', en: 'Tools', page: 'outillage-entretien' },
    { id: 'animalerie', fr: 'Animalerie', en: 'Pet shop', page: 'animalerie' },
    { id: 'deco', fr: 'Déco & maison', en: 'Home & décor', page: 'deco-maison' },
    { id: 'epicerie', fr: 'Épicerie & vins', en: 'Deli & wines', page: null }
  ],
  products: [
    { id: 'orchidee', cat: 'plantes-fleurs', img: 'shop-flowers', price: 24.9, stock: 'in', fr: ['Orchidée Phalaenopsis', 'Deux tiges, en pot de 12 cm. Fleurit plusieurs mois en intérieur lumineux.'], en: ['Phalaenopsis orchid', 'Two stems, 12 cm pot. Flowers for months in a bright room.'] },
    { id: 'cyclamen', cat: 'plantes-fleurs', img: 'daffodils', price: 6.5, stock: 'in', badge: 'new', fr: ['Cyclamen de saison', 'Pot de 13 cm, coloris selon arrivage.'], en: ['Seasonal cyclamen', '13 cm pot, colours vary with deliveries.'] },
    { id: 'azalee', cat: 'plantes-fleurs', img: 'shop-snow', price: 14.9, stock: 'in', fr: ['Azalée japonaise', 'Arbuste de terre de bruyère, floraison printanière.'], en: ['Japanese azalea', 'Ericaceous shrub, spring flowering.'] },
    { id: 'vivaces', cat: 'plantes-fleurs', img: 'u-nursery', price: 4.9, stock: 'in', fr: ['Vivaces méditerranéennes', 'Lavande, romarin, sauge… godet de 9 cm.'], en: ['Mediterranean perennials', 'Lavender, rosemary, sage… 9 cm pot.'] },

    { id: 'olivier-jeune', cat: 'oliviers', img: 'u-olive2', price: 39, stock: 'in', fr: ['Jeune olivier en pot', 'Hauteur 1 m environ, idéal terrasse.'], en: ['Young potted olive tree', 'Around 1 m tall, ideal for a terrace.'],
      sizes: [{ fr: '1 m', en: '1 m', price: 39 }, { fr: '1,5 m', en: '1.5 m', price: 69 }, { fr: '2 m', en: '2 m', price: 119 }] },
    { id: 'olivier-centenaire', cat: 'oliviers', img: 'olive-table', price: 890, stock: 'order', fr: ['Olivier ancien', 'Sujet au tronc noueux, pièce unique. Livraison et plantation sur devis.'], en: ['Old olive tree', 'Gnarled-trunk specimen, one of a kind. Delivery and planting on quote.'] },
    { id: 'olivier-tige', cat: 'oliviers', img: 'u-olive4', price: 149, stock: 'in', fr: ['Olivier tige', 'Port boule sur tronc droit, conteneur 35 L.'], en: ['Standard olive tree', 'Ball head on a straight trunk, 35 L container.'] },
    { id: 'filet-recolte', cat: 'oliviers', img: 'u-hero', price: 29.9, stock: 'in', fr: ['Filet de récolte 5 × 5 m', 'Filet anti-UV pour la récolte des olives.'], en: ['Harvest net 5 × 5 m', 'UV-resistant net for olive harvesting.'] },

    { id: 'citronnier', cat: 'arbres-fruitiers', img: 'v4-poster', price: 49, stock: 'in', badge: 'promo', was: 59, fr: ['Citronnier 4 saisons', 'Fructifie toute l\'année, pot de 10 L.'], en: ['Four-seasons lemon tree', 'Fruits all year round, 10 L pot.'] },
    { id: 'oranger', cat: 'arbres-fruitiers', img: 'v4-poster', price: 55, stock: 'in', fr: ['Oranger', 'Variété adaptée au climat provençal, pot de 10 L.'], en: ['Orange tree', 'Variety suited to the Provençal climate, 10 L pot.'] },
    { id: 'figuier', cat: 'arbres-fruitiers', img: 'u-nursery', price: 34, stock: 'order', fr: ['Figuier', 'Figues violettes, rustique et facile.'], en: ['Fig tree', 'Purple figs, hardy and easy.'] },

    { id: 'strelitzia', cat: 'plantes-exotiques', img: 'u-strel', price: 40.95, was: 58.5, badge: 'promo', stock: 'in', fr: ['Strelitzia', 'L\'oiseau de paradis. -30 % ou 2 achetés = 1 offert.'], en: ['Strelitzia', 'Bird of paradise. -30% or buy 2, get 1 free.'] },
    { id: 'palmier', cat: 'plantes-exotiques', img: 'palms', price: 79, stock: 'in', fr: ['Palmier Trachycarpus', 'Rustique jusqu\'à -15 °C, hauteur 1,2 m.'], en: ['Trachycarpus palm', 'Hardy to -15 °C, 1.2 m tall.'] },
    { id: 'agave', cat: 'plantes-exotiques', img: 'u-strel2', price: 19.9, stock: 'in', fr: ['Agave', 'Plante grasse sculpturale, très peu d\'arrosage.'], en: ['Agave', 'Sculptural succulent, very little watering.'] },

    { id: 'pot-email', cat: 'poterie', img: 'pots-teal', price: 34.9, stock: 'in', badge: 'new', fr: ['Pot émaillé bleu canard', 'Céramique émaillée, plusieurs tailles.'], en: ['Teal glazed pot', 'Glazed ceramic, several sizes.'],
      sizes: [{ fr: 'Ø 25 cm', en: 'Ø 25 cm', price: 34.9 }, { fr: 'Ø 35 cm', en: 'Ø 35 cm', price: 54.9 }, { fr: 'Ø 45 cm', en: 'Ø 45 cm', price: 89 }] },
    { id: 'pot-anduze', cat: 'poterie', img: 'pots-stack', price: 129, stock: 'order', fr: ['Vase d\'Anduze', 'Terre cuite vernissée traditionnelle.'], en: ['Anduze vase', 'Traditional glazed terracotta.'] },
    { id: 'cache-pot', cat: 'poterie', img: 'u-pots', price: 12.9, stock: 'in', fr: ['Cache-pot en terre cuite', 'Pour plantes d\'intérieur, Ø 14 cm.'], en: ['Terracotta plant pot', 'For houseplants, Ø 14 cm.'] },

    { id: 'rateau', cat: 'outillage', img: 'u-nursery', price: 24.9, badge: 'promo', stock: 'in', fr: ['Râteau Leborgne', '3 € remboursés sur la gamme.'], en: ['Leborgne rake', '€3 cashback on the range.'] },
    { id: 'secateur', cat: 'outillage', img: 'table-stools', price: 29.9, stock: 'in', fr: ['Sécateur de jardin', 'Lames croisées, coupe jusqu\'à 20 mm.'], en: ['Garden secateurs', 'Bypass blades, cuts up to 20 mm.'] },
    { id: 'terreau', cat: 'outillage', img: 'u-nursery', price: 9.9, stock: 'in', fr: ['Terreau universel 50 L', 'Pour plantations en pot et en pleine terre.'], en: ['Multi-purpose compost 50 L', 'For pots and open ground.'] },
    { id: 'peigne', cat: 'outillage', img: 'u-olive1', price: 14.9, stock: 'in', fr: ['Peigne à olives', 'Manche télescopique compatible.'], en: ['Olive comb', 'Fits a telescopic handle.'] },

    { id: 'croquettes-chien', cat: 'animalerie', img: 'dachshund', price: 42.9, stock: 'in', fr: ['Croquettes chien adulte 12 kg', 'Recette au poulet, toutes races.'], en: ['Adult dog food 12 kg', 'Chicken recipe, all breeds.'] },
    { id: 'croquettes-chat', cat: 'animalerie', img: 'cat-card', price: 19.9, stock: 'in', fr: ['Croquettes chat 4 kg', 'Pour chats stérilisés.'], en: ['Cat food 4 kg', 'For neutered cats.'] },
    { id: 'panier', cat: 'animalerie', img: 'u-dog', price: 34.9, stock: 'order', fr: ['Panier chien moelleux', 'Déhoussable, taille M.'], en: ['Soft dog bed', 'Removable cover, size M.'] },
    { id: 'graines-poules', cat: 'animalerie', img: 'u-dog2', price: 16.9, stock: 'in', fr: ['Mélange pour poules 20 kg', 'Céréales et coquilles d\'huîtres.'], en: ['Poultry mix 20 kg', 'Grains and oyster shell.'] },

    { id: 'elephant', cat: 'deco', img: 'elephant', price: 29.9, stock: 'in', badge: 'new', fr: ['Éléphant décoratif', 'Céramique peinte à la main.'], en: ['Decorative elephant', 'Hand-painted ceramic.'] },
    { id: 'poisson', cat: 'deco', img: 'fish', price: 19.9, stock: 'in', fr: ['Poisson en céramique', 'Objet déco intérieur ou extérieur.'], en: ['Ceramic fish', 'Indoor or outdoor décor piece.'] },
    { id: 'tortue', cat: 'deco', img: 'turtle-big', price: 39, stock: 'in', fr: ['Tortue de jardin', 'Grande sculpture émaillée.'], en: ['Garden turtle', 'Large glazed sculpture.'] },
    { id: 'chapeau', cat: 'deco', img: 'hats', price: 24.9, stock: 'in', fr: ['Chapeau de paille', 'Tressé main, plusieurs coloris.'], en: ['Straw hat', 'Hand-woven, several colours.'] },
    { id: 'tabouret', cat: 'deco', img: 'table-stools', price: 69, stock: 'order', fr: ['Tabouret en bois', 'Bois massif, finition naturelle.'], en: ['Wooden stool', 'Solid wood, natural finish.'] },

    { id: 'vin-rouge', cat: 'epicerie', img: 'shop-wines', price: 12.9, stock: 'in', fr: ['Vin rouge de Provence', 'Sélection de domaines de la région.'], en: ['Provence red wine', 'A selection of local estates.'] },
    { id: 'huile', cat: 'epicerie', img: 'shop-epicerie', price: 18.5, stock: 'in', badge: 'new', fr: ['Huile d\'olive vierge extra 75 cl', 'Pressée dans la vallée.'], en: ['Extra virgin olive oil 75 cl', 'Pressed in the valley.'] },
    { id: 'tapenade', cat: 'epicerie', img: 'shop-epicerie', price: 6.9, stock: 'in', fr: ['Tapenade noire', 'Pot de 180 g.'], en: ['Black olive tapenade', '180 g jar.'] }
  ]
};

SHOP.KEY = 'comptoir-basket-v1';
SHOP.getCart = function () { try { return JSON.parse(localStorage.getItem(this.KEY) || '[]'); } catch (e) { return []; } };
SHOP.addToCart = function (id) { const c = this.getCart(), p = this.products.find(function (x) { return x.id === id; }); const key = id + (p && p.sizes ? ':0' : ''); const ex = c.find(function (x) { return x.key === key; }); if (ex) ex.qty++; else c.push({ key: key, id: id, size: p && p.sizes ? 0 : null, qty: 1 }); try { localStorage.setItem(this.KEY, JSON.stringify(c)); } catch (e) {} return c; };
SHOP.count = function () { return this.getCart().reduce(function (a, c) { return a + c.qty; }, 0); };
SHOP.rail = function (opts) {
  const lang = opts.lang, S = this, en = lang === 'en';
  const fmt = function (n) { return en ? '€' + n.toFixed(2) : n.toFixed(2).replace('.', ',') + ' €'; };
  let list = this.products.slice();
  if (opts.cat) list = list.filter(function (p) { return p.cat === opts.cat; });
  else list = list.filter(function (p) { return p.badge; }).concat(list.filter(function (p) { return !p.badge; }));
  if (opts.cat && list.length < 4) list = list.concat(this.products.filter(function (p) { return p.badge && p.cat !== opts.cat; }));
  if (opts.promo) list = this.products.filter(function (p) { return p.badge === 'promo'; }).concat(this.products.filter(function (p) { return p.badge === 'new'; }));
  const cat = opts.cat && this.cats.find(function (c) { return c.id === opts.cat; });
  const added = opts.added || {};
  return {
    kicker: en ? 'Reserve online, collect in store' : 'Réservez en ligne, retirez en magasin',
    title: opts.title || (cat ? (en ? 'Shop: ' : 'En boutique : ') + cat[lang].toLowerCase() : (en ? 'Our selection' : 'Notre sélection')),
    intro: en ? 'Add to your basket, choose a pickup slot and pay at the Comptoir.' : 'Ajoutez au panier, choisissez un créneau de retrait et payez au Comptoir.',
    all: cat ? (en ? 'See all ' : 'Voir tout ') + '(' + this.products.filter(function (p) { return p.cat === cat.id; }).length + ')' : (en ? 'Visit the shop' : 'Voir la boutique'),
    href: 'Boutique.dc.html#' + (cat ? cat.id : 'tout') + '/' + lang, addLabel: en ? 'Add to basket' : 'Ajouter au panier',
    items: list.slice(0, opts.max || 8).map(function (p, i) {
      const c = S.cats.find(function (x) { return x.id === p.cat; }), pr = p.sizes ? p.sizes[0].price : p.price, im = opts.imgOf(p.img);
      const b = p.badge === 'promo' ? { badge: p.was ? '-' + Math.round((1 - p.price / p.was) * 100) + (en ? '%' : ' %') : (en ? 'Offer' : 'Promo'), badgeBg: '#b4602f', badgeFg: '#f8efe2' } : p.badge === 'new' ? { badge: en ? 'New' : 'Nouveau', badgeBg: '#c9a86a', badgeFg: '#1f2718' } : { badge: '', badgeBg: '', badgeFg: '' };
      return Object.assign({ id: p.id, delay: (i % 4) * 80, name: p[lang][0], catLabel: c[lang], img: im ? im.src : '', href: 'Boutique.dc.html#p/' + p.id + '/' + lang,
        priceLabel: (p.sizes ? (en ? 'from ' : 'dès ') : '') + fmt(pr), wasLabel: p.was ? fmt(p.was) : '',
        stockLabel: p.stock === 'in' ? (en ? 'In stock' : 'En stock') : (en ? 'Made to order' : 'Sur commande'), stockDot: p.stock === 'in' ? '#3f9b4f' : '#d08a2e',
        btnBg: added[p.id] ? '#3f9b4f' : '#1f2718', btnIcon: added[p.id] ? '✓' : '+', add: function () { opts.onAdd(p.id); } }, b);
    })
  };
};
