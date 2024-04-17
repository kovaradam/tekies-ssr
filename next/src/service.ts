"use server"; // Add 'use server' at the top of an async function body to mark the function as callable by the client. We call these functions Server Actions.
import { redirect } from "next/navigation";
import { deletePost, handlePostForm } from "shared";

export async function createPostAction(_: any, formData: FormData) {
  const errors = await handlePostForm(formData);
  if (errors) {
    return errors;
  }
  return redirect("/");
}

export async function deletePostAction(formData: FormData) {
  const slug = formData.get("slug") as string;
  await deletePost(slug);
  return redirect("/");
}
