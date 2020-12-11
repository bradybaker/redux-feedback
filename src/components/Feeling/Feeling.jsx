import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Feeling extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div>
                <h1>Feeling</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Next</button>
                </form>

            </div>
        )
    }
}

export default withRouter(Feeling);