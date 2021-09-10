import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import dummy from 'enl-api/dummy/dummyContents';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Axios from 'axios';
import { ProfileWidget } from 'enl-components';


import {
  Cover,
  About,
  Connection,
  Albums
} from 'enl-components';
import styles from 'enl-components/Profile/cover-jss';
import { injectIntl, intlShape } from 'react-intl';
import messages from 'enl-components/Profile/messages';

function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function UserProfile(props) {
  const { intl, classes } = props;
  const title = brand.name + ' - Profile';
  const description = brand.desc;
  const [value, setValue] = useState(0);

  const handleChange = (event, val) => {
    setValue(val);
  };

  //To allow shareable links
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let userId = params.get('user');


  const [loadingData, setLoadingData] = useState(true);
  const [profData, setProfData] = useState([]);
  const [assignData, setAssignData] = useState([]);
  const [compData, setCompData] = useState([]);

  let compTagData;
  

  useEffect(() => {
    async function getData() {
      await Axios
        .post("api/userProfile", { id: userId })
        .then((response) => {
          setProfData(response.data.profile);
          setAssignData(response.data.assignments);
          setCompData(response.data.comp_tag_data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const defaultAvatar = "/images/avatars/pp_boy4.jpg";


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
      <Cover
        coverImg={profData.prof_background || defaultAvatar}
        avatar={profData.avatar || defaultAvatar}
        name={profData.name}
        desc={profData.role}
        active={profData.active_status}
      />
      <AppBar position="static" className={classes.profileTab}>
        <Hidden mdUp>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} />
            <Tab icon={<SupervisorAccount />} />
            <Tab icon={<Favorite />} />
            <Tab icon={<PhotoLibrary />} />
          </Tabs>
        </Hidden>
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} label={intl.formatMessage(messages.about)} />
            {/* <Tab icon={<SupervisorAccount />} label={'20 ' + intl.formatMessage(messages.connections)} />
            <Tab icon={<PhotoLibrary />} label={'4 ' + intl.formatMessage(messages.albums)} /> */}
          </Tabs>
        </Hidden>
      </AppBar>
      {value === 0 && <TabContainer><About skills={compData} profData={profData} assignments={assignData} /></TabContainer>}
      {/* {value === 1 && <TabContainer><Connection /></TabContainer>}
      {value === 2 && <TabContainer><Albums /></TabContainer>} */}
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(UserProfile));
