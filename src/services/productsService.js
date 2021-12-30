import axios from "axios";
import { useQuery } from "react-query";

/**
 * GET
 */
const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
const getUsers = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/users");
  return data;
};
const getCategories = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products/categories");
  return data;
};

/**
 * HOOKS
 */
export const useGetProducts = () => {
  return useQuery(["products"], getProducts);
};
export const useGetUsers = () => {
  return useQuery(["users"], getUsers);
};
export const useGetCategories = () => {
  return useQuery(["categories"], getCategories);
};
