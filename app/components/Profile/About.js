import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AcUnit from '@material-ui/icons/AcUnit';
import Adb from '@material-ui/icons/Adb';
import AllInclusive from '@material-ui/icons/AllInclusive';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import imgData from 'enl-api/images/imgData';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ProgressWidget from '../Widget/ProgressWidget';
import ProfileWidget from '../Widget/ProfileWidget';
import Quote from '../Quote/Quote';
import TimelineWidget from '../Widget/TimelineWidget';
import MapWidget from '../Widget/MapWidget';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './profile-jss';
import DescriptionIcon from '@material-ui/icons/Description';

function About(props) {
  const { classes, intl, assignments, profData } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      direction="row"
      spacing={3}
    >
      <Grid item md={6} xs={12}>
        {/* About Me */}
        <ProfileWidget assignments={assignments} profData={profData} />
        <Divider className={classes.divider} />
        <TimelineWidget timelineData={assignments} />
        <Divider className={classes.divider} />

        {/* ----------------------------------------------------------------------*/}

        {/* My CV */}
        <PapperBlock title="CV" icon="supervisor_account" whiteBg desc="">
          <List dense className={classes.profileList}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.blueAvatar)}><DescriptionIcon/></Avatar>
              </ListItemAvatar>
              <ListItemText primary={profData.cv_path} secondary={profData.cv_path && `Added ${profData.last_modified}`} />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              <FormattedMessage {...messages.see_all} />
            </Button>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}    
      </Grid>
      <Grid item md={6} xs={12}>
        {/* Profile Progress */}
        <div className={classes.progressRoot}>
          <ProgressWidget />
        </div>
        {/* ----------------------------------------------------------------------*/}

        {/* ----------------------------------------------------------------------*/}

        {/* My Interests */}
        <PapperBlock title={intl.formatMessage(messages.my_interests)} whiteBg desc="">
          <Grid container className={classes.colList}>
            <Grid item lg={12} md={12}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                    <AcUnit />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Snow" secondary="100 Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                    <Adb />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Android" secondary="120 Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                    <AllInclusive />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="All Inclusive" secondary="999+ Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                    <AssistantPhoto />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="My Country" secondary="99+ Connected" />
              </ListItem>
            </Grid>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}

        {/* My Connection Me */}
        <PapperBlock title="Associates" icon="supervisor_account" whiteBg desc="">
          <List dense className={classes.profileList}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Baron Phoenix" secondary="10 Mutual Connection" />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              <FormattedMessage {...messages.see_all} />
            </Button>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}

    
      </Grid>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(About));
