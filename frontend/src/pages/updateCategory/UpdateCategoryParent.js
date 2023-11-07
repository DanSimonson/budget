import React, { useRef, useState, useEffect } from "react";
import { useGetCategoryQuery } from "../../features/api/apiSlice";
import UpdateChildForm from "./UpdateChildForm";
import { useParams } from "react-router-dom";
import UpdateCategorycss from "./UpdateCategory.module.css";
function UpdateParent() {
  const { budgetid } = useParams();
  //console.log("budgetid: ", budgetid);
  const {
    data: category,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetCategoryQuery(budgetid);
  //console.log("category: ", category);
  //let myData = data.filter((el) => el.category === title);
  return (
    <div>
      <UpdateChildForm category={category} isLoading={isLoading} />
    </div>
  );
}

export default UpdateParent;
