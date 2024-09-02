import LikedCountLink from "./LikedCountLink";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-blue-300">
      <h1 className="text-2xl">All likes</h1>
      <LikedCountLink />
    </header>
  );
}
