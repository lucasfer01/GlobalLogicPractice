import "./App.css";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Pagination } from "./components/Pagination/Pagination";
import { useApiData } from "./hooks/useApiData";
import { getQueries } from './utils/utils';


function App() {
  const queryPage: string = getQueries().page;
  
  const page: number = (queryPage && parseInt(queryPage)) || 1;
  
  const { data, pages } = useApiData(page);
  
  

  return (
    <div className="App">
      <Navbar />

      <div className="App__cards">
        {!!data.length &&
          data.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              origin={character.origin.name}
              image={character.image}
            />
          ))}
      </div>

      <Pagination pages={pages} currentPage={page || 1}/>
    </div>
  );
}

export default App;
