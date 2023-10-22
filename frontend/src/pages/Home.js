import React, { useState } from "react";
import { useGetTransactionsQuery } from "../features/api/apiSlice";
import EditBudget from "../components/edit/Editbudget";
import ViewBudget from "../components/view/ViewBudget";

function Home() {
  const { data, isLoading, error } = useGetTransactionsQuery();
  const [isEditing, setIsEditing] = useState(false);
  console.log("isEditing: ", isEditing);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //   const handleSaveClick = () => {
  //     //console.log('isEditing')
  //     //setIsEditing(false);
  //   };

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
      <main id="main">
        <title>My Budget Planner</title>
        <section id="content">
          <div className="row1">
            <div>
              {isEditing ? (
                <EditBudget setIsEditing={setIsEditing} />
              ) : (
                <ViewBudget handleEditClick={handleEditClick} />
              )}
            </div>
          </div>
          <div className="row2">2</div>
          <div className="row3">3</div>
          <div className="row4">4</div>
          <div className="row5">5</div>
          <div className="row6">6</div>
        </section>
      </main>
    </>
  );
}

export default Home;

/* <main>
      <h1>Transaction List</h1>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        data.map((d) => <p key={d._id}>{d.name}</p>)
      )}
    </main> */
