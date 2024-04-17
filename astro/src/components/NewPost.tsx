import React from "react";
import { Markdown } from "shared/src/components/md";
import { Title } from "shared/src/components/title";

export function NewPost(
  props: Readonly<{
    errors: Record<string, string>;
    defaultValues: Record<string, string>;
  }>
) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <form action={""} method="post" className="w-full">
      <div className="flex justify-between">
        <Title documentTitle="New post">New post</Title>
        <button type="submit" className="mb-4 primary">
          Create!
        </button>
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
                  defaultValue={props.defaultValues[field.name]}
                  id={field.name}
                  name={field.name}
                  onChange={field.onChange}
                  className="h-[60ex]"
                />
              ) : (
                <input
                  defaultValue={props.defaultValues[field.name]}
                  id={field.name}
                  name={field.name}
                  onChange={field.onChange}
                />
              )}
              <i className="text-red-500">{props.errors?.[field.name]}</i>
            </fieldset>
          ))}
        </section>

        <section className="flex-1">
          <Title documentTitle={title || "New post"}>{title}</Title>
          <hr className="mb-4"></hr>
          <Markdown content={content} />
        </section>
      </div>
    </form>
  );
}
