import { Post } from "../types/postsType";

export interface PostsState {
  posts: Post[];
  searchPostQuery: string;
}

export type PostsAction =
  | { type: "post/add"; addPostPayload: Post }
  | { type: "post/clear" }
  | { type: "post/remove"; removePostPayload: Post }
  | { type: "post/search"; searchPayload: string };

function postsReducer(state: PostsState, action: PostsAction): PostsState {
  switch (action.type) {
    case "post/add": {
      return {
        ...state,
        posts: [...state.posts, action.addPostPayload],
      };
    }

    case "post/clear": {
      return {
        ...state,
        posts: [],
      };
    }

    case "post/remove": {
      return {
        ...state,
        posts: state.posts.filter((post) => post !== action.removePostPayload),
      };
    }

    case "post/search": {
      return {
        ...state,
        searchPostQuery: action.searchPayload,
      };
    }

    default:
      return state;
  }
}

export { postsReducer };
