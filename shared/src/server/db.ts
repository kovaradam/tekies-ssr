import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export type Post = {
  title: string;
  description: string;
  content: string;

  slug: string;
  date: Date;
};

export class DB {
  private static readonly FILE = `${fileURLToPath(import.meta.url)}.json`;

  static readonly getPosts = async (): Promise<Post[]> => {
    await delay();

    try {
      const fileString = (await readFile(DB.FILE)).toString();
      return JSON.parse(fileString, (key, value) => {
        if (key === "date") return new Date(value);
        return value;
      });
    } catch (e) {
      await writeFile(DB.FILE, JSON.stringify([]));
      return [];
    }
  };

  static readonly getPost = async (slug: string) => {
    return (await DB.getPosts()).find((post) => post.slug === slug);
  };

  static readonly addPost = async (post: Omit<Post, "date" | "slug">) => {
    const newPost = {
      ...post,
      date: new Date(),
      slug: slugify(post.title),
    };
    const posts = await this.getPosts();

    await writeFile(DB.FILE, JSON.stringify(posts.concat(newPost)));

    return newPost;
  };

  static readonly deletePost = async (slug: string) => {
    const posts = await this.getPosts();

    await writeFile(
      DB.FILE,
      JSON.stringify(posts.filter((post) => post.slug !== slug))
    );
  };
}

const delay = () =>
  new Promise((r) => setTimeout(r, Math.max(500, Math.random() * 1500)));

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
