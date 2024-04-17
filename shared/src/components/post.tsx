import { Post } from "@/server/db";
import { Title } from "./title";
import { Markdown } from "./md";

export function PostPage({ post }: Readonly<{ post: Post }>) {
  return (
    <div>
      <Title documentTitle={post.title}>{post.title}</Title>
      <time>{post.date.toDateString()}</time>
      <hr className="mb-4" />
      <Markdown content={post.content} />
    </div>
  );
}
