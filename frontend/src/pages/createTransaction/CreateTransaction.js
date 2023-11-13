import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddTransactionMutation,
  useGetTransactionsQuery,
} from "../../features/api/apiSlice";
import CreateTransactioncss from "./CreateTransaction.module.css";

function CreateTransaction() {
  const { data: transactions } = useGetTransactionsQuery();
  const [addTransaction] = useAddTransactionMutation();
  const [value, setValue] = useState([
    {
      category: "",
      type: "",
      name: "",
      amount: 0,
    },
  ]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      asyncSubmit();
    }
  }, [errors]);

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
    setErrors(validate(value));
    setIsSubmit(true);
    let isFound = false;
    let tempArr = [];
    try {
      tempArr = transactions.filter((a) => a.name === value.name);
      tempArr.map((item) => {
        if (
          value.category === item.category &&
          value.name === item.name &&
          isFound === false
        ) {
          isFound = true;
        }
      });
      if (isFound) {
        setIsSubmit(false);
        warn();
        setValue({
          category: "",
          type: "",
          name: "",
          amount: 0,
        });
      } else {
        setValue({
          ...value,
        });
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  const asyncSubmit = async () => {
    try {
      await addTransaction(value);
      setValue({
        category: "",
        type: "",
        name: "",
        amount: 0,
      });
      notify();
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  const validate = (value) => {
    const formErrors = {};
    if (!value.category) {
      formErrors.category = "Category is required";
    }

    if (!value.name) {
      formErrors.name = "Name is required";
    }

    if (!value.amount) {
      formErrors.amount = "Amount is required";
    }
    return formErrors;
  };

  const notify = () => {
    toast.success("😄 Form submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const warn = () => {
    toast.error("💥 Duplicate Found. Retry submission!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
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
              <p className={CreateTransactioncss.error}>{errors.category}</p>
            </label>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={value.name}
                onChange={handleChange}
              />
              <p className={CreateTransactioncss.error}>{errors.name}</p>
            </label>
            <label>
              <p>Amount</p>
              <input
                type="number"
                name="amount"
                value={value.amount}
                onChange={handleChange}
              />
              <p className={CreateTransactioncss.error}>{errors.amount}</p>
            </label>
            <input type="button" value="Submit" onClick={handleSubmit} />
          </fieldset>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ width: "350px" }}
      />
    </>
  );
}

export default CreateTransaction;
