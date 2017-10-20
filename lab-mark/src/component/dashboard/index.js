import './style.scss'
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
    this.updateNote = this.updateNote.bind(this)
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

  updateNote(note) {
    this.setState(prevState => ({
      notes: prevState.notes.map(item => item.id === note.id ? note : item),
    }))
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state)
  }

  render(){
    return (
      <div className='dashboard'>
        <fieldset>
          <legend> Dashboard </legend>
          <NoteForm onComplete={this.addNote} />
          <NoteList
            removeNote={this.removeNote}
            updateNote={this.updateNote}
            notes={this.state.notes}
          />
        </fieldset>
      </div>
    )
  }
}

export default Dashboard
