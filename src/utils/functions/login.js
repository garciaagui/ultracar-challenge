import { MIN_PASSWORD_LENGTH } from '../constants';
import mockedUsers from '../../data/mockedUsers';

const validateEmail = (inputEmail) =>
  String(inputEmail)
    .toLowerCase()
    .match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);

const validateBtnDisablement = (loginData, setButtonState) => {
  const { email, password } = loginData;
  if (validateEmail(email) && password.length >= MIN_PASSWORD_LENGTH) {
    setButtonState(false);
  } else {
    setButtonState(true);
  }
};

const getUserData = (loginData) => {
  const { email, password } = loginData;

  const foundUser = mockedUsers.find((user) => user.email === email);

  if (!foundUser || password !== foundUser.password) return false;
  return foundUser;
};

const handleInputChanges = ({ target }, setLoginState) => {
  const { name, value } = target;
  setLoginState((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export { validateBtnDisablement, getUserData, handleInputChanges };
