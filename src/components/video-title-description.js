import React, { Component } from 'react';

class VideoTitleDescription extends Component {
  render() {
    let imgSrc = "https://www.youtube.com/embed/" + this.props.imgData.videoId;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="random" src={imgSrc}></iframe>
        </div>

        <div className="details">
          <div>{this.props.imgData.title}</div>
          <div>{this.props.imgData.description}</div>
        </div>
      </div>
    )
  }
}

export default VideoTitleDescription;