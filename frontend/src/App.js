import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./Video";
import axios from "./Axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/posts/get");
      setVideos(res.data);
    }

    fetchData();
  }, []);
  return (
    //BEM naming convention
    <div className="app">
      <h1>LETS BUILD TIKTOK CLONE!!</h1>
      <div className="app__videos">
        {videos.map((props) => (
          <Video {...props} key={props._id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
