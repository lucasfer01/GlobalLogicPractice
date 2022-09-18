import "./App.css";
import "./styles/custom-style.css";
import { Card } from "./components/Card/Card";
import { useData, useButton } from "./hooks";

function App() {
  const {isClicked, blockClick} = useButton();

  const { response, makeAnError } = useData();

  const { data, error, status } = response;

  function handleClick() {
    blockClick();
    
    makeAnError();
  }

  if (status === "loading") {
    return (
      <div className="App div__Loading">
        <h1 className="App__loading App__h1"> Loading... </h1>

        <img src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird.webp" alt="loader" className="App__loader"/>

        {
          isClicked ? 
            <span>Preparando el error...</span>
            :
            <button className="App__button" disabled={isClicked} onClick={handleClick}> Simular un error </button>
        }
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="App">
        <div className="App__h1--error">
          <img className="App__img" src="https://cdn-icons-png.flaticon.com/512/63/63436.png?w=740&t=st=1663528804~exp=1663529404~hmac=0a04ce2bca8fd505253a86a38670808c19e008610695285d5276392c651f75b2" alt='Error'/>

          <h1 className="">{error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {!!data.length &&
        data.map(({ title, description, id, image }) => (
          <Card
            key={id}
            title={title}
            description={description}
            image={image}
          />
        ))}
    </div>
  );
}

export default App;
