import React from 'react';

const List = (props) => {
  return (
    <div>
      {props.noteArray.map((note, i) => {
        let noteClass = `note-list ${note.borderColor}`
        return (
          <div key={i} className={noteClass}>
            <div className="note-single">
              <h2 className="note-single-title">{note.title}</h2>
              <a onClick={() => props.onDelete(note)} className="note-icon fa fa-trash" aria-hidden="true"></a>
              <a className="note-icon fa fa-pencil" aria-hidden="true"></a>
            </div>
            <hr />
            {note.body}
          </div>
        )
      })}
    </div>
  )
}


export default List;
