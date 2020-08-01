import React, { useState } from "react";
import './VideoSidebar.css';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({ likes, share, messages }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videosidebar">
            <div className="videosidebar_bottom">
                {liked ? (<FavoriteIcon  onClick={(e) => setLiked(false)} />) :
                    (<FavoriteBorderIcon onClick={(e) => setLiked(true)} />)}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videosidebar_bottom">
                <MessageIcon />
                <p>{messages}</p>
            </div>
            <div className="videosidebar_bottom">
                <ShareIcon />
                <p>{share}</p>
            </div>

        </div>
    );
}

export default VideoSidebar;