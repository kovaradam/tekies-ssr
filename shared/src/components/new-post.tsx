import React from "react";
import { Title } from "./title";
import { Submit } from "./submit";
import { Markdown } from "./md";

const initErrors = {
  content: "",
  title: "",
  description: "",
};

export function NewPost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  return (
    <>
      <div className="flex justify-between">
        <Title documentTitle="New post">New post</Title>
        <Submit className="mb-4" />
      </div>

      <hr className="mb-4"></hr>
      <div className="flex gap-5">
        <section className="flex flex-col gap-2 flex-1">
          {(
            [
              {
                name: "title",
                label: "Title",
                onChange: (event: any) => setTitle(event.currentTarget.value),
              },
              {
                name: "description",
                label: "Description",
                onChange: undefined,
              },
              {
                name: "content",
                label: "Content",
                onChange: (event: any) => setContent(event.currentTarget.value),
              },
            ] as const
          ).map((field) => (
            <fieldset key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.name === "content" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  onChange={field.onChange}
                  className="h-[60ex]"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  onChange={field.onChange}
                />
              )}
              <i className="text-red-500">{errors[field.name]}</i>
            </fieldset>
          ))}
        </section>

        <section className="flex-1">
          <Title documentTitle={title || "New post"}>{title}</Title>
          <hr className="mb-4"></hr>
          <Markdown content={content} />
        </section>
      </div>
    </>
  );
}
