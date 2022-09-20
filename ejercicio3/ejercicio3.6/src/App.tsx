import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MemeGeneratorContainer } from "./components/MemeGenerator/MemeGeneratorContainer";

function App() {
  return (
    <div className="App">
      <Header/>

      <MemeGeneratorContainer />

      <Footer/>
    </div>
  );
}

export default App;
