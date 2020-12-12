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


class Home extends Component {

    state = {
        name: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'NAME', payload: this.state })
        this.props.history.push('/feeling')
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {JSON.stringify(this.state)}
                <h1>Home</h1>
                <h2>We appreciate you taking some time to give us your feedback! Let's start with your name!</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <button type='submit'>Next</button>
                </form>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Home)));