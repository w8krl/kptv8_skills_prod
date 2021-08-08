import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import FileInput from '../FileInput';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 600,
            // display: "block"
        },

    },
    test: { display: "block" }
}));


const initData = {
    name: 'Karl Webster',
    email: 'karl.webster@kptv8.com',
    title: 'Mr',
    pri_contact_no: '+447456300303',
    sec_contact_no: '',
    contract_type: 'Contractor',
    country: 'UK',
    region: 'Sheffield',
    comments: '',
    management_co: 'KPTV8',
    co_type: 'Limited'
};





export default function ValidationTextFields() {
    const classes = useStyles();

    const [formData, updateFormData] = React.useState();
    const [selectedFile, setSelectedFile] = React.useState();

    //updateFormData(...formData,initData)

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const form_data = new FormData();
        for ( var key in formData ) {
            form_data.append(key, formData[key]);
        }
        form_data.append("file", selectedFile);

        Axios.post('http://localhost:8888/newRes', form_data)
        .then(function (response) {
            console.log(response.data);
          })

    };

    return (

        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <TextField fullWidth label="Full Name" name="name" onChange={handleChange} />
                <TextField fullWidth label="Email" placeholder="user@kptv8.com" name="email" className={classes.test} onChange={handleChange} />
                <TextField fullWidth label="Title" variant="filled" name="title" onChange={handleChange} />
                <TextField fullWidth label="Primary Tel." variant="filled" name="pri_contact_no" onChange={handleChange} />
                <TextField label="Secondary Tel." variant="outlined" fullWidth name="sec_contact_no" onChange={handleChange} />
                <TextField label="Contract Type (options)" variant="outlined" fullWidth name="contract_type" onChange={handleChange} />
                <TextField label="Country" variant="outlined" fullWidth name="country" onChange={handleChange} />
                <TextField label="Region" variant="outlined" fullWidth name="region" onChange={handleChange} />
                <TextField label="Comments" variant="outlined" fullWidth name="comments" onChange={handleChange} />
                <TextField label="Management Co." variant="outlined" fullWidth name="management_co" onChange={handleChange} />
                <TextField label="Contract Type" variant="outlined" fullWidth name="co_type" onChange={handleChange} />
                <input name="file" type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                <div style={{ paddingTop: "2rem" }}>
                    <Button variant="contained" color="secondary" type="submit">Submit</Button>
                    <Button type="button">Reset</Button>
                </div>
            </Grid>
        </form>

    );
}