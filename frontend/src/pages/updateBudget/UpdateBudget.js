// import React, { useRef, useState, useEffect } from "react";
// import {
//   useGetTransactionsQuery,
//   useGetTransactionQuery,
//   useUpdateTransactionMutation,
// } from "../../features/api/apiSlice";
// import { useParams } from "react-router-dom";
// import UpdateBudgetcss from "./UpdateBudget.module.css";

// function Update() {
//   const myRef = useRef();
//   const [value, setValue] = useState([
//     {
//       id: "",
//       category: "",
//       type: "",
//       name: "",
//       amount: 0,
//     },
//   ]);
//   const { budgetid } = useParams();
//   const {
//     data: transaction,
//     isSuccess,
//     isError,
//     isLoading,
//     isFetching,
//   } = useGetTransactionQuery(budgetid);
//   const { data } = useUpdateTransactionMutation;
//   //console.log("transaction: ", transaction);
//   // if (typeof value != "undefined") {
//   //   if (value.length != 0) {
//   //     console.log("value: ", value);
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchData();
//   // }, [value, setValue]);

//   // const fetchData = () => {
//   //   setValue(data);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("transaction: ", transaction);
//     console.log("submitted!");
//     console.log("handlesubmit value: ", value);
//     //const [updateTodo] = useUpdateTodoMutation()
//     //onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
//   };
//   const handleChange = (e) => {
//     setValue({
//       ...value,
//       [e.target.name]: e.target.value,
//       [e.target.name]: e.target.value,
//       [e.target.name]: e.target.value,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <div className={UpdateBudgetcss.formStyle}>
//         <form onSubmit={handleSubmit}>
//           <fieldset>
//             <legend>
//               <span className={UpdateBudgetcss.number}></span> Budget Info
//             </legend>
//             <input
//               type="text"
//               name="category"
//               value={value.category}
//               onChange={handleChange}
//               placeholder="category"
//             />
//             <input
//               type="text"
//               name="type"
//               value={value.type}
//               onChange={handleChange}
//               placeholder="type"
//             />
//             <input
//               type="text"
//               name="name"
//               value={value.name}
//               onChange={handleChange}
//               placeholder="name"
//             />
//             <input
//               type="number"
//               name="amount"
//               value={value.amount}
//               onChange={handleChange}
//               placeholder="amount"
//             />
//             <input type="submit" />
//           </fieldset>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Update;
