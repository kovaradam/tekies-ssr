import markdownit from "markdown-it";

const md = markdownit();

export function Markdown(props: Readonly<{ content: string }>) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: md.render(props.content) }}
      className="md"
    />
  );
}
