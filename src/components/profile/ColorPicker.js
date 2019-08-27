import React from 'react'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayColorPicker: false,
      background: props.background
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleChangeComplete = (color) => {
    this.setState({background: color.hex})
    this.props.handleColorChange(this.state.background)
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
        <span className="border border-black px-20 py-2 cursor" style={button} onClick={ this.handleClick }></span>
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

export default ColorPicker