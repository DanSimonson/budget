import React from "react";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import Budgetcss from "./Budget.module.css";
const Budget = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();

  if (error) {
    return (
      <>
        console.log('error: ', error)
        <div>Oops, an error occured:</div>;
      </>
    );
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <p className={Budgetcss.header}>
          {data[0].title} budget with a limit of ${data[0].amount}
        </p>
      )}
    </div>
  );
};

export default Budget;
