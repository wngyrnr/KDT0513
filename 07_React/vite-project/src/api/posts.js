import { API_ENDPOINTS } from "../constants/api";
import client from "./client";

export const getPosts = () => client.get(API_ENDPOINTS.POSTS);
export const deletePost = (id) => client.delete(API_ENDPOINTS.POST(id));