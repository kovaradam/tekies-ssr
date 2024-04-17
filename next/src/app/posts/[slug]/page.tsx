import { notFound } from "next/navigation";
import { MD, Title, getPost } from "shared";

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Title documentTitle={post.title}>{post.title}</Title>
      <time>{post.date.toDateString()}</time>
      <hr className="mb-4"></hr>
      <MD>{post.content}</MD>
    </div>
  );
}
