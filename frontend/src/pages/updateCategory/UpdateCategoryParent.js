import React from "react";
import { useGetCategoryQuery } from "../../features/api/apiSlice";
import UpdateChildForm from "./UpdateChildForm";
import { useParams } from "react-router-dom";

function UpdateParent() {
  const { budgetid } = useParams();

  const { data: category, isLoading } = useGetCategoryQuery(budgetid);

  return (
    <div>
      <UpdateChildForm category={category} isLoading={isLoading} />
    </div>
  );
}

export default UpdateParent;
