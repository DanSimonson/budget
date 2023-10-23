import React from "react";
import Introcss from "./Intro.module.css";

function Intro() {
  //const { data, isLoading, isError, error } = useGetCategoriesQuery();
  //   <div className="cover">
  //             <h1>Login</h1>
  //             <input type="text" placeholder="username" />
  //             <input type="password" placeholder="password" />

  //             <div className="login-btn" onClick={popup}>Login</div>
  //             </div>
  return (
    <div className={Introcss.page}>
      <div className={Introcss.cover}>
        <div className="">Enter New Expense</div>
        <input type="text" placeholder="Enter Name" />
        <input type="number" placeholder="Enter Amount" />
        <button>Create Category</button>
      </div>
    </div>
  );
}

export default Intro;
