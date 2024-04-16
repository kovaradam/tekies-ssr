import markdownit from "markdown-it";

const md = markdownit();

export function MD(props: Readonly<{ children: string }>) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: md.render(props.children) }}
      className="md"
    />
  );
}
