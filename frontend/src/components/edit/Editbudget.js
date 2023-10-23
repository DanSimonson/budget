import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editcss from "./Edit.module.css";
const EditBudget = ({ setIsEditing }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className={Editcss.edit}>
        <input
          required="required"
          type="number"
          className={Editcss.editinput}
          id="name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="button"
          className={Editcss.button}
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditBudget;
