"use client";

import Link from "next/link";
import { useLikedPosts } from "./PostsProvider";

export default function LikedCountLink() {
  const { likedPosts } = useLikedPosts();

  return <Link href="/">{likedPosts.length}❤️</Link>;
}
