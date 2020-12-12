import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class AdminTable extends Component {

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