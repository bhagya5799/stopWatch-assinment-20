// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    countClock: 0 * 60,
  }

  resetBtn = () => {
    this.setState({countClock: 0 * 60})
    clearInterval(this.timerId)
  }

  minute = () => {
    const {countClock} = this.state
    const minitesVal = Math.floor(countClock / 60)
    if (minitesVal > 10) {
      return minitesVal
    }
    return `0${minitesVal}`
  }

  seconds = () => {
    const {countClock} = this.state
    const secondsVal = Math.floor(countClock % 60)
    if (secondsVal > 10) {
      return secondsVal
    }
    return `0${secondsVal}`
  }

  tickId = () => {
    const {countClock} = this.state
    this.setState(prevState => ({
      countClock: prevState.countClock + 1,
    }))
  }

  strtBtn = () => {
    this.timerId = setInterval(this.tickId, 1000)
  }

  stopBtn = () => {
    clearInterval(this.timerId)
    console.log('clear')
  }

  render() {
    const time = `${this.minute()}:${this.seconds()}`
    return (
      <div className="stopWatch-container">
        <div>
          <h1 className="">Stopwatch</h1>
          <div className="timer-btn-container">
            <div className="clockLogo-timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h3 className="timer">Timer</h3>
            </div>
            <h1>{time}</h1>
            <div className="btn-container">
              <button
                className="btn green"
                onClick={this.strtBtn}
                type="button"
              >
                Start
              </button>
              <button className="btn red" onClick={this.stopBtn} type="button">
                Stop
              </button>
              <button
                className="btn yellow"
                onClick={this.resetBtn}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
