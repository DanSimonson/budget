import React, { useState } from "react";
import { useAddCategoryMutation } from "../../features/api/apiSlice";
import CreateCategorycss from "./CreateCategory.module.css";

function Createbudget() {
  const [addCategory] = useAddCategoryMutation();
  const [value, setValue] = useState([
    {
      title: "",
      color: "",
      amount: 0,
    },
  ]);

  const handleChange = (e) => {
    setValue({
      ...value,
      color: "",
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue({
      ...value,
    });
    await addCategory(value);
  };

  return (
    <div className={CreateCategorycss.formStyle}>
      <form>
        <fieldset>
          <legend>
            <span className={CreateCategorycss.number}></span> Add Category Info
          </legend>
          <label>
            <p>Category</p>
            <input
              type="text"
              name="title"
              value={value.title}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Amount</p>
            <input
              type="text"
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

export default Createbudget;

/* 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
<div>
        <FontAwesomeIcon icon={faEdit} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faPlus} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faMinus} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faTrash} className={Createbudgetcss.edit} />
</div>
*/
