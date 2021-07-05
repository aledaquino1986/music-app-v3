import "./App.css";
import Player from "./pages/Player";
import ButtonLibraryContextProvider from "./context/buttonLibraryContext";
import FetchSongsProvider from "./context/fetchSongsContext";

function App() {
  return (
    <div className="App">
      <ButtonLibraryContextProvider>
        <FetchSongsProvider>
          <Player />
        </FetchSongsProvider>
      </ButtonLibraryContextProvider>
    </div>
  );
}

export default App;
