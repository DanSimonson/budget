import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    try {
      setValue({
        ...value,
      });
      await updateTransaction(value);
      notify();
    } catch (error) {
      console.log("error: ", error.message);
      warn();
    }
  };
  const notify = () => {
    toast.success("😄 Update successfull!", {
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
    toast.error("💥 Submission error!", {
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
              <input type="button" value="Submit" onClick={handleSubmit} />
            </fieldset>
          </form>
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
        </div>
      )}
    </div>
  );
}
export default UpdateChildForm;
