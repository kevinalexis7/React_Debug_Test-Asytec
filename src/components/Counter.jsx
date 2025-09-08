import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  function handleCount(op) {
    let newNum = 0;
    if(!op) return setCount(newNum)
    if (op === "+") newNum = count + step;
    if (op === "-") newNum = count - step;
    setCount(newNum);
    setHistory((prev) => [newNum, ...prev]);
  }

  const clearHistory = () => {
    setHistory([]);
  };

  function incrementAsync () {
    setTimeout(() => {
      const newNum = count+1
      setCount(newNum);
      setHistory((prev) => [newNum, ...prev]);
    }, 1000);
  };

  return (
    <div className="card">
      <h2>Counter Component</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Step:
          <input
            type="number"
            min={1}
            value={step}
            onChange={(e) =>
              setStep(Number(e.target.value) < 1 ? 1 : Number(e.target.value))
            }
            style={{ marginLeft: "10px", width: "60px" }}
          />
        </label>
      </div>

      <div style={{ fontSize: "2em", marginBottom: "20px" }}>
        Count: {count}
      </div>

      <div>
        <button className="button" onClick={() => handleCount("+")}>
          + {step}
        </button>
        <button className="button" onClick={() => handleCount("-")}>
          - {step}
        </button>
        <button className="button" onClick={() => handleCount()}>
          Reset
        </button>
        <button className="button" onClick={incrementAsync}>
          +1 (Async)
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>History ({history.length} items)</h3>
        <button className="button" onClick={clearHistory}>
          Clear History
        </button>
        <div
          style={{
            maxHeight: "100px",
            overflow: "auto",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          {history.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
