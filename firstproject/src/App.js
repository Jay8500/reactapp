import React, { useEffect, useState } from 'react';
import Video from './Video';
// import my from './logos/my.mp4';

import './App.css';
import db from './firebase';
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // fires onces wheb the component loads and when 
    db.collection('videos').onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data())));
  }, [])


  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(

          ({ i, channel, description, likes, messages, share, song }) => (
            <Video keys={i} channel={channel} description={description}
              song={song}
              likes={likes}
              messages={messages}
              share={share} />))}
        {/* <Video channel="Micheal"
          description="yes it is awesome"
          song="ohh lalala"
          likes="111"
          messages="200"
          share="300"
          url={my} />
        <Video url={my} />
        <Video url={my} />
        <Video url={my} /> */}
      </div>
    </div>
  );
}

export default App;


// C:/Users/sai - PC/Pictures/Camera Roll/teamo.mp4