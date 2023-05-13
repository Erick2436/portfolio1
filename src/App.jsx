import MainContent from "./componets/MainContent";
import Sidebar from "./componets/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
      <div id="Portifolio">
        <h1>Erick Neira Guimarães</h1>
        <Sidebar />
        <MainContent />
      </div>
  );
}

export default App;
