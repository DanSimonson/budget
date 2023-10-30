import React from "react";
import { useGetTransactionsQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
function Update() {
  const { budgetid } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetTransactionsQuery();
  console.log("budgetid: ", budgetid);
  console.log("data: ", data);

  return <div>Update</div>;
}

export default Update;
