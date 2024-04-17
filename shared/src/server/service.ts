"use server";
import { DB } from "./db";
import seed from "./seed";

export const addPost: typeof DB.addPost = (post) => {
  return DB.addPost(post);
};

export const getPost: typeof DB.getPost = (slug) => {
  return DB.getPost(slug);
};

export const deletePost: typeof DB.deletePost = (slug) => {
  return DB.deletePost(slug);
};

export const getPosts = async () => {
  const posts = await DB.getPosts();
  if (!posts.length) {
    await seed();
  }
  return posts.toSorted((a, b) => b.date.getTime() - a.date.getTime());
};

export const handlePostForm = async (formData: FormData) => {
  const values = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    description: formData.get("description") as string,
  };

  const errors = Object.entries(values)
    .map(([name, value]) => {
      return [name, Boolean(value) && typeof value === "string"];
    })
    .filter(([, isOk]) => !isOk)
    .map(([name]) => name);

  if (errors.length) {
    return Object.fromEntries(
      errors.map((name) => [name, "Value is required"])
    );
  }

  await addPost(values);
  return null;
};
