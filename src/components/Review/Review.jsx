import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Review extends Component {

    state = {
        response: {
            feeling: this.props.feelingReducer.feeling,
            understanding: this.props.understandingReducer.understanding,
            support: this.props.supportReducer.support,
            comments: this.props.commentReducer.comments
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/thankyou')
    }

    render() {
        const { feelingReducer, understandingReducer, supportReducer, commentReducer } = this.props
        return (
            <div>
                {JSON.stringify(this.state.response)}
                <h1>Review Responses</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Feeling: {feelingReducer.feeling}  </p>
                    <p>Understanding: {understandingReducer.understanding}</p>
                    <p>Support: {supportReducer.support}</p>
                    <p>Comments: {commentReducer.comments}</p>
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