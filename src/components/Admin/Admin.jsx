import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import AdminTable from './components/AdminTable'

class Admin extends Component {


    componentDidMount() {
        this.getResponses()
    }

    getResponses = () => {
        axios.get('/api/response')
            .then(response => {
                console.log('GETTING from database ->', response.data)
                this.props.dispatch({ type: 'GET_RESPONSES', payload: response.data })
            })
            .catch(err => {
                console.log('ERROR in client GET', err)
            })
    }

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <AdminTable />
            </div>
        )
    }
}

export default connect()(Admin);