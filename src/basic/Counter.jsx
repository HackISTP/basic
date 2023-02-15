import { useState } from "react";

const Counter = ({ onClick, totalCount }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p className="number">
        {count}/<span className="total ">{totalCount}</span>
      </p>

      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
          onClick();
        }}
      >
        Add+
      </button>
    </div>
  );
};
export default Counter;
