export const Calculate = (category, transactions) => {
  let total = transactions.reduce((previousValue, currentValue) => {
    return { amount: previousValue.amount + currentValue.amount };
  });
  let newNum = category[0].amount - total.amount;
  let calculationArray = [];
  let calculation = {
    amount: category[0].amount,
    remainingAmount: newNum,
  };
  calculationArray.push(calculation);
  return calculationArray;
};
