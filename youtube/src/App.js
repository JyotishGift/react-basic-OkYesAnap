import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import VideoTitleDescription from './components/video-title-description'
import ListItem from './components/list-item'
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI';


class App extends Component {
  constructor() {
    super();
    this.searchingData = {};
    this.state = { search: '', imgData: [{}, {}, {}, {}, {}] };
  }
  upDate() {
    YTSearch({ key: API_KEY, term: this.state.search },
      data => {
        this.setState({
          imgData: data.map((val, index) => {
            let { snippet } = data[index];
            return ({
              videoId: data[index].id.videoId,
              title: snippet.title,
              description: snippet.description,
              thumbnailsURL: snippet.thumbnails.default.url
            })
          })
        });
        console.log(data)
      });
    console.log(this.state.search);
  }
  searchChange(e) {
    let { search } = this.state;
    this.setState({ search: (e.keyCode !== 8 ? search += e.key : search.slice(0, -1)) });
    this.upDate();
  }

  render() {
    return (
      <main className="container">
        <Search
          searchChange={this.searchChange.bind(this)}
          searchString={this.state.search}
        />
        <div className="row">
          <VideoTitleDescription
            imgData={this.state.imgData[0]} />
          <ul className="col-md-4 list-group">
            {this.state.imgData.map((data, index) => {
              return <ListItem imgData={this.state.imgData[index]} />
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
