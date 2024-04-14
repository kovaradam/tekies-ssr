type Post = {
  title: string;
  description: string;
  content: string;

  slug: string;
  date: Date;
};

export class DB {
  static readonly #posts: Post[] = [];

  static readonly getPosts = async () => {
    await delay();
    return this.#posts;
  };

  static readonly getPost = async (slug: string) => {
    await delay();
    return this.#posts.find((post) => post.slug === slug);
  };

  static readonly addPost = async (post: Omit<Post, "date" | "slug">) => {
    await delay();
    this.#posts.push({
      ...post,
      date: new Date(),
      slug: slugify(post.title),
    });
  };
}

const delay = () =>
  new Promise((r) => setTimeout(r, Math.max(500, Math.random() * 1500)));

DB.addPost({
  content: "This is a first post",
  description: "This is a first post",
  title: "First post",
});

DB.addPost({
  content: "This is a second post",
  description: "This is a second post",
  title: "Second post",
});

function slugify(text: string) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
