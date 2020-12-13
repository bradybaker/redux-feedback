import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../App/App.css'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});


class ThankYou extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'CLEAR' })
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='questionCard'>
                <h1>Thank you so much for feedback!</h1>
                <h1> Your responses have been submitted.</h1>
                <Fab variant='extended' className={classes.fab} onClick={this.handleClick}>Leave New Feedback</Fab>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(ThankYou)));