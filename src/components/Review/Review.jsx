import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App/App.css'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});

class Review extends Component {

    state = {
        response: {
            name: this.props.nameReducer.name,
            feeling: this.props.feelingReducer.feeling,
            understanding: this.props.understandingReducer.understanding,
            support: this.props.supportReducer.support,
            comments: this.props.commentReducer.comments
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/response', this.state.response)
            .then(response => {
                console.log('Back from client post', response)
            })
            .catch(err => {
                console.log('Error in Review POST', err)
            }) //end POST
        this.props.history.push('/thankyou')
    }

    render() {
        const { classes } = this.props;
        const { nameReducer, feelingReducer, understandingReducer, supportReducer, commentReducer } = this.props
        return (
            <div className='questionCard'>
                <h1>Review Responses</h1>
                <form onSubmit={this.handleSubmit} className='responseCard'>
                    <p>Name: {nameReducer.name}</p>
                    <p>Feeling: {feelingReducer.feeling}  </p>
                    <p>Understanding: {understandingReducer.understanding}</p>
                    <p>Support: {supportReducer.support}</p>
                    <p>Comments: {commentReducer.comments}</p>
                    <Fab variant='extended' className={classes.fab} type='submit'>Submit Feedback</Fab>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    nameReducer: reduxState.nameReducer,
    feelingReducer: reduxState.feelingReducer,
    understandingReducer: reduxState.understandingReducer,
    supportReducer: reduxState.supportReducer,
    commentReducer: reduxState.commentReducer
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Review)));