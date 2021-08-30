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
import StyledNotif from 'enl-components/Notification/StyledNotif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    },
    resModalButton:{
        marginBottom:"1rem",
        marginRight: "1rem"
    }
  });

  const notiDispatch = (res) => {
      console.log(res);
    // example { id: 792, create: true, upload: false, skills_add: 0 }
    // (res.create) ? toast.success("Resource Added", notiOptions): '';
    (res.skills_add) > 0 ? toast.success( res.skills_add + " skills added to DB.", notiOptions) : '';

  }

const notiOptions = {
    position: toast.POSITION.BOTTOM_RIGHT
}

class ResActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showNoti:false
        };
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
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

    handleModalSubmit = (resp) => {
        if (resp.id) {
            this.setState({
                open: false
            })
        }
        notiDispatch(resp);
    
        
    };


    

    


    render() {
        const { classes } = this.props;

        
        return (
            <div>
                <Button className={classes.resModalButton} variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Add Resource
                </Button>
                {/* <Button className={classes.resModalButton} variant="outlined" color="primary" onClick={notify}>
                    Modify Resource
                </Button>                 */}
                <Dialog classes={{ paper: classes.paperScrollPaper }} open={this.state.open} maxWidth="sm" onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Resource 🧙‍♂️

                        <Button className={classes.closeButton} onClick={this.handleClose} color="primary">
                            Close X
                        </Button>
                    </DialogTitle>
                    <DialogContent>
                        <MultiStepFrm handleModalSubmit={this.handleModalSubmit} ></MultiStepFrm>
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
                    {/* Resource will be added to the database. CVs will be automatically indexed and analysed for core skills. */}
                    <ToastContainer />
            </div>
        )

    }
}
export default withStyles(styles)(ResActions);