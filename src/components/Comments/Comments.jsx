import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import '../App/App.css'
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    fab: {
        margin: theme.spacing.unit,
    },
});


class Comments extends Component {

    state = {
        comments: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'COMMENT', payload: this.state })
        this.props.history.push('/review')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    goBack = () => {
        this.props.history.push('/supported')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='questionCard'>
                <h1>Any Comments?</h1>
                <h4>You can leave this blank.</h4>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="comments"
                        multiline
                        rowsMax="4"
                        value={this.state.comments}
                        onChange={this.handleChange}
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <Fab variant='extended' className={classes.fab} type='submit'>Next <ArrowForwardIcon /></Fab>
                </form>
                <Fab variant='extended' className={classes.fab} onClick={this.goBack}><ArrowBackIcon /> Back</Fab>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Comments)));