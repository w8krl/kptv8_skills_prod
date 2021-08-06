import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { AddResource } from './Forms';
import Axios from 'axios';


const styles = ({
  root: {
    flexGrow: 1,
  }
});

function ReduxForm(props) {
  const [valueForm, setValueForm] = useState();
  
  const showResult = (values) => {
    setTimeout(() => {
      setValueForm(values);
    }, 500); // simulate server latency
  };

  const handleSubmit = (values) =>{
    Axios.post('http://localhost:8888/create', values).then(() => {
      console.log("Success");
      setValueForm(values);
    });
    
  };

  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/ResManagement/Forms/';
  const { intl, classes } = props;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock
        title={intl.formatMessage(messages.formTitle)}
        icon="library_books"
        desc={intl.formatMessage(messages.formDesc)}
      >
        <div>
          <AddResource onSubmit={(values) => handleSubmit(values)} />
          {valueForm && (
            <p>
              You submitted:
              <br />
              { JSON.stringify(valueForm) }
            </p>
          )}
          {/* <SourceReader componentName={docSrc + 'AddResource.js'} /> */}
        </div>
      </PapperBlock>
    </div>
  );
}

ReduxForm.propTypes = {
  intl: intlShape.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(ReduxForm));
