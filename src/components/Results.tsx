import usePosts from "../hooks/usePosts";

function Results() {
  const { postsState} = usePosts();
  const { posts } = postsState;

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
