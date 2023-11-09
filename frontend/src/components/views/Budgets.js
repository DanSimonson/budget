import React from "react";
import {
  useGetCategoriesQuery,
  useGetTransactionsQuery,
  useDeleteCategoryMutation,
  useDeleteTransactionMutation,
} from "../../features/api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import RandomColors from "../../utilities/RandomColors";
import Budgetscss from "./Budgets.module.css";
import { useNavigate } from "react-router-dom";

const Budgets = () => {
  let myColors = [];
  myColors = RandomColors();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();
  const {
    data: transactions,
    isLoading: transactionLoading,
    //isSuccess,
    // isError,
    // error,
  } = useGetTransactionsQuery();
  const navigate = useNavigate();

  const deleteItem = async (categoryid) => {
    let foundCategory = categories.filter((el) => el._id === categoryid);
    let title = foundCategory[0].title;

    try {
      await transactions.filter((el) => {
        if (el.category === title) {
          deleteTransaction({ id: el._id });
        }
      });
      deleteCategory({ id: categoryid });
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  return (
    <>
      <div>
        <h1 className={Budgetscss.header}>Existing budgets</h1>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className={Budgetscss.contain}>
            {categories.map((d, index) => (
              <div key={d._id}>
                <div
                  className={Budgetscss.wrap}
                  style={{ background: `${myColors[index]}` }}
                  key={d._id}
                >
                  <p>Budget Category: {d.title}</p>
                  <p>Amount: {d.amount}</p>
                  <button
                    className={Budgetscss.button25}
                    role="button"
                    onClick={() => navigate(`/ViewBudget/${d._id}`)}
                  >
                    View Details
                  </button>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className={Budgetscss.edit}
                    onClick={() => navigate(`/UpdateCategory/${d._id}`)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={Budgetscss.trash}
                    onClick={() => {
                      deleteItem(d._id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Budgets;
