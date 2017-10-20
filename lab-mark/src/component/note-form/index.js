import './style.scss'
import React from 'react'

let emptyState = {
  title: '',
  content: '',
}

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    let {notes} = props
    this.state = notes ? notes : emptyState

    // Bounded methods
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete({...this.state})
    this.setState(emptyState)
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.note){
      this.setState(nextProps.note)
    }
  }

  render(){
    let buttonText = this.props.note ? 'update' : 'create'
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}
      >

        Title: <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        /> <br />

        Content: <input
          type='text'
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
        /> <br />

        <button type='submit'>{buttonText}</button>
      </form>
    )
  }
}

export default NoteForm
