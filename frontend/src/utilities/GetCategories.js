import { useGetCategoriesQuery } from "../features/api/apiSlice";
const GetCategories = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  let myObj = {
    data: data,
    isLoading: isLoading,
    error: error,
  };
  return myObj;
};

export default GetCategories;
