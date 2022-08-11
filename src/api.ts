import axios from 'axios';
import { Post } from './store/types';

export const mainAxios = axios.create({
  baseURL: "http://localhost:3004"
});

export default {
    posts: {
        getPosts: () => mainAxios.get('/posts'),
        getPostsById: (id: number) => mainAxios.get(`/posts/${id}`),
        createPost: (newpost: {title: string, description: string}) => mainAxios.post('/posts', newpost),
        deletePostById: (id: number) => mainAxios.delete(`/posts/${id}`),
    }
};
