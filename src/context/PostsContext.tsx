import React, { createContext, useReducer } from "react";
import {
  PostsAction,
  PostsState,
  postsReducer,
} from "../reducers/postsReducer";
// import { Post } from "../types/postsType";
import { createRandomPost } from "../utils/createRandomPost";

interface PostsContextType {
  postsState: PostsState;
  dispatch: React.Dispatch<PostsAction>;
}

// const initialState: PostsState = {
//   posts: [],
// };

// // Create a context
// const PostsContext = createContext<{
//   postsState: PostsState;
//   dispatch: React.Dispatch<PostsAction>;
// }>({
//   postsState: initialState,
//   dispatch: () => null,
// });

const initialState: PostsState = {
  posts: Array.from({ length: 30 }, createRandomPost),
  searchPostQuery: "",
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

// Create a provider
function PostsProvider({ children }: { children: React.ReactNode }) {
  const [postsState, dispatch] = useReducer<
    (state: PostsState, action: PostsAction) => PostsState
  >(postsReducer, initialState);

  const contextValue = {
    postsState,
    dispatch,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
}

export { PostsContext, PostsProvider };
