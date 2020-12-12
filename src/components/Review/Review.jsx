import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Review extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/thankyou')
    }

    render() {
        const { feelingReducer, understandingReducer, supportReducer, commentReducer } = this.props
        return (
            <div>
                <h1>Review Responses</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Feeling: {feelingReducer.feeling}  </p>
                    <p>Understanding: {understandingReducer.understanding}</p>
                    <p>Support: </p>
                    <p>Comments: </p>
                    <button type='submit'>Submit Feedback</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    feelingReducer: reduxState.feelingReducer,
    understandingReducer: reduxState.understandingReducer,
    supportReducer: reduxState.supportReducer,
    commentReducer: reduxState.commentReducer
});

export default withRouter(connect(mapStateToProps)(Review));