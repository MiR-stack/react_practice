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
      return posts
        .map((post) => ({ id: post.id, name: post.title }))
        .slice(0, 10);
    }
  );
  const comments = useFetch(
    "https://jsonplaceholder.typicode.com/comments",
    (comments) => {
      return comments
        .map((comment) => ({
          id: comment.id,
          name: comment.name,
        }))
        .slice(0, 10);
    }
  );

  const ShowData = ({dataType, data }) => {
    return (
      <div>
        <h1>{dataType}</h1>
        <hr />
        {data.loading && <h2>loading...</h2>}
        {data.err && <p>{data.err} </p>}
        <ul>
          {data.data?.map((user) => (
            <li key={user.id}>{user.name} </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Container>
      <ShowData dataType='users' data={users} />
      <ShowData dataType='posts' data={posts} />
      <ShowData dataType='comments' data={comments} />      
    </Container>
  );
}
