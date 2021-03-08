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

// item taken from the camera
export const selectedRecommendedItem = {
  key: 'Remera rosa con mangas',
  image: require('./remera_recomendador.png'),
  price: '876.00',
  category: '',
  color: '',
};

// recommended item that will be chosen
export const userRecommendedItem = {
  key: 'Jean azul',
  image: require('./jean_recomendador.png'),
  price: '876.00',
  category: 'Jeans',
  color: 'Azul',
};

// all other recommended items
const fullRecommendedItems = [
  {
    key: 'Jean negro',
    image: require('./jean_negro.png'),
    price: '700.00',
    category: 'Jeans',
    color: 'Negro',
  },
  {
    key: 'Jean blanco',
    image: require('./jean_blanco.png'),
    price: '918.27',
    category: 'Jeans',
    color: 'Blanco',
  },
  {
    key: 'Pollera negra',
    image: require('./pollera_negra.png'),
    price: '350.00',
    category: '',
    color: 'Negro',
  },
  {
    key: 'Short de jean',
    image: require('./jean_recommender.png'),
    price: '876.99',
    category: 'Jeans',
    color: 'Azul',
  },
  {
    key: 'Short de jean negro',
    image: require('./short_negro_jean.png'),
    price: '444.99',
    category: 'Jeans',
    color: 'Negro',
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

// item from the catalog that will be chosen
export const selectedCatalogItem = {
  key: 'Remera roja',
  image: require('./remera_roja.png'),
  price: '123.00',
  category: 'Remeras',
  color: 'Rojo',
};

// all catalog items
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
    key: 'Remera un solo hombro',
    image: require('./remera_hombro.png'),
    price: '900.00',
    category: 'Remeras',
    color: 'Blanco',
  },
  {
    key: 'Jean rojo',
    image: require('./jean_rojo.jpg'),
    price: '400.00',
    category: 'Jeans',
    color: 'Rojo',
  },
  {
    key: 'Cinturón negro',
    image: require('./cinturon.jpg'),
    price: '300.00',
    category: '',
    color: 'Negro',
  },
  {
    key: 'Zapatillas',
    image: require('./zapatillas.jpg'),
    price: '800.00',
    category: 'Zapatillas',
    color: 'Blanco',
  },
  {
    key: 'Camisa Rosa',
    image: require('./camisa_recomendada.png'),
    price: '876.00',
    category: '',
    color: '',
  },
];

export const catalogItems = [
  ...[selectedCatalogItem],
  ...shuffle([...fullCatalogItems, ...recommendedItems]),
];
