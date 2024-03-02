import usePosts from "../hooks/usePosts";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

function Header() {
  const { dispatch } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        
        <button onClick={() => dispatch({ type: "post/clear" })}>
          Clear posts
        </button>
      </div>
    </header>
  );
}

export default Header;
