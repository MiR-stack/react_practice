import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: white;
  border: 1px solid black;
  outline: none;
  cursor: pointer;
`;

export default function CountApp() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(5);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    let interval;
    if (count === 5) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      setCount(0);
    }
    return () => clearInterval(interval);
  }, [count, time]);

  return (
    <Container>
      <h2>{count} </h2>

      <Button onClick={handleCount} disabled={count === 5}>
        {`Add${count === 5 ? `(locked for ${time}s)` : ""}`}
      </Button>
    </Container>
  );
}
