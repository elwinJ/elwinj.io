import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVid extends React.Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    render() {
        const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const {videoId} = this.props //This will get the video id and pass it to the API.
    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

 
}

export default YouTubeVid