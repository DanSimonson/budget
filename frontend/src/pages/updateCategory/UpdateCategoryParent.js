import React, { useRef, useState, useEffect } from "react";
import { useGetCategoryQuery } from "../../features/api/apiSlice";
import UpdateChildForm from "./UpdateChildForm";
import { useParams } from "react-router-dom";
import UpdateCategorycss from "./UpdateCategory.module.css";
function UpdateParent() {
  const { budgetid } = useParams();

  const {
    data: category,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetCategoryQuery(budgetid);

  return (
    <div>
      <UpdateChildForm category={category} isLoading={isLoading} />
    </div>
  );
}

export default UpdateParent;
