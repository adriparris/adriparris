// TypingAnimation.jsx
import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from "./typing-animation.json"

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div>
        <Lottie options={defaultOptions} height={500} />
      </div>
    )
  }
}

export default UncontrolledLottie
