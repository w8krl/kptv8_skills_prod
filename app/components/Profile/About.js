import React, { useState, useEffect  } from 'react';
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
import StarsIcon from '@material-ui/icons/Stars';
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
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1),
    margin: 2,
  },
  chip: {
    margin: theme.spacing(0.7),
    padding: "1rem",
    color: "#00bcd4"

  },
}));





function About(props) {
  const custClasses = useStyles();
  const { classes, intl, assignments, profData } = props;
  const [skillsData, setSkillsData] = useState([]);
  const [count, setCount] = useState(0);

  const [flag, setFlag] = useState(false);
 
  let notiOptions = {
    position: toast.POSITION.BOTTOM_RIGHT
    // delay: 1000
  }

  useEffect(() => {
    if (count === 0 ){
      setSkillsData(props.skills);
    }
  });

  const handleDeleteSkill = (id) => {

    Axios.post('api/deleteSkill', { id: id })
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.text, notiOptions);
          setCount(preCount => count + 1);
          setSkillsData(skillsData.filter(item=>item.id!==id))
        } else {
          toast.error(response.data.text, notiOptions)
        }

      })
      .catch(e => { console.log(e) })

  };

  const createChips = () => {
    let chips = skillsData.map((i) => (
      <Chip key={i.id}
        icon={<StarsIcon />}
        label={i.tag}
        onDelete={(e) => handleDeleteSkill(i.id)}
        className={custClasses.chip}
        color="default"
      />
    ))

    return chips;

  }



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
        <TimelineWidget id={profData.id} timelineData={assignments} />
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
        
        <Paper >
          <div className={custClasses.root}>
            {createChips()}
          </div>
        </Paper>

        {/* ----------------------------------------------------------------------*/}
        <br />
        {/* My Connection Me */}
        <PapperBlock title="Related People" icon="supervisor_account" whiteBg desc="">
          <List dense className={classes.profileList}>
          {assignments.map((item, index) => item.id_res !== profData.id && (
              <ListItem key={index} button component="a" href={`user-settings?user=${item.id_res}`}>
                <ListItemAvatar>
                  <Avatar src={item.avatar || "/images/avatars/pp_boy4.jpg"} className={classNames(classes.avatar, classes.greenAvatar)}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.role} />
              </ListItem>))
            }
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
      <ToastContainer />
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(About));
