import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const EditBudget = ({ setIsEditing }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <input
        required="required"
        type="number"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsEditing(false)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
