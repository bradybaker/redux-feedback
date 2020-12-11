import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Understanding extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/supported')
    }

    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Understanding</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(Understanding);