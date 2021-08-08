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
import FileInput from '../FileInput';

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
  fieldInline: {
    width: '45%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: '5%'
  }
});

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


class NewResFrm extends Component {

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
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Field
                      required
                      name="title"
                      component={SelectRedux}
                      placeholder="title"
                      autoWidth={trueBool}
                    >
                      <MenuItem value="Mr">Mr.</MenuItem>
                      <MenuItem value="Ms">Ms.</MenuItem>
                      <MenuItem value="Mrs">Mrs.</MenuItem>
                      <MenuItem value="Dr">Dr.</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>


                    </Field>
                  </FormControl>
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
                    className={classes.fieldInline}
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
                  <FormLabel component="label">Type</FormLabel>
                  <Field name="contract_type" className={classes.inlineWrap} component={renderRadioGroup}>
                    <FormControlLabel value="Permanent" control={<Radio />} label="Permanent staff" />
                    <FormControlLabel value="Con" control={<Radio />} label="Contractor" />
                  </Field>
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="selection">Country</InputLabel>
                    <Field
                      required
                      name="country"
                      component={SelectRedux}
                      placeholder="Country"
                      autoWidth={trueBool}
                    >
                      <MenuItem value="UK">UK</MenuItem>
                      <MenuItem value="Austria">Austria</MenuItem>
                      <MenuItem value="Belgium">Belgium</MenuItem>
                      <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                      <MenuItem value="Croatia">Croatia</MenuItem>
                      <MenuItem value="Cyprus">Cyprus</MenuItem>
                      <MenuItem value="Czechia">Czechia</MenuItem>
                      <MenuItem value="Denmark">Denmark</MenuItem>
                      <MenuItem value="Estonia">Estonia</MenuItem>
                      <MenuItem value="Finland">Finland</MenuItem>
                      <MenuItem value="France">France</MenuItem>
                      <MenuItem value="Germany">Germany</MenuItem>
                      <MenuItem value="Greece">Greece</MenuItem>
                      <MenuItem value="Hungary">Hungary</MenuItem>
                      <MenuItem value="Ireland">Ireland</MenuItem>
                      <MenuItem value="Italy">Italy</MenuItem>
                      <MenuItem value="Latvia">Latvia</MenuItem>
                      <MenuItem value="Lithuania">Lithuania</MenuItem>
                      <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                      <MenuItem value="Malta">Malta</MenuItem>
                      <MenuItem value="Netherlands">Netherlands</MenuItem>
                      <MenuItem value="Poland">Poland</MenuItem>
                      <MenuItem value="Portugal">Portugal</MenuItem>
                      <MenuItem value="Romania">Romania</MenuItem>
                      <MenuItem value="Slovakia">Slovakia</MenuItem>
                      <MenuItem value="Slovenia">Slovenia</MenuItem>
                      <MenuItem value="Spain">Spain</MenuItem>
                      <MenuItem value="Sweden">Sweden</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div>
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
                    <FormControlLabel value="Limited" control={<Radio />} label="Limited Company" />
                    <FormControlLabel selected value="Umbrella" control={<Radio />} label="Umbrella" />
                    <FormControlLabel value="LLP" control={<Radio />} label="Limited Liability Partnership" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </Field>
                </div>
                <div>
                  <div>
                    <Field
                      type="file"
                      name="filexxx"
                      id="raised-button-file"
                      component={FileInput}
                    />
                    <label htmlFor="raised-button-file">
                      <Button variant="contained" color="primary" component="span">
                        Upload CV
                      </Button>
                    </label>
                  </div>
                </div>
                <div style={{paddingTop: "2rem"}}>
                  <Button fullWidth variant="contained" color="secondary" type="submit" disabled={submitting}>
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
