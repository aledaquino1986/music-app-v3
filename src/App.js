
import './App.css';
import Player from "./pages/Player"
import ButtonLibraryContextProvider from "./context/buttonLibraryContext"


function App() {
  return (
    <div className="App">
    <ButtonLibraryContextProvider> 
      <Player/>
      </ButtonLibraryContextProvider>
    </div>
  );
}

export default App;
