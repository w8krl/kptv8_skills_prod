import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'enl-components';
import ReduxFormDemo from './ReduxFormDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class ReduxForm extends React.Component {
  state = {
    valueForm: []
  }

  showResult(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      window.alert(`You submitted:\n\n${this.state.valueForm}`); // eslint-disable-line
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Redux Form" icon="library_books" desc="Add new resource.">
          <div>
            <ReduxFormDemo onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(ReduxForm);
