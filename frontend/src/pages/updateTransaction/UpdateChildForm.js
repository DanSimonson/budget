import React, { useRef, useState, useEffect } from "react";
import { useUpdateTransactionMutation } from "../../features/api/apiSlice";
import UpdateTransactioncss from "./UpdateTransaction.module.css";

function UpdateChildForm({ transaction, isLoading }) {
  const [updateTransaction] = useUpdateTransactionMutation();
  const [value, setValue] = useState([
    {
      id: "",
      category: "",
      type: "",
      name: "",
      amount: 0,
    },
  ]);

  const handleChange = (e) => {
    setValue({
      ...value,
      id: transaction._id,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setValue({
      ...value,
    });
    await updateTransaction(value);
  };

  return (
    <div>
      {isLoading === true ? (
        <div>loading...</div>
      ) : (
        <div className={UpdateTransactioncss.formStyle}>
          <form>
            <fieldset>
              <legend>
                <span className={UpdateTransactioncss.number}></span> Update
                Transaction Info
              </legend>
              <label>
                <p>Category</p>
                <input
                  type="text"
                  name="category"
                  value={value.category}
                  onChange={handleChange}
                  placeholder={`${transaction.category}`}
                />
              </label>
              <label>
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={value.name}
                  onChange={handleChange}
                  placeholder={`${transaction.name}`}
                />
              </label>
              <label>
                <p>Amount</p>
                <input
                  type="number"
                  name="amount"
                  value={value.amount}
                  onChange={handleChange}
                  placeholder={`${transaction.amount}`}
                />
              </label>
              <input type="button" onClick={handleSubmit} />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateChildForm;
