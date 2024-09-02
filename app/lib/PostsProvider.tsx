"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

// Vad ska skickas över kontexten?
interface ContextValue {
  likedPosts: string[];
  toggleLikedPost: (postId: string) => void;
  getIsLikedPost: (postId: string) => boolean;
}

// Skapa kontexten utifrån vårat interface
const PostContext = createContext<ContextValue>({} as ContextValue);

// Skapa en provider som innehåller tillstånd och logik.
// Fungerar som en "wrapper" komponent runt allt annat.
export default function PostProvider(props: PropsWithChildren) {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ladda in tillståndet från local storage.
  useEffect(() => {
    if (isLoaded) return;
    const stringifiedState = localStorage.getItem("likedPosts");
    setLikedPosts(JSON.parse(stringifiedState ?? "[]"));
    setIsLoaded(true);
  }, [isLoaded]);

  // Spara tillståndet till LS när det ändras.
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [isLoaded, likedPosts]);

  const toggleLikedPost = (postId: string) => {
    const isToggled = likedPosts.some((id) => id === postId);
    if (isToggled) {
      // ta bort från listan
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      // lägga till i listan
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const getIsLikedPost = (postId: string) => {
    return likedPosts.some((id) => id === postId);
  };

  return (
    <PostContext.Provider
      value={{ likedPosts, toggleLikedPost, getIsLikedPost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

// Skapa en liten wrapper hook for att konsumera kontexten.
export const useLikedPosts = () => useContext(PostContext);
