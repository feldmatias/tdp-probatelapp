export const itemCategories = [
  'Remeras',
  'Jeans',
  'Buzos',
  'Zapatillas',
  'Shorts',
];

export const itemColors = [
  'Azul',
  'Rojo',
  'Verde',
  'Amarillo',
  'Blanco',
  'Negro',
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
  color: 'Azul',
};

export const userRecommendedItem = {
  key: 'Camisa Rosa',
  image: require('./camisa_recomendada.png'),
  price: '876.00',
  category: '',
  color: '',
};

const fullRecommendedItems = [
  {
    key: 'Cinturón negro',
    image: require('./cinturon.jpg'),
    price: '300.00',
    category: '',
    color: 'Negro',
  },
  {
    key: 'Remera un solo hombro',
    image: require('./remera_hombro.png'),
    price: '900.00',
    category: 'Remeras',
    color: 'Blanco',
  },
  {
    key: 'Zapatos',
    image: require('./zapatos.png'),
    price: '777.00',
    category: 'Zapatillas',
    color: 'Negro',
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
  color: 'Rojo',
};

const fullCatalogItems = [
  {
    key: 'Buzo azul',
    image: require('./buzo_azul.jpg'),
    price: '208.50',
    category: 'Buzos',
    color: 'Azul',
  },
  {
    key: 'Remera negra',
    image: require('./remera_negra.jpg'),
    price: '568.00',
    category: 'Remeras',
    color: 'Negro',
  },
  {
    key: 'Bermuda de jean',
    image: require('./bermuda_jean.jpg'),
    price: '999.99',
    category: 'Jeans',
    color: 'Azul',
  },
  {
    key: 'Pantalón de jean',
    image: require('./jean.jpg'),
    price: '500.00',
    category: 'Jeans',
    color: 'Azul',
  },
  {
    key: 'Pantalón de jean rojo',
    image: require('./jean_rojo.jpg'),
    price: '400.00',
    category: 'Jeans',
    color: 'Rojo',
  },
  {
    key: 'Zapatillas',
    image: require('./zapatillas.jpg'),
    price: '800.00',
    category: 'Zapatillas',
    color: 'Blanco',
  },
];

export const catalogItems = [
  ...[selectedCatalogItem],
  ...shuffle([...fullCatalogItems, ...recommendedItems]),
];
