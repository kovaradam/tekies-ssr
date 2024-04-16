"use server"; // Add 'use server' at the top of an async function body to mark the function as callable by the client. We call these functions Server Actions.
import { redirect } from "next/navigation";
import { addPost } from "shared";

export async function createPost(prev: any, formData: FormData) {
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
  return redirect("/");
}
