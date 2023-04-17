import { MIN_PASSWORD_LENGTH } from '../constants';
import mockedUsers from '../../data/mockedUsers';

const isValidEmail = (inputEmail) =>
  String(inputEmail)
    .toLowerCase()
    .match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);

const validateLoginBtnDisablement = (loginData, setButtonState) => {
  const { email, password } = loginData;
  if (isValidEmail(email) && password.length >= MIN_PASSWORD_LENGTH) {
    setButtonState(false);
  } else {
    setButtonState(true);
  }
};

const validateLoginData = (loginData) => {
  const { email, password } = loginData;

  const foundUser = mockedUsers.find((user) => user.email === email);

  if (!foundUser || password !== foundUser.password) return false;
  return true;
};

export { validateLoginBtnDisablement, validateLoginData };
