import React from 'react'
import Countdown from 'react-countdown-now'

export default class CountdownWrapper extends React.Component {
  constructor(props){
    super(props)
  }

  renderer ({ hours, minutes, seconds, completed }) {
    let rowInputs = document.getElementsByClassName('row input')

    if (completed) {
      for(let i=0; i < rowInputs.length; i++) {
        rowInputs[i].childNodes.forEach(function (node) {
          if(node.childNodes[0]) node.childNodes[0].style.display = 'none'
        })
      }

      return <Completionist />
    }
    else {
      return <span>{ minutes }:{ seconds }</span>
    }
  }

  render() {
    return (
      <div className="countdown-wrapper">
        <Countdown
          date = { Date.now() + this.props.countdown * 1000 * 60 }
          renderer = { this.renderer }
        />
      </div>
    )
  }
}

const Completionist = () => <span><b>Time's up! Please restart the game</b></span>
