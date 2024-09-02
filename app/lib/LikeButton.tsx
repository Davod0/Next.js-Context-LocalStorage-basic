"use client";

import { Post } from "../data";
import { useLikedPosts } from "./PostsProvider";

interface Props {
  post: Post;
}

export default function LikeButton(props: Props) {
  const { toggleLikedPost, getIsLikedPost } = useLikedPosts();

  return (
    <span
      className="absolute right-4 bottom-4 text-4xl drop-shadow-md shadow-black cursor-pointer"
      onClick={() => toggleLikedPost(props.post.id)}
    >
      {getIsLikedPost(props.post.id) ? "❤️" : "🤍"}
    </span>
  );
}
