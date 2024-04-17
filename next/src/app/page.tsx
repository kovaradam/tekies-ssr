import Link from "next/link";
import React from "react";
import { Title, getPosts } from "shared";

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Title documentTitle={data.headline}>{data.headline}</Title>
      <ul>
        {data.posts.map((post) => (
          <li className="post-link" key={post.slug}>
            <Link href={"/posts/".concat(post.slug)}>
              <h3>{post.title}</h3>
              <time>{post.date.toDateString()}</time>
              <p>{post.description}</p>
            </Link>
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const getData = async () => {
  const data = {
    headline: "Read this",
    posts: await getPosts(),
  };

  return data;
};
