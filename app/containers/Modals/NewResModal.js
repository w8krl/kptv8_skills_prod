import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewRes from '../ResManagement/Forms/NewRes';
import MultiStepFrm from '../ResManagement/Forms/AddResMultiStep';
import { withStyles } from '@material-ui/core/styles';

// Test

// Test123

const styles = theme => ({
    large: {
      minWidth: "70%"
    },
    paperScrollPaper : {
        minHeight:"70vh",
        minWidth:"60%"
    },
    closeButton:{
        position:"absolute",
        right: "1rem",
        top:"1rem"
    }
  });


class NewResModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleSubmit = () => {
        this.setState({
            open: false
        })
    };
    

    popUp = () => {
alert("test")
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    + Resource
                </Button>
                <Dialog classes={{ paper: classes.paperScrollPaper }} open={this.state.open} maxWidth="sm" onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Resource 🧙‍♂️

                        <Button className={classes.closeButton} onClick={this.handleClose} color="primary">
                            Close X
                        </Button>
                    </DialogTitle>
                    <DialogContent>
                        <MultiStepFrm popUp={this.popUp} handleSubmit={this.handleSubmit}></MultiStepFrm>
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
                    {/* Resource will be added to the database. CVs will be automatically indexed and analysed for core skills. */}
            </div>
        )

    }
}
export default withStyles(styles)(NewResModal);