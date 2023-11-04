import React, { useRef, useState, useEffect } from "react";
import { useAddTransactionMutation } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import CreateTransactioncss from "./CreateTransaction.module.css";

function CreateTransaction() {
  const [addTransaction] = useAddTransactionMutation();
  const [value, setValue] = useState([
    {
      category: "",
      type: "",
      name: "",
      amount: 0,
    },
  ]);

  const handleChange = (e) => {
    setValue({
      ...value,
      type: "",
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue({
      ...value,
    });
    await addTransaction(value);
  };

  return (
    <div className={CreateTransactioncss.formStyle}>
      <form>
        <fieldset>
          <legend>
            <span className={CreateTransactioncss.number}></span> Add
            Transaction Info
          </legend>
          <label>
            <p>Category</p>
            <input
              type="text"
              name="category"
              value={value.category}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              value={value.amount}
              onChange={handleChange}
            />
          </label>
          <input type="button" onClick={handleSubmit} />
        </fieldset>
      </form>
    </div>
  );
}

export default CreateTransaction;

/*
import React, { useRef, useState, useEffect } from "react";
import { useGetTransactionQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import UpdateChildForm from "./UpdateChildForm";
function UpdateParent() {
  const { budgetid } = useParams();
  const {
    data: transaction,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetTransactionQuery(budgetid);
  return (
    <div>
      <UpdateChildForm transaction={transaction} isLoading={isLoading} />
    </div>
  );
}

export default UpdateParent;
*/
