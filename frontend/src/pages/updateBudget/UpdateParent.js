import React, { useRef, useState, useEffect } from "react";
import { useGetTransactionQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import UpdateChildForm from "./UpdateChildForm";
function UpdateParent() {
  const { budgetid } = useParams();
  const {
    data: transaction,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetTransactionQuery(budgetid);
  return (
    <div>
      <UpdateChildForm transaction={transaction} isLoading={isLoading} />
    </div>
  );
}

export default UpdateParent;
