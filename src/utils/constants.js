const LOGIN_INITIAL_STATE = { email: '', password: '' };
const USER_INITIAL_STATE = { email: '', name: '' };
const ORDER_INITIAL_STATE = {
  id: 0,
  customer: {},
  employee: '',
  service: {},
  price: 0,
  status: 'Iniciado',
  startDate: '',
  finishDate: '',
};

const MIN_PASSWORD_LENGTH = 6;

export {
  LOGIN_INITIAL_STATE,
  USER_INITIAL_STATE,
  ORDER_INITIAL_STATE,
  MIN_PASSWORD_LENGTH,
};
