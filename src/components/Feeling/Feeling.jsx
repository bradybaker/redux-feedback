import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class Feeling extends Component {

    state = {
        feeling: 0
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'FEELING', payload: this.state })
        this.props.history.push('/understanding')
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {JSON.stringify(this.state)}
                <h1>Feeling</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">How are you feeling today?</FormLabel>
                        <RadioGroup
                            aria-label="Feeling"
                            name="Feeling"
                            className={classes.group}
                            value={this.state.feeling}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="1" control={<Radio required />} label="1" />
                            <FormControlLabel value="2" control={<Radio required />} label="2" />
                            <FormControlLabel value="3" control={<Radio required />} label="3" />
                            <FormControlLabel value="4" control={<Radio required />} label="4" />
                            <FormControlLabel value="5" control={<Radio required />} label="5" />
                        </RadioGroup>
                    </FormControl>
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Feeling)));