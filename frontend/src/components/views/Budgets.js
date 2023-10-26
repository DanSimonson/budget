import React from "react";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import Budgetscss from "./Budgets.module.css";

const Budgets = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();
  console.log("data: ", data);

  if (error) {
    return (
      <>
        console.log('error: ', error)
        <div>Oops, an error occured:</div>;
      </>
    );
  }

  return (
    <>
      <div>
        <h1 className={Budgetscss.header}>Existing budgets</h1>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className={Budgetscss.contain}>
            {data.map((d) => (
              <>
                <div className={Budgetscss.wrap}>
                  <p>Budget Name: {d.title}</p>
                  <p>Amount: {d.amount}</p>
                  <button className={Budgetscss.button25} role="button">
                    View Details
                  </button>
                </div>
                {/* <div className={Budgetscss.buttondiv}>
                  <button className={Budgetscss.button25} role="button">
                    View Details
                  </button>
                </div> */}
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Budgets;
/**
 * {data.map(d => (
            <p className={Budgets.header}>
              {data[0].title} budget with a limit of ${data[0].amount}
            </p> )}
 */

{
  /* {userNames.map(name => <li>{name}</li>)} */
}
