import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
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
            <div>
                {JSON.stringify(this.state)}
                <h1>Comments</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="comments"
                        label="Comments"
                        multiline
                        rowsMax="4"
                        value={this.state.comments}
                        onChange={this.handleChange}
                        className={classes.textField}
                        margin="normal"
                        helperText="Comments"
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