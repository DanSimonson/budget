import React, { useRef, useState, useEffect } from "react";
import UpdateBudgetcss from "./UpdateBudget.module.css";

function UpdateChildForm({ transaction, isLoading }) {
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
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      {isLoading === true ? (
        <div>loading...</div>
      ) : (
        <div className={UpdateBudgetcss.formStyle}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <span className={UpdateBudgetcss.number}></span> Budget Info
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
                <p>Type</p>
                <input
                  type="text"
                  name="type"
                  value={value.type}
                  onChange={handleChange}
                  placeholder={`${transaction.type}`}
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
              <input type="submit" />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateChildForm;
