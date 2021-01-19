import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Goeiemorgen morgen',
          artist: 'Nicole & Hugo',
          album: 'Boemma muziek',
          id: 123456789
        },
        {
          name: 'Grasmachien',
          artist: 'Sam Gooris',
          album: 'Foaf muziek',
          id: 987654321
        }
      ],
      playlistName: "Foave",
      playlistTracks: [
        {
          name: 'Laat de zon in je hart',
          artist: 'Christoff',
          album: 'Schlager 2003',
          id: 143256789
        },
        {
          name: 'Je hebt me duizendmaal belogen',
          artist: 'Melinda',
          album: 'Festival',
          id: 987652341
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    this.state.playlistTracks.push(track)
    this.setState({ playlistTracks: this.state.playlistTracks })
  }
  removeTrack(track) {
    let filteredPlaylist = this.state.playlistTracks.filter(savedTrack => {
      return savedTrack.id !== track.id
    })
    this.setState({ playlistTracks: filteredPlaylist })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack()}
            />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;