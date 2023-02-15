import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "hyemin";
  const list = ["우유", "딸기", "초코"];
  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Hello</h2>
      <h3>{name}</h3>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
