import { Link } from "waku";

export const Header = () => {
  return (
    <header className="flex items-center fixed top-0 gap-4 p-6 w-full border-b-2">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Home</Link>
      </h2>
      <Link to="/new">New post</Link>
    </header>
  );
};
