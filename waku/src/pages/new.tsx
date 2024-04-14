"use client";
import markdownit from "markdown-it";
import { Title } from "../components/Ttitle.js";
import React from "react";

const md = markdownit();

export default function NewPost() {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const contentId = React.useId();
  const titleId = React.useId();

  return (
    <div className="w-full">
      <Title>New post</Title>
      <hr className="mb-4"></hr>
      <div className="flex gap-5">
        <form className="flex flex-col gap-2 flex-1">
          <fieldset className="flex flex-col gap-1">
            <label htmlFor={titleId}>Title</label>
            <input
              id={titleId}
              name="title"
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1">
            <label htmlFor={contentId}>Content</label>
            <textarea
              id={contentId}
              name="content"
              onChange={(event) => setContent(event.currentTarget.value)}
            />
          </fieldset>
        </form>
        <section className="flex-1">
          <Title>{title}</Title>
          <hr className="mb-4"></hr>
          <div
            dangerouslySetInnerHTML={{ __html: md.render(content) }}
            className="md"
          />
        </section>
      </div>
    </div>
  );
}
