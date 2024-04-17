import { notFound } from "next/navigation";
import { PostPage, getPost } from "shared";

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
