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


