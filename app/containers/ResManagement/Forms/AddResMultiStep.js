import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FileUpload from '@material-ui/icons/CloudUpload';

const styles = theme => ({
    demo: {
      height: 'auto',
    },
    divider: {
      display: 'block',
      margin: `${theme.spacing(3)}px 0`,
    },
    field: {
      margin: `${theme.spacing(3)}px 5px`,
    },
    button: {
      margin: theme.spacing(1),
    },
    inputUpload: {
      display: 'none',
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  });
class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            file: '',
            formData: { 
                name: '',
                email: '',
                title: '',
                pri_contact_no: '',
                sec_contact_no: '',
                contract_type: '',
                country: '',
                region: '',
                comments: '',
                management_co: '',
                co_type: '',
                username: '',
            },
            
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState(prevState => ({
            formData: {     
              ...prevState.formData,
              [name]: value
            }
        }))
    }
   
    fileChange = event => {
        const file = event.target.files[0];
        this.setState({['file']:file})
    };

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
    }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }


previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}



nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() { 
    return (
      <React.Fragment>
      <h1>New Resource Wizard</h1>
      <p>Step {this.state.currentStep} </p> 
      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          name={this.state.formData.name}
          email={this.state.formData.email}
          title={this.state.formData.title}
          pri_contact_no={this.state.formData.pri_contact_no}
          sec_contact_no={this.state.formData.sec_contact_no}
          country={this.state.formData.country}
          region={this.state.formData.region}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          comments={this.state.formData.comments}
          contract_type={this.state.formData.contract_type}
          management_co={this.state.formData.management_co}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          fileChange={this.fileChange}
          file={this.state.file}
          classes={this.classes}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
    return (
        <div className="form-group">
            <TextField fullWidth label="Full Name" name="name" value={props.name} onChange={props.handleChange} />
            <TextField fullWidth label="Email" placeholder="user@kptv8.com" name="email" value={props.email} onChange={props.handleChange} />
            <TextField fullWidth label="Title" variant="outlined" name="title" value={props.title} onChange={props.handleChange} />
            <TextField fullWidth label="Primary Tel." variant="outlined" name="pri_contact_no" value={props.pri_contact_no} onChange={props.handleChange} />
            <TextField fullWidth label="Secondary Tel." variant="outlined" name="sec_contact_no" value={props.sec_contact_no} onChange={props.handleChange} />
            <TextField fullWidth label="Country" variant="outlined" name="country" value={props.country} onChange={props.handleChange} />
            <TextField fullWidth label="Region" variant="outlined" name="region" value={props.region} onChange={props.handleChange} />
        </div>
    );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
          <TextField fullWidth label="Contract Type (options)" variant="outlined" name="contract_type" value={props.contract_type} onChange={props.handleChange} />
          <TextField fullWidth label="Management Co." variant="outlined" name="management_co" value={props.management_co} onChange={props.handleChange} />
          <TextField fullWidth label="Comments" variant="outlined" name="comments" value={props.comments} onChange={props.handleChange} />

    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
    return (
        <React.Fragment>
            <div className="form-group">
                
                <Button className={styles.button} onClick={handleClick} variant="contained" color="primary">
                    Upload
                    <FileUpload />
                </Button>
                <input ref={hiddenFileInput} hidden name="file" type="file" onChange={props.fileChange} />
            </div>
            <button color="primary">Submit</button>
        </React.Fragment>
    );
}

export default MasterForm;