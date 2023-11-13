import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from "../../features/api/apiSlice";
import CreateCategorycss from "./CreateCategory.module.css";

function Createbudget() {
  const [addCategory] = useAddCategoryMutation();
  const { data: categories } = useGetCategoriesQuery();
  const [value, setValue] = useState([
    {
      title: "",
      color: "",
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
      color: "",
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(value));
    setIsSubmit(true);
    let doesExist = false;
    try {
      categories.map((category) => {
        if (category.title === value.title) {
          doesExist = true;
        }
      });
      if (doesExist === true) {
        setIsSubmit(false);

        setValue({
          title: "",
          color: "",
          amount: 0,
        });
        warn();
      } else {
        setValue({
          ...value,
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const asyncSubmit = async () => {
    try {
      await addCategory(value);
      setValue({
        title: "",
        color: "",
        amount: 0,
      });

      notify();
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  const validate = (value) => {
    const formErrors = {};
    if (!value.title) {
      formErrors.title = "Title is required";
    }

    if (!value.amount) {
      formErrors.amount = "Amount is required";
    }
    return formErrors;
  };
  const notify = () => {
    toast.success("🤠 Form submitted successfully!", {
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
    toast.error("💥 Duplicate found. Retry submit!", {
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
      <div className={CreateCategorycss.formStyle}>
        <form>
          <fieldset>
            <legend>
              <span className={CreateCategorycss.number}></span> Add Category
              Info
            </legend>
            <label>
              <p>Category</p>
              <input
                type="text"
                name="title"
                value={value.title}
                onChange={handleChange}
              />
              <p className={CreateCategorycss.error}>{errors.title}</p>
            </label>

            <label>
              <p>Amount</p>
              <input
                type="text"
                name="amount"
                value={value.amount}
                onChange={handleChange}
              />
              <p className={CreateCategorycss.error}>{errors.amount}</p>
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

export default Createbudget;
