import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Supported extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/comments')
    }

    goBack = () => {
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div>
                <h1>Supported</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(Supported);