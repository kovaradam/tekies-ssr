"use client";
import React from "react";
import { useFormState } from "react-dom";
import { Markdown, Submit, Title, addPost } from "shared";

async function createPost(prev: any, formData: FormData) {
  "use server"; // Add 'use server' at the top of an async function body to mark the function as callable by the client. We call these functions Server Actions.

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
      errors.map((name) => [
        name,
        <i className="text-red-600">Value is required</i>,
      ])
    );
  }

  return await addPost(values);
}

export default function NewPost() {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const contentId = React.useId();
  const titleId = React.useId();
  const formId = React.useId();

  const [errors, action] = useFormState(createPost, null);

  return (
    <form id={formId} action={action} className="w-full">
      <div className="flex justify-between">
        <Title documentTitle={"New post"}>New post</Title>
        <Submit />
      </div>

      <hr className="mb-4"></hr>
      <div className="flex gap-5">
        <section className="flex flex-col gap-2 flex-1">
          <fieldset className="flex flex-col gap-1">
            <label htmlFor={titleId}>Title</label>
            <input
              id={titleId}
              name="title"
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
            {errors?.title}
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor={"description"}>Description</label>
            <input id="description" name="description" />
            {errors?.description}
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor={contentId}>Content</label>
            <textarea
              id={contentId}
              name="content"
              onChange={(event) => setContent(event.currentTarget.value)}
              className="h-[60ex]"
            />
            {errors?.content}
          </fieldset>
        </section>

        <section className="flex-1">
          <Title documentTitle={title}>{title}</Title>
          <hr className="mb-4"></hr>
          <Markdown content={content} />
        </section>
      </div>
    </form>
  );
}
