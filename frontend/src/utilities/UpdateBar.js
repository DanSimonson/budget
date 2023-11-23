export const UpdateBar = (calculation) => {
  let percentage = calculation[0].remainingAmount / calculation[0].amount;
  percentage = percentage * 100;
  return percentage;
};
