import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Comments extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/review')
    }

    goBack = () => {
        this.props.history.push('/supported')
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(Comments);