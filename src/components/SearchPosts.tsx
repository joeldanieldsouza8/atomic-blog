import usePosts from "../hooks/usePosts";

function SearchPosts() {
  const { postsState, dispatch } = usePosts();
  const { searchPostQuery } = postsState;

  function handleSearchQuery(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "post/search", searchPayload: event.target.value });
  }

  return (
    <input
      value={searchPostQuery}
      onChange={handleSearchQuery}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
