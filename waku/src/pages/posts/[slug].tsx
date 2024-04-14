import { Title } from "../../components/Ttitle.js";
import { DB } from "../../server/db.js";
import NotFound from "../[...catchAll].js";

import markdownit from "markdown-it";

const md = markdownit();

export default async function Post({ slug }: Readonly<{ slug: string }>) {
  const post = await DB.getPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div>
      <Title>{post.title}</Title>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>
    </div>
  );
}
