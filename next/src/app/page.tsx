import Link from "next/link";
import React from "react";
import { DB, Title } from "shared";

export default async function Home() {
  const data = await getData();
  return (
    <div className="">
      <Title className="">{data.headline}</Title>
      <ul>
        {data.posts.map((post) => (
          <React.Fragment key={post.slug}>
            <li className="flex flex-col">
              <Link href={"/posts/".concat(post.slug)}>
                <h3 className="text-2xl font-bold">{post.title}</h3>
                <time>{post.date.toDateString()}</time>
                <p>{post.description}</p>
              </Link>
            </li>
            <hr className="my-2 last-of-type:hidden" />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Next",
    headline: "Next blog",
    posts: await DB.getPosts(),
  };

  return data;
};
