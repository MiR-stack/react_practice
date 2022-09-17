import { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const defaultNumbers = {
    a: 0,
    b: 0,
  };

  const [numbers, setNumbers] = useState(defaultNumbers);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  function handleChange(e) {
    setNumbers({ ...numbers, [e.target.name]: e.target.value });
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleOperation(operator) {
    if ((numbers.a || numbers.b) < 1) return;

    const f = new Function(`return ${numbers.a} ${operator} ${numbers.b}`);

    setResult(f(operator));

    setHistory([
      {
        id: 41,
        ...numbers,
        result: f(operator),
        operator,
        timestamp: `${new Date().getDate()} ${
          months[new Date().getMonth()]
        } ${new Date().getFullYear()}`,
      },
      ...history,
    ]);
  }

  function Restore(history) {
    setNumbers({ a: history.a, b: history.b });
    setResult(history.result);
  }

  const operations = ["+", "-", "*", "/", "%"];

  function Button({ click, children }) {
    return <button onClick={click}>{children} </button>;
  }

  return (
    <div className="calculator">
      <h1> calculator</h1>
      <div className="container">
        <h1>Result: {result}</h1>
        <div className="inputs">
          <input
            type="number"
            name="a"
            value={numbers.a}
            onChange={handleChange}
          />
          <input
            type="number"
            name="b"
            value={numbers.b}
            onChange={handleChange}
          />
        </div>
        <div className="operations">
          <h2>operations :</h2>
          {operations.map((operation) => (
            <Button key={operation} click={() => handleOperation(operation)}>
              {operation}
            </Button>
          ))}
         <Button click={() => {
              setResult(0);
              setNumbers(defaultNumbers);
            }}
          >clear</Button>
        </div>
        <div className="history">
          <h2>history :</h2>
          <ul>
            {history.length < 1 ? <p>no history available</p> : null}
            {history.map((item) => (
              <li
                key={item.id}
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "10px 0",
                }}
              >
                <p>date : {item.timestamp}</p>
                <p>operations:{`${item.a} ${item.operator} ${item.b}`}</p>
                <p> result :{item.result}</p>
                <button onClick={() => Restore(item)}> restore</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
