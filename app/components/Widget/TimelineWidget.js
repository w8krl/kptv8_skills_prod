import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { injectIntl, intlShape } from 'react-intl';
import PapperBlock from '../PapperBlock/PapperBlock';
import messages from './messages';
import styles from './widget-jss';


function TimelineWidget(props) {
  const { classes, intl, timelineData, id } = props;

  let totAssign = timelineData.filter(i=> i.id_res === id);

  return ( 
    <PapperBlock whiteBg noMargin title={`${totAssign.length} ${intl.formatMessage(messages.activity_title)}`} icon="av_timer" desc="">
      <div className={classes.activityWrap}>
        <List>
          
          {timelineData.map((item, index) => item.id_res === id && (
            <ListItem key={index.toString()} className={classes.activityList}>
              <ListItemIcon>
                <div className={classes.timeDot}>
                  <time>{item.time}</time>
                  <span />
                </div>
              </ListItemIcon>
              <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
            </ListItem>
          ))}
        </List>
      </div>
    </PapperBlock>
  );
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TimelineWidget));
