const validateBtnDisablement = (order, setButtonState) => {
  const { customer, employee, service } = order;

  if (
    !Object.keys(customer).length ||
    !Object.keys(service).length ||
    !employee.length
  ) {
    setButtonState(true);
  } else {
    setButtonState(false);
  }
};

const setEmployee = (value, setOrderState) => {
  setOrderState((prevState) => ({
    ...prevState,
    employee: value,
  }));
};

const getTotalPrice = ({ parts, price }) => {
  let servicePrice = price;

  if (parts.length) {
    parts.forEach((part) => {
      servicePrice += part.price;
    });
  }

  return servicePrice;
};

export { validateBtnDisablement, setEmployee, getTotalPrice };
