import React from 'react'

class NoteItem extends React.Component {
  render(){
    return (
      <li>
        Title: {this.props.note.title} <br />
        Content: {this.props.note.content} <br />
        <button name='delete' onClick={() => this.props.removeNote(this.props.note)}>Delete</button>
      </li>
    )
  }
}

export default NoteItem
