import React from 'react'
import NoteForm from '../note-form'
import Modal from '../modal'

class NoteItem extends React.Component {
  render(){

    let {note, removeNote, updateNote} = this.props
    let showEdit = () => updateNote({...note, editing: true})
    let hideEdit = () => updateNote({...note, editing: false})
    let updateAndClose = (note) => {
      updateNote({...note, editing: false})
    }


    return (
      <li className='note-item'>
        <p> Title: {note.title} </p>
        <p> Content: <span onDoubleClick={showEdit}>{note.content}</span> </p>
        <button name='delete' onClick={() => removeNote(this.props.note)}>Delete</button>

        <Modal onClose={hideEdit} show={note.editing} >
          <h3> Update your note </h3>
          <NoteForm onComplete={updateAndClose} note={note}/>
        </Modal>
      </li>
    )
  }
}

export default NoteItem
