import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 25
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        padding: '4em',
        borderRadius: 10
    },
    table: {
        minWidth: 600,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}); // end styles

class AdminTable extends Component {

    handleDelete = (event, id) => {
        console.log('Clicking Delete')
        Swal.fire({
            title: 'Are you sure?',
            text: 'This response will be gone forever',
            icon: 'warning',
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Response Deleted',
                    'success',
                    false
                )
                axios.delete(`/api/response/${id}`)
                    .then(response => {
                        this.props.getResponses()
                    })
                    .catch(err => {
                        console.log('Error in DELETE on client', err)
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Response not deleted',
                    'error',
                    false
                )
            }
        })
    }

    // TODO MAKE AXIOS DELETE ON CLIENT AND ROUTER

    render() {
        const classes = this.props.classes
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell align="center">Feeling</CustomTableCell>
                                <CustomTableCell align="center">Understanding</CustomTableCell>
                                <CustomTableCell align="center">Support</CustomTableCell>
                                <CustomTableCell align="center">Comment</CustomTableCell>
                                <CustomTableCell align="center">Delete</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.responseReducer.map(item => (
                                <TableRow className={classes.row} key={item.id}>
                                    <CustomTableCell component="th" scope="item">
                                        {item.name}
                                    </CustomTableCell>
                                    <CustomTableCell align="center">{item.feeling}</CustomTableCell>
                                    <CustomTableCell align="center">{item.understanding}</CustomTableCell>
                                    <CustomTableCell align="center">{item.support}</CustomTableCell>
                                    <CustomTableCell align="center">{item.comments}</CustomTableCell>
                                    <CustomTableCell align="center">
                                        <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleDelete(event, item.id)} >
                                            <DeleteIcon />
                                        </IconButton>
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    responseReducer: reduxState.responseReducer
});

export default withStyles(styles)(connect(mapStateToProps)(AdminTable));