import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/category/get-categories`
      );
      setCategories(data?.categories);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};

export default useCategory;
