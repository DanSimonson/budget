import React from "react";

function Intro() {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();
  return (
    <>
      <div className="">
        <Input placeholder="Enter Name" />
      </div>
      <div className="">
        <Input placeholder="Enter Amount" />
      </div>
      <div className="">
        <Button>Create Category</Button>
      </div>
    </>
  );
}

export default Intro;
