window.SITE = {
  nav: ['jardinerie','animalerie','deco-maison','services','promotions','actualites','a-propos','contact'],
  legal: ['mentions-legales','confidentialite','cookies'],
  pages: {
    'jardinerie': { img: 'palms', kids: ['plantes-fleurs','oliviers','arbres-fruitiers','plantes-exotiques','poterie','outillage-entretien','arrivages'],
      fr: { nav: 'Jardinerie', title: 'La jardinerie du Comptoir',
        intro: "Du balcon à l'oliveraie, trouvez tout ce qu'il faut pour un jardin qui se plaît en Provence. Nos plantes sont choisies pour résister au soleil, au vent et aux étés secs, et notre équipe vous conseille sur leur plantation et leur entretien.",
        blocks: [ { type: 'subpages' }, { type: 'gallery', title: 'Derniers arrivages', imgs: ['pots-square','hats-palms','cycas','soaps'], link: 'arrivages', linkText: 'Voir les arrivages' }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Garden centre', title: 'The Comptoir garden centre',
        intro: 'From balcony to olive grove, find everything you need for a garden that thrives in Provence. Our plants are chosen to handle sun, wind and dry summers, and our team will advise you on planting and care.',
        blocks: [ { type: 'subpages' }, { type: 'gallery', title: 'Latest arrivals', imgs: ['pots-square','hats-palms','cycas','soaps'], link: 'arrivages', linkText: 'See new arrivals' }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'plantes-fleurs': { img: 'muguet', parent: 'jardinerie',
      fr: { nav: 'Plantes & fleurs', card: 'Azalées, cyclamens, orchidées, vivaces et plantes d\'intérieur, au fil des saisons.', title: 'Plantes & fleurs de saison',
        intro: "Azalées, cyclamens, orchidées, bruyères, vivaces et plantes d'intérieur : nos rayons changent au fil des saisons pour vous offrir des couleurs toute l'année. Vous cherchez une plante pour une exposition plein soleil, un coin d'ombre ou un cadeau ? Demandez conseil, nous vous orientons vers la variété qui conviendra.",
        blocks: [ { type: 'gallery', imgs: ['muguet','daffodils','muguet2','peonies','pink-flowers','roses-basket'] }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Plants & flowers', card: 'Azaleas, cyclamens, orchids, perennials and houseplants, season by season.', title: 'Seasonal plants & flowers',
        intro: "Azaleas, cyclamens, orchids, heathers, perennials and houseplants: our displays change with the seasons to bring you colour all year round. Looking for a plant for full sun, a shady corner or a gift? Ask us and we'll point you to the variety that suits.",
        blocks: [ { type: 'gallery', imgs: ['muguet','daffodils','muguet2','peonies','pink-flowers','roses-basket'] }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'oliviers': { img: 'u-olive1', parent: 'jardinerie',
      fr: { nav: 'Oliviers', card: "Des jeunes plants aux sujets centenaires, l'arbre emblème de la Provence.", title: "Oliviers : l'âme de la Provence",
        intro: 'Jeunes plants pour débuter, oliviers en pot pour la terrasse ou sujets anciens au tronc noueux pour donner du caractère à votre jardin : nous proposons des oliviers pour tous les projets et tous les budgets.',
        blocks: [ { type: 'bullets', items: [
          { title: 'Choisir son olivier', text: 'Taille, variété, exposition, nous vous aidons à trouver le bon arbre.' },
          { title: 'Planter et entretenir', text: 'Conseils de plantation, de taille et d\'arrosage.' },
          { title: 'Récolter vos olives', text: 'Matériel en vente et en location au magasin.', href: 'recolte-olives' } ] },
          { type: 'gallery', title: 'Venez découvrir nos sujets en magasin', imgs: ['olive-table','u-olive2','u-olive4'] },
          { type: 'cta', text: 'Venez découvrir nos sujets en magasin' } ] },
      en: { nav: 'Olive trees', card: 'From young plants to century-old specimens, the emblem of Provence.', title: 'Olive trees: the soul of Provence',
        intro: 'Young plants to get started, potted olive trees for the terrace, or old specimens with gnarled trunks to give your garden character: we have olive trees for every project and every budget.',
        blocks: [ { type: 'bullets', items: [
          { title: 'Choosing your olive tree', text: 'Size, variety, exposure, we help you find the right tree.' },
          { title: 'Planting and care', text: 'Advice on planting, pruning and watering.' },
          { title: 'Harvesting your olives', text: 'Equipment for sale and rent in store.', href: 'recolte-olives' } ] },
          { type: 'gallery', title: 'Come and see our trees in store', imgs: ['olive-table','u-olive2','u-olive4'] },
          { type: 'cta', text: 'Come and see our trees in store' } ] } },

    'arbres-fruitiers': { img: 'v4-poster', parent: 'jardinerie',
      fr: { nav: 'Arbres fruitiers', card: 'Citronniers, orangers, figuiers : vos propres fruits, en pleine terre ou en pot.', title: 'Arbres fruitiers et agrumes',
        intro: "Citronniers, orangers, figuiers et autres fruitiers : cultivez vos propres fruits, en pleine terre ou en pot. Nous sélectionnons des variétés qui fructifient bien sous notre climat.",
        blocks: [ { type: 'tip', label: 'Conseil de saison', text: "L'automne est la meilleure période pour planter la plupart des fruitiers." }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Fruit trees', card: 'Lemon, orange and fig trees: grow your own fruit, in the ground or in pots.', title: 'Fruit trees and citrus',
        intro: 'Lemon trees, orange trees, fig trees and more: grow your own fruit, in the ground or in pots. We select varieties that crop well in our climate.',
        blocks: [ { type: 'tip', label: 'Seasonal tip', text: 'Autumn is the best time to plant most fruit trees.' }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'plantes-exotiques': { img: 'cycas', parent: 'jardinerie',
      fr: { nav: 'Plantes exotiques', card: 'Strelitzia, palmiers, agaves, plantes grasses : une touche d\'exotisme.', title: 'Plantes exotiques et méditerranéennes',
        intro: "Strelitzia, palmiers, bananiers, agaves, plantes grasses : apportez une touche d'exotisme à votre jardin ou votre terrasse. Ces plantes aiment la chaleur et supportent bien nos étés. Nous vous conseillons sur l'hivernage des espèces les plus frileuses.",
        blocks: [ { type: 'gallery', imgs: ['cycas','cactus-red','palms','cactus-field','cactus-barrel','cactus-tall','u-strel'] }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Exotic plants', card: 'Strelitzia, palms, agaves, succulents: a touch of the exotic.', title: 'Exotic and Mediterranean plants',
        intro: "Strelitzia, palms, banana plants, agaves, succulents: bring a touch of the exotic to your garden or terrace. These plants love heat and cope well with our summers. We'll advise you on overwintering the more tender species.",
        blocks: [ { type: 'gallery', imgs: ['cycas','cactus-red','palms','cactus-field','cactus-barrel','cactus-tall','u-strel'] }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'poterie': { img: 'pots-square', parent: 'jardinerie',
      fr: { nav: 'Poterie & cache-pots', card: 'Terre cuite, céramique émaillée, grands contenants et cache-pots.', title: 'Poterie & cache-pots',
        intro: 'Terre cuite, céramique émaillée, grands contenants pour oliviers ou petits cache-pots décoratifs : un large choix de poteries pour mettre vos plantes en valeur, à l\'intérieur comme à l\'extérieur.',
        blocks: [ { type: 'gallery', imgs: ['pots-square','pots-teal','pots-stack','cycas'] }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Pottery & plant pots', card: 'Terracotta, glazed ceramics, large containers and decorative pots.', title: 'Pottery & plant pots',
        intro: 'Terracotta, glazed ceramics, large containers for olive trees or small decorative pots: a wide choice of pottery to show off your plants, indoors and out.',
        blocks: [ { type: 'gallery', imgs: ['pots-square','pots-teal','pots-stack','cycas'] }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'outillage-entretien': { img: 'u-nursery', parent: 'jardinerie',
      fr: { nav: 'Outillage & entretien', card: 'Râteaux, sécateurs, arrosage, terreaux, engrais et traitements.', title: 'Outillage, terreaux & entretien',
        intro: "Râteaux, sécateurs, arrosage, terreaux, engrais et traitements : l'essentiel pour entretenir votre jardin, avec des marques de qualité comme Leborgne.",
        blocks: [ { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Tools & care', card: 'Rakes, secateurs, watering, compost, fertilisers and treatments.', title: 'Tools, compost & care',
        intro: 'Rakes, secateurs, watering, compost, fertilisers and treatments: the essentials for looking after your garden, with quality brands such as Leborgne.',
        blocks: [ { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'arrivages': { img: 'pots-stack', parent: 'jardinerie',
      fr: { nav: 'Arrivages', card: 'Nouvelles plantes, nouveaux sujets, nouvelles idées, chaque semaine.', title: 'Les arrivages de la semaine',
        intro: 'Nouvelles plantes, nouveaux sujets, nouvelles idées : voici ce qui vient d\'arriver au Comptoir.',
        blocks: [ { type: 'gallery', imgs: ['pots-square','hats-palms','soaps','pots-teal','paella','confitures','solar-lamps','fish','baskets','turtle-big','table-stools','hats'] }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'New arrivals', card: 'New plants, new specimens, new ideas, every week.', title: "This week's arrivals",
        intro: "New plants, new specimens, new ideas: here's what just arrived at the Comptoir.",
        blocks: [ { type: 'gallery', imgs: ['pots-square','hats-palms','soaps','pots-teal','paella','confitures','solar-lamps','fish','baskets','turtle-big','table-stools','hats'] }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'animalerie': { img: 'dachshund',
      fr: { nav: 'Animalerie', title: "L'animalerie du Comptoir",
        intro: 'Chiens, chats, oiseaux, rongeurs ou basse-cour : retrouvez au Comptoir l\'alimentation, les accessoires et les produits de soin dont vos compagnons ont besoin. Nous vous aidons à choisir la nourriture et le matériel adaptés à leur âge et à leurs habitudes.',
        blocks: [ { type: 'cards', items: [
          { title: 'Chiens & chats', text: 'Croquettes, friandises, couchages, jouets, colliers et laisses.', img: 'dachshund' },
          { title: 'Oiseaux & basse-cour', text: 'Graines, mangeoires, aliments pour poules.', img: 'cat-card' },
          { title: 'Petits animaux', text: 'Alimentation et litières pour lapins et rongeurs.', img: 'u-dog2' },
          { title: 'Hygiène & soins', text: 'Antiparasitaires, shampoings, accessoires de toilettage.', img: 'u-dog' } ] },
          { type: 'gallery', imgs: ['horse-feed','pavo','dachshund'] }, { type: 'cta', text: 'Un besoin précis ? Appelez-nous pour vérifier la disponibilité.' } ] },
      en: { nav: 'Pet shop', title: 'The Comptoir pet shop',
        intro: 'Dogs, cats, birds, small animals or backyard poultry: find the food, accessories and care products your companions need at the Comptoir. We\'ll help you choose food and equipment suited to their age and habits.',
        blocks: [ { type: 'cards', items: [
          { title: 'Dogs & cats', text: 'Kibble, treats, beds, toys, collars and leads.', img: 'dachshund' },
          { title: 'Birds & poultry', text: 'Seed, feeders, chicken feed.', img: 'cat-card' },
          { title: 'Small animals', text: 'Food and bedding for rabbits and rodents.', img: 'u-dog2' },
          { title: 'Hygiene & care', text: 'Flea and tick treatments, shampoos, grooming accessories.', img: 'u-dog' } ] },
          { type: 'gallery', imgs: ['horse-feed','pavo','dachshund'] }, { type: 'cta', text: 'Looking for something specific? Call us to check availability.' } ] } },

    'deco-maison': { img: 'elephant',
      fr: { nav: 'Déco & maison', title: 'Déco & maison',
        intro: 'Le Comptoir, c\'est aussi une boutique pour faire entrer la nature chez vous : cache-pots, objets déco, idées cadeaux et accessoires du quotidien, sélectionnés au fil des saisons.',
        blocks: [ { type: 'cards', items: [
          { title: 'Déco intérieure & extérieure', text: 'Cache-pots, lanternes, objets de décoration.', img: 'solar-lamps' },
          { title: 'Idées cadeaux', text: 'Une plante, un pot, un objet, ou une carte cadeau pour les indécis.', img: 'soaps' },
          { title: 'Chaussures & confort', text: 'Sabots et chaussons doublés, légers, chauds et confortables, disponibles en magasin.', img: 'baskets' } ] },
          { type: 'gallery', title: 'Les nouveautés en boutique', imgs: ['elephant','lantern','roses-basket','turtle-big','faux-flowers','fish','lantern2','lizard','confitures','paella','turtle-small','hats-palms'] } ] },
      en: { nav: 'Home & décor', title: 'Home & décor',
        intro: 'The Comptoir is also a shop for bringing nature into your home: plant pots, décor pieces, gift ideas and everyday accessories, chosen with the seasons.',
        blocks: [ { type: 'cards', items: [
          { title: 'Indoor & outdoor décor', text: 'Plant pots, lanterns, decorative objects.', img: 'solar-lamps' },
          { title: 'Gift ideas', text: 'A plant, a pot, an object, or a gift card for the undecided.', img: 'soaps' },
          { title: 'Footwear & comfort', text: 'Lined clogs and slippers, light, warm and comfortable, available in store.', img: 'baskets' } ] },
          { type: 'gallery', title: 'New in store', imgs: ['elephant','lantern','roses-basket','turtle-big','faux-flowers','fish','lantern2','lizard','confitures','paella','turtle-small','hats-palms'] } ] } },

    'services': { img: 'team', kids: ['recolte-olives'],
      fr: { nav: 'Services', title: 'Nos services',
        intro: 'Au Comptoir, on ne vous vend pas seulement une plante ou un outil : on vous accompagne pour que votre projet réussisse.',
        blocks: [ { type: 'tip', label: 'Conseil jardin', text: 'Une plante qui jaunit, un olivier à tailler, une haie à choisir ? Apportez une photo ou un rameau, notre équipe vous conseille gratuitement en magasin.' }, { type: 'subpages' }, { type: 'cta', text: 'Une question ? Appelez-nous ou passez en magasin' } ] },
      en: { nav: 'Services', title: 'Our services',
        intro: "At the Comptoir, we don't just sell you a plant or a tool: we help you make your project a success.",
        blocks: [ { type: 'tip', label: 'Garden advice', text: 'A plant turning yellow, an olive tree to prune, a hedge to choose? Bring a photo or a cutting and our team will advise you for free in store.' }, { type: 'subpages' }, { type: 'cta', text: 'Got a question? Call us or drop by the store.' } ] } },

    'recolte-olives': { img: 'u-hero', parent: 'services',
      fr: { nav: 'Récolte des olives', card: 'Peignes, filets, gaules électriques : vente et location de matériel.', title: 'Récolte des olives : vente et location de matériel',
        intro: 'La saison des olives approche. Pour récolter sans vous épuiser, le Comptoir vous propose à la vente et à la location le matériel de récolte : peignes, gaules, filets et outils électriques pour les grands arbres. Venez le voir en magasin, nous vous expliquons comment l\'utiliser.',
        blocks: [ { type: 'bullets', items: [
          { title: 'Location', text: 'Idéal pour une récolte familiale, à la journée ou au week-end.', tbc: 'Durées et tarifs à confirmer' },
          { title: 'Vente', text: 'Pour les oliveraies que vous récoltez chaque année.' },
          { title: 'Réservation', text: 'Appelez le 04 27 50 15 10 pour réserver le matériel, les week-ends de récolte partent vite.' } ] },
          { type: 'faq', title: 'Questions fréquentes', items: [
            { q: 'Quand récolter ses olives ?', a: "En général d'octobre à décembre selon la variété et l'usage (olives de table ou huile)." },
            { q: 'Faut-il une caution pour la location ?', a: 'À confirmer', tbc: true },
            { q: 'Où faire presser mes olives ?', a: 'Option : moulins partenaires de la vallée', tbc: true } ] },
          { type: 'cta', text: 'Réservez votre matériel au 04 27 50 15 10' } ] },
      en: { nav: 'Olive harvest', card: 'Combs, nets, electric harvesters: equipment for sale and rent.', title: 'Olive harvest: equipment for sale and rent',
        intro: "Olive season is coming. To harvest without wearing yourself out, the Comptoir offers harvesting equipment for sale and for rent: combs, rakes, nets and electric harvesters for large trees. Come and see it in store and we'll show you how to use it.",
        blocks: [ { type: 'bullets', items: [
          { title: 'Rental', text: 'Ideal for a family harvest, by the day or the weekend.', tbc: 'Durations and prices to be confirmed' },
          { title: 'Purchase', text: 'For olive groves you harvest every year.' },
          { title: 'Booking', text: 'Call +33 4 27 50 15 10 to reserve equipment, harvest weekends book up fast.' } ] },
          { type: 'faq', title: 'FAQ', items: [
            { q: 'When should I harvest my olives?', a: 'Usually from October to December, depending on the variety and use (table olives or oil).' },
            { q: 'Is a deposit required for rental?', a: 'To be confirmed', tbc: true },
            { q: 'Where can I get my olives pressed?', a: 'Option: partner mills in the valley', tbc: true } ] },
          { type: 'cta', text: 'Book your equipment on +33 4 27 50 15 10' } ] } },

    'promotions': { img: 'u-strel',
      fr: { nav: 'Promotions', title: 'Les bons plans du Comptoir',
        intro: 'Chaque mois, des offres sur une sélection de plantes, d\'outils et de produits. Les offres sont valables en magasin, dans la limite des stocks disponibles.',
        blocks: [ { type: 'offers', items: [
          { badge: '-30 %', title: "Strelitzia, l'exotisme dans votre jardin", detail: '-30 % ou 2 achetés = 1 offert', period: "Jusqu'à fin septembre", img: 'u-strel' },
          { badge: '3 €', title: 'Râteaux Leborgne', detail: '3 € remboursés', period: 'Offre du moment', img: 'u-nursery' } ] } ] },
      en: { nav: 'Offers', title: "The Comptoir's best deals",
        intro: 'Every month, offers on a selection of plants, tools and products. Offers are valid in store, while stocks last.',
        blocks: [ { type: 'offers', items: [
          { badge: '-30%', title: 'Strelitzia, the exotic touch for your garden', detail: '-30% or buy 2, get 1 free', period: 'Until end of September', img: 'u-strel' },
          { badge: '€3', title: 'Leborgne rakes', detail: '€3 cashback', period: 'Current offer', img: 'u-nursery' } ] } ] } },

    'actualites': { img: 'v6-poster',
      fr: { nav: 'Actualités', title: 'La vie du Comptoir', intro: 'Concours, événements, engagements et conseils de saison.',
        blocks: [ { type: 'news', items: [
          { tag: 'Concours', text: "Gagnez un Strelitzia d'une valeur de 58,50 €, tirage au sort en magasin.", img: 'u-strel2' },
          { tag: 'Octobre Rose', text: "Des fleurs aux couleurs de l'espoir pour soutenir la lutte contre le cancer du sein.", img: 'daffodils' },
          { tag: 'Conseil de saison', text: 'Préparer sa récolte d\'olives.', img: 'u-olive1', href: 'recolte-olives' },
          { tag: 'Le Comptoir dans la région', text: 'Présence au concours départemental du Var au MeloBeaRanch.', img: 'team' } ] } ] },
      en: { nav: 'News', title: 'Life at the Comptoir', intro: 'Giveaways, events, causes we support and seasonal tips.',
        blocks: [ { type: 'news', items: [
          { tag: 'Giveaway', text: 'Win a Strelitzia worth €58.50, prize draw in store.', img: 'u-strel2' },
          { tag: 'Pink October', text: 'Flowers in the colours of hope to support the fight against breast cancer.', img: 'daffodils' },
          { tag: 'Seasonal tip', text: 'Getting ready for the olive harvest.', img: 'u-olive1', href: 'recolte-olives' },
          { tag: 'The Comptoir in the region', text: 'At the Var departmental competition at MeloBeaRanch.', img: 'team' } ] } ] } },

    'a-propos': { img: 'team',
      fr: { nav: 'À propos', title: 'Qui sommes-nous ?',
        intro: "Le Comptoir de la Vallée est né d'une envie simple : offrir aux habitants d'Auriol et de la vallée un lieu où trouver tout pour le jardin, les animaux et la maison, avec de vrais conseils.",
        blocks: [ { type: 'tbc', text: 'À compléter : histoire, date d\'ouverture, prénoms et photo de l\'équipe.' },
          { type: 'bullets', title: 'Nos engagements', items: [ { title: 'Des plantes sélectionnées pour le climat provençal' }, { title: 'Un conseil personnalisé, en magasin ou par téléphone' }, { title: 'Un commerce local, impliqué dans la vie de la vallée' } ] } ] },
      en: { nav: 'About', title: 'Who we are',
        intro: 'Le Comptoir de la Vallée was born from a simple idea: give the people of Auriol and the valley one place to find everything for their garden, pets and home, with real advice.',
        blocks: [ { type: 'tbc', text: 'To complete: story, opening date, team names and photo.' },
          { type: 'bullets', title: 'Our commitments', items: [ { title: 'Plants selected for the Provençal climate' }, { title: 'Personal advice, in store or by phone' }, { title: 'A local business, involved in life in the valley' } ] } ] } },

    'contact': { img: 'olive-table',
      fr: { nav: 'Contact', title: 'Nous rendre visite', intro: '891 route de Saint-Zacharie, 13390 Auriol · 04 27 50 15 10',
        blocks: [ { type: 'info' }, { type: 'form' } ] },
      en: { nav: 'Contact', title: 'Visit us', intro: '891 route de Saint-Zacharie, 13390 Auriol, France · +33 4 27 50 15 10',
        blocks: [ { type: 'info' }, { type: 'form' } ] } },

    'mentions-legales': { legal: true, fr: { nav: 'Mentions légales', title: 'Mentions légales', blocks: [ { type: 'tbc', text: 'Contenu à fournir par le client.' } ] }, en: { nav: 'Legal notice', title: 'Legal notice', blocks: [ { type: 'tbc', text: 'Content to be supplied by the client.' } ] } },
    'confidentialite': { legal: true, fr: { nav: 'Politique de confidentialité', title: 'Politique de confidentialité', blocks: [ { type: 'tbc', text: 'Contenu à fournir par le client.' } ] }, en: { nav: 'Privacy policy', title: 'Privacy policy', blocks: [ { type: 'tbc', text: 'Content to be supplied by the client.' } ] } },
    'cookies': { legal: true, fr: { nav: 'Gestion des cookies', title: 'Gestion des cookies', blocks: [ { type: 'tbc', text: 'Contenu à fournir par le client.' } ] }, en: { nav: 'Cookie settings', title: 'Cookie settings', blocks: [ { type: 'tbc', text: 'Content to be supplied by the client.' } ] } }
  },
  images: {
    'u-hero': ['https://images.unsplash.com/photo-1730105484667-07f12146b7fd?auto=format&fit=crop&w=1600&q=70', 'Mohamed Fsili', 'mfsili'],
    'u-olive1': ['https://images.unsplash.com/photo-1699727213807-fbd3d3278673?auto=format&fit=crop&w=1600&q=70', 'The Now Time', 'thenowtime'],
    'u-olive2': ['https://unsplash.com/photos/PEOuy4cBI48/download?w=1400', 'Jason Leung', 'ninjason'],
    'u-olive4': ['https://unsplash.com/photos/BXVnafOID_8/download?w=1400', 'Natalia Gusakova', 'nataliaraylenegusakova'],
    'u-nursery': ['https://images.unsplash.com/photo-1749372527996-6db07fc8a0a1?auto=format&fit=crop&w=1400&q=70', 'Odile', 'odile__'],
    'u-dog': ['https://images.unsplash.com/photo-1621266778264-2122ca94a05c?auto=format&fit=crop&w=1400&q=70', 'Helena Lopes', 'helenalopesph'],
    'u-dog2': ['https://unsplash.com/photos/ZNkgygvhmMM/download?w=1400', 'Barnabas Davoti', 'davotibarna'],
    'u-pots': ['https://images.unsplash.com/photo-1749518295706-dc15ca3b5fd5?auto=format&fit=crop&w=1400&q=70', 'Christie Luke', 'christieluke'],
    'u-strel': ['https://images.unsplash.com/photo-1745242369599-e3d2ebb0bfe1?auto=format&fit=crop&w=1400&q=70', 'Caroline Badran', '___atmos'],
    'u-strel2': ['https://unsplash.com/photos/C4jbVNd4_to/download?w=1400', 'Stan Tuladhar', 'stan_dgafos_tuladhar']
  },
  dims: { hats: 1222, 'pots-teal': 1094, 'pots-stack': 1094, 'olive-table': 1197, 'table-stools': 1197, fish: 1118, 'turtle-small': 1118, lizard: 1118, 'turtle-big': 1226, elephant: 1226, daffodils: 1248, dachshund: 1137, palms: 1248, team: 1111, 'pots-square': 1096, 'hats-palms': 1225, cycas: 1226, 'roses-basket': 1228, 'faux-flowers': 1119, 'pink-flowers': 1228, peonies: 1228, paella: 1334, 'solar-lamps': 1084, lantern: 1084, lantern2: 1084, 'horse-feed': 1222, pavo: 1218, baskets: 1227, 'cactus-red': 1043, 'cactus-field': 1043, 'cactus-barrel': 1149, 'cactus-tall': 1149, muguet: 1008, muguet2: 1008, soaps: 1229, confitures: 1251 }
};

SITE.imgOf = function (k) {
  if (!k) return null;
  if (this.images[k]) { const [src, name, user] = this.images[k]; return { src, credit: 'Photo by ' + name + ' on Unsplash', href: 'https://unsplash.com/@' + user, ratio: '4/5' }; }
  const m = /^v(\d)-poster$/.exec(k);
  if (m) return { src: 'assets/videos/' + k + '.jpg', credit: '', href: '', ratio: m[1] === '7' ? '576/816' : '9/16' };
  return { src: 'assets/photos/' + k + '.jpg', credit: '', href: '', ratio: '1000/' + (this.dims[k] || 1200) };
};
SITE.firstSentence = function (s) { return (s || '').split(/(?<=[.!?:])\s/)[0]; };
SITE.hasMega = function (k) { const P = this.pages[k]; return !!(P && (P.kids || P.fr.blocks.some(function (b) { return b.type === 'cards'; }))); };
SITE.megaFor = function (k, lang, href) {
  const P = this.pages[k]; if (!P || !this.hasMega(k)) return null;
  const pg = P[lang], S = this, L = lang === 'en';
  let links = [];
  if (P.kids) links = P.kids.map(function (c) { return { label: S.pages[c][lang].nav, text: S.pages[c][lang].card || '', href: href(c) }; });
  const cards = (pg.blocks.find(function (b) { return b.type === 'cards'; }) || {}).items;
  if (cards) links = links.concat(cards.map(function (c) { return { label: c.title, text: c.text, href: href(k) }; }));
  const tip = pg.blocks.find(function (b) { return b.type === 'tip'; });
  if (tip) links.unshift({ label: tip.label, text: S.firstSentence(tip.text), href: href(k) });
  const offer = this.pages.promotions[lang].blocks[0].items[0];
  return { key: k, label: pg.nav, intro: this.firstSentence(pg.intro), href: href(k), img: this.imgOf(P.img),
    links: links.slice(0, 8).map(function (l, i) { return Object.assign({}, l, { n: i + 1 }); }),
    kicker: L ? 'Explore' : 'Découvrir', viewAll: L ? 'View all' : 'Tout voir', promoKicker: L ? 'Offer of the moment' : 'Offre du moment',
    promo: { badge: offer.badge, title: offer.title, href: href('promotions') } };
};
SITE.footer = function (lang, href) {
  const L = lang === 'en', S = this, p = function (k) { return { label: S.pages[k][lang].nav, href: href(k) }; };
  return {
    ctaTitle: L ? 'Come and see us' : 'Venez nous voir', ctaEm: L ? 'in Auriol' : 'à Auriol',
    address: L ? '891 route de Saint-Zacharie, 13390 Auriol, France' : '891 route de Saint-Zacharie, 13390 Auriol',
    phone: L ? '+33 4 27 50 15 10' : '04 27 50 15 10', directions: L ? 'Directions' : 'Itinéraire',
    tagline: L ? 'Everything for your garden and your pets.' : 'Tout pour votre jardin & vos animaux.',
    cols: [ { title: L ? 'Garden centre' : 'Jardinerie', links: this.pages.jardinerie.kids.map(p) },
            { title: 'Le Comptoir', links: ['animalerie', 'deco-maison', 'services', 'promotions', 'actualites', 'a-propos', 'contact'].map(p) } ],
    infoTitle: L ? 'Practical info' : 'Infos pratiques', hoursK: L ? 'Hours' : 'Horaires', tbc: L ? 'To be confirmed' : 'À confirmer', phoneK: L ? 'Phone' : 'Téléphone',
    legal: this.legal.map(p), copy: '© 2026 Le Comptoir de la Vallée', top: L ? 'Back to top' : 'Haut de page', follow: L ? 'Follow us' : 'Suivez-nous'
  };
};

SITE.reviews = {
  rating: '4,7', ratingEn: '4.7', count: 444,
  mapsUrl: 'https://maps.google.com/?cid=8815692579375810548',
  items: [
    { name: 'Julie Lallement', meta: 'Local Guide · 28', when: 'a year ago', whenFr: 'il y a un an', c: '#b4602f',
      en: 'A wonderful transformation since the change of ownership! A huge selection of quality plants, a friendly welcome, and excellent advice! A new pottery section with a wide variety of choices – a truly beautiful garden center!',
      fr: "Une superbe transformation depuis le changement de propriétaire ! Un immense choix de plantes de qualité, un accueil sympathique et d'excellents conseils ! Un nouveau rayon poterie avec beaucoup de choix, une très belle jardinerie !" },
    { name: 'Marie Fitness', meta: '5', when: 'a year ago', whenFr: 'il y a un an', c: '#2f3b25',
      en: 'This is truly an excellent garden center. The potting soils are of excellent quality, at very affordable prices. The staff are dedicated and very friendly! So I go there every week!',
      fr: 'Une vraiment excellente jardinerie. Les terreaux sont d\'excellente qualité, à des prix très abordables. Le personnel est dévoué et très sympathique ! Du coup, j\'y vais chaque semaine !' },
    { name: 'Vanessa Rizzuto', meta: '9', when: 'a year ago', whenFr: 'il y a un an', c: '#7b3fa0',
      en: "Honestly, the staff are super friendly and give us excellent advice! And there's a huge selection of flowers and much more. Without hesitation, go for it!!",
      fr: 'Franchement, le personnel est super sympa et nous donne d\'excellents conseils ! Et il y a un énorme choix de fleurs et bien plus encore. Sans hésiter, foncez !!' },
    { name: 'Sylviane Blanchard', meta: 'Local Guide · 170', when: '3 months ago', whenFr: 'il y a 3 mois', c: '#1a73e8',
      en: "A completely renovated establishment. It's great, with a wide variety of decorative items. The plants are beautiful.",
      fr: 'Un établissement entièrement rénové. C\'est top, avec une grande variété d\'objets de décoration. Les plantes sont magnifiques.' },
    { name: 'amandine blangy', meta: 'Local Guide · 52', when: 'a year ago', whenFr: 'il y a un an', c: '#e8590c',
      en: "A beautiful shop, the decor is splendid, as are the plants and flowers. I'm delighted it's only 5 minutes from home – perfect for gift shopping!",
      fr: 'Une belle boutique, la déco est splendide, tout comme les plantes et les fleurs. Ravie qu\'elle soit à 5 minutes de chez moi, parfait pour les cadeaux !' },
    { name: 'dominique mannella', meta: '4', when: 'a year ago', whenFr: 'il y a un an', c: '#5c6b3a',
      en: 'A very warm welcome, pleasant, friendly, and competent staff. They take care of your needs and are especially helpful advisors.',
      fr: 'Un très bon accueil, un personnel agréable, sympathique et compétent. Ils sont à l\'écoute de vos besoins et de très bon conseil.' },
    { name: 'DIDIER Durand', meta: '6', when: 'a year ago', whenFr: 'il y a un an', c: '#d6336c',
      en: 'Finally, a welcoming plant nursery with a selection of Mediterranean plants and top-notch Anduze pottery!',
      fr: 'Enfin une pépinière accueillante, avec une sélection de plantes méditerranéennes et des poteries d\'Anduze au top !' },
    { name: 'Fabienne Caillol', meta: '2', when: '3 months ago', whenFr: 'il y a 3 mois', c: '#ae3ec9',
      en: 'Very nice layout and variety of products', fr: 'Très bel agencement et belle variété de produits' }
  ],
  photos: [ ['shop-flowers', 1360, 1020], ['shop-epicerie', 1360, 558], ['shop-wines', 765, 1020], ['shop-entrance', 1400, 709], ['shop-snow', 1360, 1020] ]
};
