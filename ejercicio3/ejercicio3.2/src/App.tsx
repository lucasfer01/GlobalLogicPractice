import "./App.css";
import { TodoItem } from "./components/Todo/Todo";
import todoData from "./data";

function App() {
  return (
    <div className={`App block--center`}>
      <div className={`block--center div--orange block--padding-m block--rounded --blackBorder`}>
        {todoData.map(({ id, completed, description }) => (
          <TodoItem id={id} key={id} completed={completed}>
            {description}
          </TodoItem>
        ))}
      </div>
    </div>
  );
}

export default App;
