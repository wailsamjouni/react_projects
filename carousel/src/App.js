// import Slider from "../components/Slider";
import Slider from "./components/Slider";
import "./App.css";
import { data } from './data/images';

function App() {
  return (
    <div className="App">
      <Slider array={data}/>
    </div>
  );
}

export default App;
