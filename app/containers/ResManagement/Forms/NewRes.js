import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
            minHeignt: 600
            // display: "block"
        },

    },
    tabs: {
        flexGrow: 1,
        // width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    submit: { marginTop: "5rem" }
}));


const formData = {
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

    const handleChange = (e) => {

        console.log(formData);
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        console.log(formData);
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

    return (

        <div className={classes.root}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <AppBar position="static" color="default">
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Personal Details" />
                    <Tab label="Company Details" />
                    <Tab label="Upload CV"/>
                    <Tab label="Submit"/>
                </Tabs>
            </AppBar>

            
            {selectedTab === 0 && <div>
                <TextField label="Full Name" name="name" onChange={handleChange} />
                <TextField label="Email" placeholder="user@kptv8.com" name="email" onChange={handleChange} />
                <TextField label="Title" variant="outlined" name="title" onChange={handleChange} />
                <TextField label="Primary Tel." variant="outlined" name="pri_contact_no" onChange={handleChange} />
                <TextField label="Secondary Tel." variant="outlined" name="sec_contact_no" onChange={handleChange} />
                <TextField label="Contract Type (options)" variant="outlined" name="contract_type" onChange={handleChange} />
                <TextField label="Country" variant="outlined" name="country" onChange={handleChange} />
                <TextField label="Region" variant="outlined" name="region" onChange={handleChange} />
                <TextField label="Comments" variant="outlined" name="comments" onChange={handleChange} />
                <TextField label="Management Co." variant="outlined" name="management_co" onChange={handleChange} />
                <input name="file" type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                </div>
}
             </form>
        </div>




    );
}




