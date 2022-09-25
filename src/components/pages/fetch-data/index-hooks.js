import { useEffect, useState } from "react";

let cach = {};

function Data() {
  const [comment, setComment] = useState({});
  const [id, setId] = useState(1);

  let max = 10;

  const handleNext = () => {
    if (id < max) {
      setId(id + 1);
    }
  };
  const handlePrev = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  useEffect(() => {
    if (cach[`user-${id}`]) {
      setComment(cach[`user-${id}`]);
    } else {
      (async () => {
        const data = await (
          await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        ).json();
        setComment(data);
        cach[`user-${id}`] = data;
      })();
    }
  }, [id]);

  useEffect(() => {
    if (!cach[`user-${id + 1}`]) {
      fetch(`https://jsonplaceholder.typicode.com/comments/${id + 1}`)
        .then((res) => res.json())
        .then((res) => (cach[`user-${id + 1}`] = res));
    }
  }, [id]);

  return { comment, id, max, handleNext, handlePrev };
}

export default Data;
