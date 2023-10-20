import React from "react";
import { useGetTransactionsQuery } from "../features/api/apiSlice";

function Home() {
  const {
    data: transactions,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTransactionsQuery();
  <div>hello world</div>;
  const transactionDisplay = () => {
    let content;
    if (isLoading) {
      content = <p>Loading...</p>;
    } else if (isSuccess) {
      content = <p>transactions</p>;
    } else if (isError) {
      content = <p>{error}</p>;
    }
  };

  return (
    <main>
      <h1>Transaction List</h1>
      {transactionDisplay}
    </main>
  );
}

export default Home;
