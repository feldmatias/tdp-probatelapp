export const itemCategories = [
  'Remeras',
  'Jeans',
  'Buzos',
  'Zapatillas',
  'Shorts',
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const selectedRecommendedItem = {
  key: 'Short de Jean',
  image: require('./jean_recommender.png'),
  price: '876.00',
  category: 'Jeans',
};

export const userRecommendedItem = {
  key: 'Camisa Rosa',
  image: require('./camisa_recomendada.png'),
  price: '876.00',
  category: '',
};

const fullRecommendedItems = [
  {
    key: 'Cinturón negro',
    image: require('./cinturon.jpg'),
    price: '300.00',
    category: '',
  },
  {
    key: 'Remera un solo hombro',
    image: require('./remera_hombro.png'),
    price: '900.00',
    category: 'Remeras',
  },
  {
    key: 'Zapatos',
    image: require('./zapatos.png'),
    price: '777.00',
    category: 'Zapatillas',
  },
];

export const recommendedItems = [
  ...[userRecommendedItem],
  ...fullRecommendedItems,
];

export const selectedCatalogItem = {
  key: 'Remera roja',
  image: require('./remera_roja.png'),
  price: '123.00',
  category: 'Remeras',
};

const fullCatalogItems = [
  {
    key: 'Buzo azul',
    image: require('./buzo_azul.jpg'),
    price: '208.50',
    category: 'Buzos',
  },
  {
    key: 'Remera negra',
    image: require('./remera_negra.jpg'),
    price: '568.00',
    category: 'Remeras',
  },
  {
    key: 'Bermuda de jean',
    image: require('./bermuda_jean.jpg'),
    price: '999.99',
    category: 'Jeans',
  },
  {
    key: 'Pantalón de jean',
    image: require('./jean.jpg'),
    price: '500.00',
    category: 'Jeans',
  },
  {
    key: 'Zapatillas',
    image: require('./zapatillas.jpg'),
    price: '800.00',
    category: 'Zapatillas',
  },
];

export const catalogItems = [
  ...[selectedCatalogItem],
  ...shuffle([...fullCatalogItems, ...recommendedItems]),
];
