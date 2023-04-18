const mockedOrders = [
  {
    id: 1,
    customer: {
      id: 1,
      name: 'João',
      vehicle: 'Honda Civic',
      licensePlate: 'ABC-1234',
    },
    employee: 'Joana',
    service: {
      id: 3,
      name: 'Troca de pastilha de freio',
      price: 200,
      parts: [
        {
          name: 'Pastilha de freio dianteira',
          price: 100,
        },
        {
          name: 'Pastilha de freio traseira',
          price: 80,
        },
      ],
    },
    price: 380,
    status: 'Concluído',
    startDate: '10/04/2023',
    finishDate: '16/04/2023',
  },

  {
    id: 2,
    customer: {
      id: 2,
      name: 'Maria',
      vehicle: 'Chevrolet Onix',
      licensePlate: 'DEF-5678',
    },
    employee: 'Guilherme',
    service: {
      id: 2,
      name: 'Alinhamento e balanceamento',
      price: 150,
      parts: [],
    },
    price: 150,
    status: 'Concluído',
    startDate: '11/04/2023',
    finishDate: '12/04/2023',
  },

  {
    id: 3,
    customer: {
      id: 2,
      name: 'Maria',
      vehicle: 'Chevrolet Onix',
      licensePlate: 'DEF-5678',
    },
    employee: 'Patricia',
    service: {
      id: 9,
      name: 'Troca de filtro de ar',
      price: 80,
      parts: [
        {
          name: 'Filtro de ar',
          price: 50,
        },
      ],
    },
    price: 130,
    status: 'Iniciado',
    startDate: '13/04/2023',
    finishDate: '',
  },
];

export default mockedOrders;
