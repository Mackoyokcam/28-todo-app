import './style.scss'
import React from 'react'

let modalStyles = (props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: props.show ? 'block' : 'none',
  background: 'blue',
})

let modalMainStyles = {
  position: 'fixed',
  background: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

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
