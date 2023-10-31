import React, { useRef, useState } from "react";
import { useGetTransactionsQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import UpdateBudgetcss from "./UpdateBudget.module.css";

function Update() {
  const [items, setItems] = useState();
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const { budgetid } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetTransactionsQuery();
  console.log("budgetid: ", budgetid);
  console.log("data: ", data);
  //let myData = data.filter((el) => el.category === title);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};

  return (
    <>
      <div className={UpdateBudgetcss.formStyle}>
        <form>
          <fieldset>
            <legend>
              <span className={UpdateBudgetcss.number}></span> Budget Info
            </legend>
            <input type="text" name="name" placeholder="Your Name *" />
            <input type="text" name="type" placeholder="Your Type *" />
            <input type="number" name="amount" placeholder="Your Amount *" />
            <input type="text" name="category" placeholder="Your Category *" />
            <input type="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Update;
