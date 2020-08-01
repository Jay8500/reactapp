import React, { useRef, useState } from 'react'
import "./Video.css";
//  import my from './logos/my.mp4';
//  import bluecat from './logos/bluecat.mp4';
import exercisecat from './logos/exercisecat.mp4';
//  import orangecat from './logos/orangecat.mp4';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSiderbar';
function Video({
    channel, description, song, likes, messages, share,
}) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="Video">
            <video className="Video_player" ref={videoRef} loop onClick={onVideoPress} src={exercisecat}></video>
            <VideoFooter channel={channel}
                description={description}
                song={song} />
            <VideoSidebar likes={likes} messages={messages} share={share} />
        </div>
    )
}

export default Video;
// C:\Users\sai - PC\Pictures\Camera Roll\my.mp4