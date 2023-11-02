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
  console.log("value: ", value);

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
              <input
                type="text"
                name="category"
                value={value.category}
                onChange={handleChange}
                placeholder={`${transaction.category}`}
              />
              <input type="submit" />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateChildForm;
