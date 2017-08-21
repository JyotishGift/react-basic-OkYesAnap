import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        let { imgData, videoChoice, currentVideo} = this.props;
        return (
            <li className="list-group-item" id={currentVideo} onClick={videoChoice}>
                <div className="video-list media">
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" style = {{width: 50}} src={imgData.thumbnailsURL} />
                        </div>
                    </div>
                    <div className="media-body">
                        <div className="media-heading" style = {{fontSize: 10, paddingLeft: '10px'}}>{imgData.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem;