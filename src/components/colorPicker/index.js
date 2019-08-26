import ReactDOM from 'react-dom'
import React from 'react'
import { SketchPicker } from 'react-color'

class ButtonExample extends React.Component {
  state = {
    displayColorPicker: false,
    background: '#000000'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleChangeComplete = (color) => {
    this.setState({background: color.hex})
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    const button ={
      backgroundColor: this.state.background
    }
    return (
      <div>
        <button style={button} onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker && 
          <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <SketchPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>}
      </div>
    )
  }
}

ReactDOM.render(<ButtonExample/>, document.getElementById('react-color-picker'))

export default ButtonExample