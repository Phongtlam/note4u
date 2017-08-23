import React from 'react';
import './App.css';

import List from './List';
import Note from './Note';
import RemoveModal from './RemoveModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: 'note-card border-pink',
      title: '',
      body: '',
      isOpen: false,
      isRemvModal: false,
      noteArray: [],
    }
    this.clickPink = this.clickPink.bind(this);
    this.clickAqua = this.clickAqua.bind(this);
    this.clickYellow = this.clickYellow.bind(this);
    this.clickBlue = this.clickBlue.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.addToNoteArray = this.addToNoteArray.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onBodyInput = this.onBodyInput.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onTrashIconClick = this.onTrashIconClick.bind(this);
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
    });
  }

  onTitleInput(title) {
    this.setState({ title });
  }

  onBodyInput(body) {
    this.setState({ body });
  }

  onAdd() {
    this.addToNoteArray();
    this.setState({
      borderColor: 'note-card border-pink',
      title: '',
      body: '',
      isOpen: false,
      isRemove: false,
    });
  }

  isOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  addToNoteArray() {
    const newNote = {
      title: this.state.title,
      body: this.state.body,
      borderColor: this.state.borderColor,
    };
    this.setState(prevState => ({
      noteArray: prevState.noteArray.concat(newNote),
    }));
  }

  onDelete(item) {
    console.log('this is i', this.state.noteArray.indexOf(item))
    const removeNote = this.state.noteArray.indexOf(item);
  }

  onTrashIconClick() {
    this.setState({ isRemvModal: true });
  }

  render() {
    const isOpen = this.state.isOpen;
    const isRemvModal = this.state.isRemvModal;
    return (
      <div className="app">
        <div className="app-header">
          <button
            onClick={this.isOpen}
            className="note-add button"> <span className="plus">+ </span> Add Note</button>
        </div>
        <div className="array-list">
          <List noteArray={this.state.noteArray}
            onTrashIconClick={this.onTrashIconClick}
            onDelete={this.onDelete}
          />
        </div>
        {isRemvModal?
          <RemoveModal /> : null
        }
        {isOpen?
          (<div className="note-main">
            <Note
              borderColor={this.state.borderColor}
              title={this.state.title}
              body={this.state.body}
              onTitleInput={this.onTitleInput}
              onBodyInput={this.onBodyInput}
              clickPink={this.clickPink}
              clickAqua={this.clickAqua}
              clickYellow={this.clickYellow}
              clickBlue={this.clickBlue}
              onAdd={this.onAdd}
            />
          </div>
          ) : (
            null
          )
        }
      </div>
    )
  }
}

export default App;
