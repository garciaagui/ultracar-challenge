const validateOrderBtnDisablement = (order, setButtonState) => {
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

export default validateOrderBtnDisablement;
