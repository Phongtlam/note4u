import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const borderColor = `note-display ${this.props.borderColor}`;
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
            onChange={(e) => this.props.onTitleInput(e.target.value)}
          />
          <textarea
            className="note-body"
            placeholder="Just start typing here"
            onChange={(e) => this.props.onBodyInput(e.target.value)}
          />
          <div className="button-group">
            <button
              className="note-cancel button"
              > Cancel
            </button>
            <button
              onClick={this.props.onAdd}
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
