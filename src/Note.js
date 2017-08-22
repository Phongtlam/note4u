import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onBodyInput = this.onBodyInput.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onTitleInput(title) {
    this.titleInputElem = title;
  }

  onBodyInput(body) {
    this.bodyInputElem = body;
  }

  onAdd(e) {
    e.preventDefault();
    this.props.onAdd(this.titleInputElem.value, this.bodyInputElem.value)
  }

  render() {
    const borderColor = this.props.borderColor;
    return (
      <div className={borderColor}>
        <div className="color-picker-group">
          <button onClick={this.props.clickPink} className="color-picker pink" />
          <button onClick={this.props.clickAqua} className="color-picker aqua" />
          <button onClick={this.props.clickYellow} className="color-picker yellow" />
          <button onClick={this.props.clickBlue} className="color-picker blue" />
        </div>
        <div>
          <input
            type="text"
            className="note-title"
            placeholder="Untitled"
            ref={this.onTitleInput}
          />
          <textarea
            className="note-body"
            placeholder="Just start typing here"
            ref={this.onBodyInput}
          />
          <div className="button-group">
            <button
              className="note-cancel button"
              > Cancel
            </button>
            <button
              onClick={this.onAdd}
              className="note-save button"
              > Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
