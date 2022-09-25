import styled from "styled-components";
import useFetch from "./useFetch";

const Container = styled.div`
  display: flex;
  gap: 10px;
  max-width: 600px;
  justify-content: space-between;
  margin: 0 auto;
`;

export default function CustomHook() {
  const users = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    (users) => {
      return users.map((user) => ({ id: user.id, name: user.name }));
    }
  );
  const posts = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    (posts) => {
      return posts.map((post) => ({ id: post.id, title: post.title })).slice(0,10);
    }
  );
  const comments = useFetch(
    "https://jsonplaceholder.typicode.com/comments",
    (comments) => {
      return comments.map((comment) => ({
        id: comment.id,
        name: comment.name,
      })).slice(0,10);
    }
  );
  return (
    <Container>
      <div>
        <h1>users</h1>
        <hr />
        {users.loading && <h2>loading...</h2>}
        {users.err && <p>{users.err} </p>}
        <ul>
          {users.data?.map((user) => (
            <li key={user.id}>{user.name} </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>posts</h1>
        <hr />
        {posts.loading && <h2>loading...</h2>}
        {posts.err && <p>{posts.err} </p>}
        <ul>
          {posts.data?.map((post) => (
            <li key={post.id}>{post.title} </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>comment</h1>
        <hr />
        {comments.loading && <h2>loading...</h2>}
        {comments.err && <p>{comments.err} </p>}
        <ul>
          {comments.data?.map((comment) => (
            <li key={comment.id}>{comment.name} </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
