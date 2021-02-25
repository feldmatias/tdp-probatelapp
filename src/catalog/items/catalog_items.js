export const itemCategories = [
  'Remeras',
  'Jeans',
  'Buzos',
  'Zapatillas',
  'Shorts',
];

export const selectedRecommendedItem = {
  key: 'Pantalón de jean',
  image: require('./jean.jpg'),
  price: '500.00',
  category: 'Jeans',
};

const fullRecommendedItems = [
  {
    key: 'Zapatillas',
    image: require('./zapatillas.jpg'),
    price: '800.00',
    category: 'Zapatillas',
  },
];

export const recommendedItems = [
  ...[selectedRecommendedItem],
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
];

export const catalogItems = [
  ...[selectedCatalogItem],
  ...fullCatalogItems,
  ...recommendedItems,
];
