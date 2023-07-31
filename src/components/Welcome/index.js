// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscirbe = () => {
    this.setState(prevState => {
      let result
      if (prevState.isSubscribed === false) {
        result = {isSubscribed: true}
      } else {
        result = {isSubscribed: false}
      }
      return result
    })
  }

  render() {
    const {isSubscribed} = this.state

    let text
    if (isSubscribed) {
      text = 'Subscribed'
    } else {
      text = 'Subscribe'
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button onClick={this.onSubscirbe}>{text}</button>
      </div>
    )
  }
}

export default Welcome
