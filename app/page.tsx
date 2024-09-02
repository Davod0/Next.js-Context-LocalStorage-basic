import Image from "next/image";
import { mockedPosts } from "./data";
import LikeButton from "./lib/LikeButton";

export default function Home() {
  return (
    <main className="w-full flex flex-wrap justify-center">
      {mockedPosts.map((post) => (
        <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="relative w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              className="w-full"
              width={400}
              height={400}
            />
            <LikeButton post={post} />
          </div>
          <h2 className="text-3xl mt-4">{post.title}</h2>
        </div>
      ))}
    </main>
  );
}
