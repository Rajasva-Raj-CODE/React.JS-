import Video from "./componets/video";
import "./App.css";
function App() {
  let obj = {
    title: "coder fucked up",
    views: "1M",
    time: "2 year ago",
    channel: "proxy",
  };
  return (
    <>
      <div className="App">
        <div>Videos</div>
        <Video
          title="node js"
          views="10k"
          time="1 year ago"
          // channel="Coder Dost"
        />
        <Video
          title="next js"
          views="100k"
          time="2 year ago"
          channel="Coder Dost"
        />
        <Video {...obj} />
      </div>
    </>
  );
}

export default App;
