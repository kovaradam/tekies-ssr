"use server";
import { DB } from "./db";
import seed from "./seed";

export const addPost: typeof DB.addPost = (post) => {
  return DB.addPost(post);
};

export const getPost: typeof DB.getPost = (slug) => {
  return DB.getPost(slug);
};

export const getPosts = async () => {
  const posts = await DB.getPosts();
  if (!posts.length) {
    await seed();
  }
  return posts.toSorted((a, b) => b.date.getTime() - a.date.getTime());
};
