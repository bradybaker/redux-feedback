import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import '../App/App.css'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'center'
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
                <h1>Comments</h1>
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
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Comments)));