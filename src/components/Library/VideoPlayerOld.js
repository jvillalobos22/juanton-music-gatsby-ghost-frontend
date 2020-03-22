import React, { Component, useState } from 'react';
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoId }) => {
  const [url, setUrl] = useState('');
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log('youtubeObject: ', Object.entries(event.target));
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  // return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;
  return (
    <ReactPlayer
      url={url}
      config={{
        youtube: {
          playerVars: { showinfo: 1 }
        },
        facebook: {
          appId: '12345'
        }
      }}
    />
  );
};

export default VideoPlayer;
