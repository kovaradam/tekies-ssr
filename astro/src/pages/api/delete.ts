import type { APIRoute } from "astro";
import { deletePost } from "shared/src/server/service";

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();

  await deletePost(data.get("slug") as string);

  // Do something with the data, then return a success response
  return redirect("/");
};
