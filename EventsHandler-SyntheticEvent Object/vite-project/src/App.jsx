import "./App.css";
import PlayButton from "./Componnets/PlayButton";

function App() {
  return (
    <>
      <PlayButton message="Hello" onSmash={() => console.log("Playyyy")}>
        Play
      </PlayButton>
      {/* <PlayButton message="Stop" onSmash={() => alert("playyy")}>
        Pause
      </PlayButton> */}
    </>
  );
}

export default App;
