import axios from "axios";

const API_URL = "http://localhost:3001"; 

export interface  Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  content: string;
  date: string;
  coverImage: string;
}

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(`${API_URL}/blogs`);
  return res.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await axios.get(`${API_URL}/blogs/${id}`);
  return res.data;
};

export const createBlog = async (blog: Omit<Blog, "id" | "createdAt">) => {
  const res = await axios.post(`${API_URL}/blogs`, blog);
  return res.data;
};
