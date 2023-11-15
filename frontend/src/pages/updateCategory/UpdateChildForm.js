import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    try {
      setValue({
        ...value,
      });
      await updateCategory(value);
      notify();
    } catch (error) {
      console.log("error: ", error.message);
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
  );
}

export default UpdateChildForm;
