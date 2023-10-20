import React from "react";
import { useGetTransactionsQuery } from "../features/api/apiSlice";

function Home() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetTransactionsQuery();

  return (
    <main>
      <h1>Transaction List</h1>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        data.map((d) => <p key={d._id}>{d.name}</p>)
      )}
    </main>
  );
}

export default Home;
