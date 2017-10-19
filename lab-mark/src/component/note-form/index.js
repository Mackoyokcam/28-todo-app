import React from 'react'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete({...this.state})
    this.setState({title:'', content:''})
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
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

        <button type='submit'>Create</button>
      </form>
    )
  }
}

export default NoteForm
