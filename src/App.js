import Banner from "./componentes/Banner/Banner";
import Home from "./componentes/Home/Home";
import Transmissões from "./componentes/Transmissões/Transmissões";
import Loja from "./componentes/Loja/Loja";
import Assistir from "./componentes/Assistir/Assistir";

function App() {
  return (
    <div className="App">
      <Banner />
      <Home />
      <Transmissões />
      <Loja />
      <Assistir />
    </div>
  );
}

export default App;