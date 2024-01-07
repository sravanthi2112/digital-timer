// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timerElapsedinMinutes: 25, start: true}

  onClickMinus = () => {
    this.setState(prevState => ({
      timerElapsedinMinutes: prevState.timerElapsedinMinutes - 1,
    }))
  }

  onClickPlus = () => {
    this.setState(prevState => ({
      timerElapsedinMinutes: prevState.timerElapsedinMinutes + 1,
    }))
  }

  onClickStartorPause = () => {
    this.setState(prevState => ({start: !prevState.start}))
  }

  onClickReset = () => {
    this.setState({timerElapsedinMinutes: 25})
  }

  render() {
    const {timerElapsedinMinutes, start} = this.state
    console.log(timerElapsedinMinutes)
    return (
      <div className="background-sec">
        <h1>Digital Timer</h1>
        <div className="content-sec">
          <div className="background-image-time">
            <div className="time-count">
              <h1 className="time-countdown">{timerElapsedinMinutes}:00</h1>
              <p className="running">{start ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="options-sec">
            <div className="start-reset-container">
              <button
                type="button"
                className="start-reset"
                onClick={this.onClickStartorPause}
              >
                {start ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png "
                    alt="play icon"
                    className="icons"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
                    alt="pause icon"
                    className="icons"
                  />
                )}
                {start ? 'Start' : 'Pause'}
              </button>
              <button
                type="button"
                className="start-reset"
                onClick={this.onClickReset}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icons"
                />
                Reset
              </button>
            </div>
            <p className="set-timer-limit">Set Timer limit</p>
            <div className="plus-minus-container">
              <button
                type="button"
                className="plus-minus"
                onClick={this.onClickMinus}
              >
                -
              </button>
              <p className="set-timer">{timerElapsedinMinutes}</p>
              <button
                type="button"
                className="plus-minus"
                onClick={this.onClickPlus}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
