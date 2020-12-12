import React, { Component } from 'react'
import axios from 'axios'

class Admin extends Component {

    state = {
        responseArray: []
    }

    componentDidMount() {
        this.getResponses()
    }

    getResponses = () => {
        axios.get('/api/response')
            .then(response => {
                console.log('GETTING from database ->', response.data)
                this.setState({
                    responseArray: response.data
                })
            })

            .catch(err => {
                console.log('ERROR in client GET', err)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Admin Page</h1>
            </div>
        )
    }
}

export default Admin;