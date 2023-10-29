import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Createbudgetcss from "./Createbudget.module.css";

function Createbudget() {
  return (
    <>
      <div>Createbudget</div>
      <div>
        <FontAwesomeIcon icon={faEdit} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faPlus} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faMinus} className={Createbudgetcss.edit} />
        <FontAwesomeIcon icon={faTrash} className={Createbudgetcss.edit} />
      </div>
    </>
  );
}

export default Createbudget;
