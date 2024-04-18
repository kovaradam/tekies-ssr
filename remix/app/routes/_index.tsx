import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, json, useLoaderData } from "@remix-run/react";
import { Title } from "shared/src/components/title";
import { Post } from "shared/src/server/db";
import { deletePost, getPosts } from "shared/src/server/service";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({ posts: (await getPosts()) as Post[], headline: "Read this " });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  await deletePost(formData.get("slug") as string);

  return null;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Title>{data.headline}</Title>
      <ul>
        {data.posts.map((post) => (
          <li className="post-link" key={post.slug}>
            <Link to={"/posts/".concat(post.slug)}>
              <h3>{post.title}</h3>
              <time>{new Date(post.date).toDateString()}</time>
              <p>{post.description}</p>
            </Link>
            <Form method="post">
              <button>Delete</button>
              <input type="hidden" name="slug" value={post.slug} />
            </Form>
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
