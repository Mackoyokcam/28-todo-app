import React from 'react'

class NoteItem extends React.Component {
  render(){
    let {note, removeNote} = this.props
    return (
      <li className='note-item'>
        Title: {note.title} <br />
        Content: {note.content} <br />
        <button name='delete' onClick={() => removeNote(this.props.note)}>Delete</button>
      </li>
    )
  }
}

export default NoteItem
