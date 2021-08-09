import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewRes from '../ResManagement/Forms/NewRes';
import MultiStepFrm from '../ResManagement/Forms/AddResMultiStep';
import { makeStyles } from '@material-ui/core/styles';

// Test

const useStyles = makeStyles((theme) => ({
    large: {
      minWidth: "70%"
    },
    paperScrollPaper : {
        minHeight:"80vh",
        minWidth:"100vh"
    }
  }));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
      <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              + Resource
          </Button>
          <Dialog classes={{paper: classes.paperScrollPaper}} open={open} maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Add New Resource 🧙‍♂️</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Resource will be added to the database. CVs will be automatically indexed and analysed for core skills.
                  </DialogContentText>
                  {/* <NewRes></NewRes> */}
                  <MultiStepFrm></MultiStepFrm>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close X
                  </Button>
              </DialogActions>
          </Dialog>
      </div>
  );
}