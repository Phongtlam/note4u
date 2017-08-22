import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';
import Note from './Note';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: 'note-card border-pink',
      isOpen: false,
      noteArray: [],
    }
    this.clickPink = this.clickPink.bind(this);
    this.clickAqua = this.clickAqua.bind(this);
    this.clickYellow = this.clickYellow.bind(this);
    this.clickBlue = this.clickBlue.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.addToNoteArray = this.addToNoteArray.bind(this);
  }

  clickPink() {
    this.setState({
      borderColor: 'note-card border-pink',
    })
  }

  clickAqua() {
    this.setState({
      borderColor: 'note-card border-aqua',
    })
  }

  clickYellow() {
    this.setState({
      borderColor: 'note-card border-yellow',
    })
  }

  clickBlue() {
    this.setState({
      borderColor: 'note-card border-blue',
    })
  }

  onAdd(title, body) {
    this.addToNoteArray(title, body);
    this.setState({ isOpen: false });
  }

  isOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  addToNoteArray(title, body) {
    const newNote = {
      title,
      body,
      borderColor: this.state.borderColor,
    };
    this.setState(prevState => ({
      noteArray: prevState.noteArray.concat(newNote),
    }));
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <div className="app">
        <div className="app-header">
          <button
            onClick={this.isOpen}
            className="note-add button"> <span className="plus">+ </span> Add Note</button>
        </div>
        <div className="note-list">
          {this.state.noteArray.map((note, i) =>
            (<div key={i} className="fav-col">
              <List note={note} />
            </div>),
          )}
        </div>
        {isOpen?
          (<Note
            borderColor={this.state.borderColor}
            clickPink={this.clickPink}
            clickAqua={this.clickAqua}
            clickYellow={this.clickYellow}
            clickBlue={this.clickBlue}
            onAdd={this.onAdd}
          />) : (
            null
          )
        }
      </div>
    )
  }
}

export default App;
