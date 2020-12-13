import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
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
    fab: {
        margin: theme.spacing.unit,
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
            <div className='questionCard'>
                <h1>Prime Academy Daily Survey</h1>
                <h2>We appreciate you taking some time to give us your feedback!</h2>
                <h3>Let's start with your name!</h3>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        id="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Fab variant='extended' className={classes.fab} type='submit'>Next</Fab>
                </form>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Home)));