import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';




function ProfileWidget(props) {

  const openMapTab = () => {
    window.open(
      `https://www.google.com/maps/place/${profData.address}`,
      '_blank'
    );
  }

  const blurb = () => {
    
    let activeAssign = assignments.filter(i=> !i.end && i.id_res === profData.id);
    let totAssign = assignments.filter(i=> i.id_res === profData.id);

    let active = (profData.active_status === "active") ? ` Currently active, working on ${activeAssign.length} project (s). Has worked on a total of ${totAssign.length} projects.` : "Not currently active.";
    
    return active;
  }



  const { classes, intl, profData, assignments } = props;
  return (
    <PapperBlock title={intl.formatMessage(messages.about_title) + " " + profData.name} icon="contacts" whiteBg noMargin desc={blurb()}>
      <Divider className={classes.divider} />
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={intl.formatMessage(messages.born)} secondary={profData.dob} />
        </ListItem>
        <ListItem component="a" href={`tel:${profData.pri_contact_no}`}>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={intl.formatMessage(messages.phone)} secondary={profData.pri_contact_no} />
        </ListItem>
        <ListItem component="a" target="_blank" href={`https://www.google.com/maps/place/${profData.address}`} >
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText  primary={intl.formatMessage(messages.address)} secondary={profData.address} />
        </ListItem>
      </List>
    </PapperBlock>
  );
}

ProfileWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(ProfileWidget));
