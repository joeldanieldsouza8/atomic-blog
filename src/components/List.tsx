import usePosts from "../hooks/usePosts";
import Test from "./Test";

function List() {
  const { postsState } = usePosts();
  const { posts, searchPostQuery } = postsState;

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchPostQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchPostQuery.toLowerCase())
        )
      : posts;

  return (
    <>
      <ul>
        {searchedPosts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <Test />
    </>
  );
}

export default List;
