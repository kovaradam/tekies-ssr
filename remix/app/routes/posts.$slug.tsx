import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "shared/src/server/service";
import { PostPage } from "shared/src/components/post";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const post = await getPost(params.slug ?? "");

  if (!post) {
    throw "not found";
  }

  return json(post);
};

export default function Post() {
  const post = useLoaderData<typeof loader>();

  return <PostPage post={{ ...post, date: new Date(post.date) }} />;
}

export function ErrorBoundary() {
  return (
    <div className="not-found ">
      <div className="max-w-[60ch]">
        <img alt="" src="/clumsy.svg"></img>
      </div>
    </div>
  );
}
