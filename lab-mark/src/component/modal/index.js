import './style.scss'
import React from 'react'

class Modal extends React.Component {
  render(){
    let classString = this.props.show ? 'modal show' : 'modal'
    return (
      <div className={classString}>
        <button className='close' onClick={this.props.onClose}> </button>
        <main className='update'>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
