import React from 'react'

class NoteForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      content: '',
      editing: false,
      completed: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState({title:'', content:'', id: '', completed: 'false'})
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        Title: <input onChange={this.handleChange} type='text' name='title' value={this.state.title} /> <br />
        Content: <input onChange={this.handleChange} type='text' name='content' value={this.state.content} /> <br />
        <button type='submit'>Create</button>
      </form>
    )
  }
}

export default NoteForm
