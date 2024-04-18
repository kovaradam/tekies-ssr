import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import React from "react";
import { handlePostForm } from "shared/src/server/service";
import { Markdown } from "shared/src/components/md";
import { Title } from "shared/src/components/title";

export const action = async ({ request }: ActionFunctionArgs) => {
  const errors = await handlePostForm(await request.formData());
  if (errors) {
    return json(errors);
  }

  return redirect("/");
};

export default function NewPost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const { state } = useNavigation();

  const errors = useActionData<typeof action>();

  const isPending = state === "submitting" || state === "loading";

  return (
    <Form method="post" className="w-full">
      <div className="flex justify-between">
        <Title>New post</Title>
        <button type="submit" className="mb-4 primary" disabled={isPending}>
          {isPending ? "Creating..." : "Create!"}
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
              <i className="text-red-500">{errors?.[field.name]}</i>
            </fieldset>
          ))}
        </section>

        <section className="flex-1">
          <Title>{title}</Title>
          <hr className="mb-4"></hr>
          <Markdown content={content} />
        </section>
      </div>
    </Form>
  );
}
