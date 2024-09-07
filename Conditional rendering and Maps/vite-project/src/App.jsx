import Video from "./Components/Video";
import "./App.css";
function App() {
  let videos = [
    {
      id:1,
      title: "coder fucked up",
      views: "1M",
      time: "2 year ago",
      channel: "proxy",
      verified: true,
    },
    {
      id:2,
      title: "coder dost",
      views: "10k",
      time: "3 year ago",
      channel: "Danger",
      verified: false,
    },
    {
      id:3,
      title: "coder gaming",
      views: "2M",
      time: "4 year ago",
      channel: "Dino",
      verified: true,
    },
  ];
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map(video =><Video
            title={video.title}
            views={video.views}
            time={video.time}
            verified={video.verified}
            channel={video.channel}
            id={video.id}
          ></Video>
        )}
      </div>
    </>
  );
}

export default App;
