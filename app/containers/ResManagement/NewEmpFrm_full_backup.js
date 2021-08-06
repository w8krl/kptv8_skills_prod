import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CountrySelect from './AutoCountries'

import {
  TextFieldRedux,
  SelectRedux,
  CheckboxRedux,
  SwitchRedux
} from 'enl-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'enl-redux/actions/reduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />

);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  fieldInline:{
    width: '45%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: '5%'
  }
});

const initData = {
  name: 'Sample Text',
  email: 'sample@mail.com',
  title: 'option1',
  pri_contact_no: 'option2',
  sec_contact_no: 'option2',
  contract_type: 'asdasd',
  country: 'Netherlands',
  region: 'asdasd',
  comments: 'asdasd',
  management_co: 'asdasd',
  co_type: 'asdasd'
};


class NewResFrm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const trueBool = true;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      init,
      clear
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" >
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Resource Details
              </Typography>
              <div className={classes.buttonInit}>
                <Button onClick={() => init(initData)} color="secondary" type="button">
                  Load Sample Data
                </Button>
                <Button onClick={() => clear()} type="button">
                  Clear Data
                </Button>
              </div>              
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="name"
                    component={TextFieldRedux}
                    placeholder="Name"
                    label="Name"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder="Email address"
                    label="Email address"
                    validate={[required, email]}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="title"
                    component={TextFieldRedux}
                    placeholder="Career Title"
                    label="Career Title"
                    validate={[required]}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div className={classes.inlineWrap}>
                  <Field
                    name="pri_contact_no"
                    component={TextFieldRedux}
                    placeholder="+447456..."
                    label="Primary Contact"
                    validate={[required]}
                    required
                    ref={this.saveRef}
                    className={ classes.fieldInline}
                  />
                  <Field
                    name="sec_contact_no"
                    component={TextFieldRedux}
                    placeholder="+447456..."
                    label="Secondary Contact"
                    ref={this.saveRef}
                    className={classes.fieldInline}
                  />
                </div>              
                <div className={classes.fieldBasic}>
                  <FormLabel component="label">Contractor</FormLabel>
                  <Field name="contract_type" className={classes.inlineWrap} component={renderRadioGroup}>
                    <FormControlLabel selected value="1" control={<Radio />} label="Yes" />
                    <FormControlLabel value="0" control={<Radio />} label="No" />
                  </Field>
                </div>
                <div>
                <CountrySelect
                  name="country"
                  className={classes.field}
                  component={TextFieldRedux}
                  ref={this.saveRef}
                  validate={[required]}
                  placeholder="Test country..."
                />
                <Field
                    name="region"
                    component={TextFieldRedux}
                    placeholder="City or County"
                    label="Region"
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>     
              
                <div className={classes.field}>
                  <Field
                    name="comments"
                    className={classes.field}
                    component={TextFieldRedux}
                    placeholder="Use this space for additional comments"
                    label="Comments"
                    multiline={trueBool}
                    rows={4}
                  />
                </div>
                
                <div>
                  <Field
                      name="management_co"
                      component={TextFieldRedux}
                      placeholder="Management or umbrella company name"
                      label="Invoicing Company"
                      validate={[required]}
                      required
                      ref={this.saveRef}
                      className={classes.field}
                    />
                </div>
                <div className={classes.fieldBasic}>
                  <FormLabel component="label">Company Type</FormLabel>
                  <Field name="co_type" className={classes.inlineWrap} component={renderRadioGroup}>
                    <FormControlLabel selected value="umb" control={<Radio />} label="Umbrella" />
                    <FormControlLabel value="ltd" control={<Radio />} label="Limited Company" />
                    <FormControlLabel value="llp" control={<Radio />} label="Limited Liability Partnership" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </Field>
                </div>
                
                <div>
                  <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

NewResFrm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

console.log(NewResFrm.propTypes);

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(NewResFrm);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
