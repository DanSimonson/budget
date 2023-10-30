import React, { useState } from "react";
import { useGetTransactionsQuery } from "../features/api/apiSlice";
import Budgets from "../components/views/Budgets";
import GetCategories from "../utilities/GetCategories";

function Home() {
  const { data, isLoading, error } = useGetTransactionsQuery();
  const [isEditing, setIsEditing] = useState(false);
  let categoriesObj = GetCategories();
  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (error) {
    return (
      <>
        console.log('error: ', error)
        <div>Oops, an error occured:</div>;
      </>
    );
  }

  return (
    <>
      <Budgets />
    </>
  );
}

export default Home;

// <>
//   <main id={Homecss.main}>
//     <Budgets />
//      <Intro />
//     <section id={Homecss.content}>
//       <div className={Homecss.row1}>
//         {isEditing ? (
//           <EditBudget setIsEditing={setIsEditing} />
//         ) : (
//           <ViewBudget handleEditClick={handleEditClick} />
//         )}
//       </div>
//       <div className={Homecss.row2}>2</div>
//       <div className="row3">3</div>
//       <div className="row4">4</div>
//       <div className="row5">5</div>
//       <div className="row6">6</div>
//     </section>
//   </main>
// </>
