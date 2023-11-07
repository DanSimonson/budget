import React, { useState } from "react";
import { useUpdateCategoryMutation } from "../../features/api/apiSlice";
import UpdateCategorycss from "./UpdateCategory.module.css";

function UpdateChildForm({ category, isLoading }) {
  const [updateCategory] = useUpdateCategoryMutation();
  const [value, setValue] = useState([
    {
      id: "",
      title: "",
      color: "",
      amount: 0,
    },
  ]);

  const handleChange = (e) => {
    setValue({
      ...value,
      id: category._id,
      color: "",
      title: category.title,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue({
      ...value,
    });
    await updateCategory(value);
  };
  return (
    <div>
      {isLoading === true ? (
        <div>loading...</div>
      ) : (
        <div className={UpdateCategorycss.formStyle}>
          <form>
            <fieldset>
              <legend>
                <span className={UpdateCategorycss.number}></span> Update
                Category Info
              </legend>
              <label>
                <p>Category</p>
                <input
                  type="text"
                  name="category"
                  value={value.title}
                  onChange={handleChange}
                  placeholder={`${category.title}`}
                  disabled
                  style={{ background: "#9999" }}
                />
              </label>
              <label>
                <p>Amount</p>
                <input
                  type="number"
                  name="amount"
                  value={value.amount}
                  onChange={handleChange}
                  placeholder={`${category.amount}`}
                />
              </label>
              <input type="button" value="Submit" onClick={handleSubmit} />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateChildForm;
