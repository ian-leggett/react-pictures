import React, { Component } from 'react'

class ImageCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans: spans })
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  render () {
    const { alt_description, urls } = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          className="ui centered"
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard