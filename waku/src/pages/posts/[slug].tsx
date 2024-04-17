import { PostPage } from "shared";
import { DB } from "../../server/db.js";
import NotFound from "../[...catchAll].js";

export default async function Post({ slug }: Readonly<{ slug: string }>) {
  const post = await DB.getPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return <PostPage post={post} />;
}
