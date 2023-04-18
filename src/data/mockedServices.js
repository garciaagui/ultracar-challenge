const mockedServices = [
  {
    id: 1,
    name: 'Troca de óleo',
    price: 100,
    parts: [
      { name: 'Óleo do motor', price: 50 },
      { name: 'Filtro de óleo', price: 30 },
    ],
  },
  {
    id: 2,
    name: 'Alinhamento e balanceamento',
    price: 150,
    parts: [],
  },
  {
    id: 3,
    name: 'Troca de pastilha de freio',
    price: 200,
    parts: [
      { name: 'Pastilha de freio dianteira', price: 100 },
      { name: 'Pastilha de freio traseira', price: 80 },
    ],
  },
  {
    id: 4,
    name: 'Troca de bateria',
    price: 350,
    parts: [{ name: 'Bateria', price: 250 }],
  },
  {
    id: 5,
    name: 'Troca de correia dentada',
    price: 450,
    parts: [{ name: 'Correia dentada', price: 350 }],
  },
  {
    id: 6,
    name: 'Troca de amortecedores',
    price: 800,
    parts: [
      { name: 'Amortecedor dianteiro', price: 400 },
      { name: 'Amortecedor traseiro', price: 350 },
    ],
  },
  {
    id: 7,
    name: 'Troca de velas',
    price: 120,
    parts: [{ name: 'Jogo de velas', price: 80 }],
  },
  {
    id: 8,
    name: 'Troca de pneus',
    price: 600,
    parts: [
      { name: 'Pneu dianteiro', price: 250 },
      { name: 'Pneu traseiro', price: 250 },
    ],
  },
  {
    id: 9,
    name: 'Troca de filtro de ar',
    price: 80,
    parts: [{ name: 'Filtro de ar', price: 50 }],
  },
  {
    id: 10,
    name: 'Limpeza do ar condicionado',
    price: 150,
    parts: [],
  },
];

export default mockedServices;
