import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../App/App.css'

class ThankYou extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'CLEAR' })
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='questionCard'>
                <h1>Thank you so much for feedback! Your responses have been submitted.</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect()(ThankYou));