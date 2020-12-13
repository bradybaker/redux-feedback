import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import '../App/App.css'
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3,
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

class Supported extends Component {

    state = {
        support: 0
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'SUPPORT', payload: this.state })
        this.props.history.push('/comments')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    goBack = () => {
        this.props.history.push('/understanding')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='questionCard'>
                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup
                            required
                            aria-label="support"
                            name="support"
                            className={classes.group}
                            value={this.state.support}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="1" control={<Radio required />} label="1" />
                            <FormControlLabel value="2" control={<Radio required />} label="2" />
                            <FormControlLabel value="3" control={<Radio required />} label="3" />
                            <FormControlLabel value="4" control={<Radio required />} label="4" />
                            <FormControlLabel value="5" control={<Radio required />} label="5" />
                        </RadioGroup>
                    </FormControl>
                    <Fab variant='extended' className={classes.fab} type='submit'>Next <ArrowForwardIcon /></Fab>
                </form>
                <Fab variant='extended' className={classes.fab} onClick={this.goBack}><ArrowBackIcon /> Back</Fab>
                <h4>3 of 4</h4>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(connect()(Supported)));