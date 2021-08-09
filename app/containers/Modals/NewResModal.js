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
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    large: {
        minWidth: "70%"
    },
    paperScrollPaper: {
        minHeight: "70vh",
        minWidth: "60%"
    },
    closeButton: {
        position: "absolute",
        right: "1rem",
        top: "1rem"
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const form_data = new FormData();
        for (var key in formData) {
            form_data.append(key, formData[key]);
        }
        form_data.append("file", selectedFile);

        Axios.post('http://localhost:8888/newRes', form_data)
            .then(function (response) {
                console.log(response.data);
            })

    };

    const [formData, updateFormData] = React.useState();
    const [selectedFile, setSelectedFile] = React.useState();

    const handleChange = (e) => {

        console.log(formData);
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };
    
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                + Resource
            </Button>
            <Dialog classes={{ paper: classes.paperScrollPaper }} open={open} maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Resource 🧙‍♂️

                    <Button className={classes.closeButton} onClick={handleClose} color="primary">
                        Close X
                    </Button>
                </DialogTitle>
                <DialogContent>
                    {/* <NewRes></NewRes> */}
                    <MultiStepFrm handleSubmit={handleSubmit}></MultiStepFrm>
                </DialogContent>
                <DialogActions>
                    {/* Resource will be added to the database. CVs will be automatically indexed and analysed for core skills. */}
                </DialogActions>
            </Dialog>
        </div>
    );
}