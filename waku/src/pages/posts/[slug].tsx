import { Title } from "../../components/Ttitle.js";
import { MD } from "../../components/md.js";
import { DB } from "../../server/db.js";
import NotFound from "../[...catchAll].js";

export default async function Post({ slug }: Readonly<{ slug: string }>) {
  const post = await DB.getPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div>
      <Title>{post.title}</Title>
      <time>{post.date.toDateString()}</time>
      <hr className="mb-4"></hr>
      <MD>{post.content}</MD>
    </div>
  );
}
