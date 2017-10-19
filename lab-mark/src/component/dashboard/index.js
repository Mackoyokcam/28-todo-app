import uuid from 'uuid'
import React from 'react'
import NoteForm from '../note-form'
import NoteList from '../note-list'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
    }

    // Bounded methods
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }

  addNote(note){
    note.id = uuid.v1()
    note.editing = false
    note.completed = false
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  removeNote(note) {
    this.setState(prevState => ({
      notes: prevState.notes.filter(item => item.id !== note.id),
    }))
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state)
  }

  render(){
    return (
      <div className='dashboard'>
        <h1> Dashboard </h1>
        <NoteForm onComplete={this.addNote} />
        <NoteList
          removeNote={this.removeNote}
          notes={this.state.notes}
        />
      </div>
    )
  }
}

export default Dashboard
