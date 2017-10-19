import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  render(){
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, i) =>
          <NoteItem
            note={note}
            removeNote={this.props.removeNote}
            updateNote={this.props.updateNote}
            key={i}
          />
        )}
      </ul>
    )
  }
}

export default NoteList
