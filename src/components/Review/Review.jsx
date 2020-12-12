import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Review extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/thankyou')
    }

    render() {
        return (
            <div>
                <h1>Review Responses</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Feeling: </p>
                    <p>Understanding: </p>
                    <p>Support: </p>
                    <p>Comments: </p>
                    <button type='submit'>Submit Feedback</button>
                </form>

            </div>
        )
    }
}

export default withRouter(Review);