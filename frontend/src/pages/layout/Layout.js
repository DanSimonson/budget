import React, { useState } from "react";
import EditBudget from "../../components/edit/Editbudget";
import ViewBudget from "../../components/view/ViewBudget";
import "./Layout.css";

function Layout() {
  //const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    setIsEditing(false);
  };

  return (
    <>
      <main id="main">
        <title>My Budget Planner</title>
        <section id="content">
          <div className="row1">
            <div>
              {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} />
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

export default Layout;

/* <div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div> */
