import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import AdminTable from './components/AdminTable'
import '../App/App.css'

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
            <div className='tableCard'>
                <h1>Feedback Results</h1>
                <AdminTable />
            </div>
        )
    }
}

export default connect()(Admin);