import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CounterWidget , SalesChartWidget ,PapperBlock} from 'enl-components';
import styles from 'enl-components/Widget/widget-jss';
import axios from 'axios';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import StyleIcon from '@material-ui/icons/Style';
import WarningIcon from '@material-ui/icons/Warning';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import Divider from '@material-ui/core/Divider';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
  PieChart, Pie, Cell,Legend
} from 'recharts';


function Dashboard(props) {

  
  const [resStatus, setResStatus] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projRes, setProjRes] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [assignStatus, setAssignStatus] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .post("api/dashData")
        .then((response) => {
          setAssignStatus(response.data.actAssignments);
          setResStatus(response.data.actRes);
          setProjRes(response.data.projRes);
          setProjects(response.data.projects);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  //Colors for pie
  const colors = { active: green[300], inactive: orange[300], other: red[300] };

  const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

  const data2 = [
    {
      name: 'Electronics',
      value: 400
    }, {
      name: 'Fashions',
      value: 300
    },
    {
      name: 'Toys',
      value: 300
    }, {
      name: 'Other',
      value: 200
    }
  ];
  


  const getValue = (obj, flag) => {
    let value;
    obj.filter(i => i.name === flag)
    .map(
      i => { value = i.value}
    )
    return value;
  }


  const { classes } = props;
  return (
    <div className={classes.rootCounterFull}>
      <PapperBlock whiteBg noMargin title="Resource Data" >
      <Grid container spacing={2}>
        
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              color="primary-main"
              start={0}
              end={getValue(resStatus, 'active')}
              duration={1}
              title="Active Resources"
            >
              
              <PieChart width={100} height={100}>
                <Pie
                  data={resStatus}
                  cx={50}
                  cy={50}
                  dataKey="value"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#FFFFFF"
                  paddingAngle={5}
                >
                  {
                    resStatus.map((entry, index) => <Cell key={index.toString()} fill={colors[entry.name]} />)
                  }
                </Pie>
              </PieChart>
            </CounterWidget>
          }
        </Grid>
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              color="primary-main"
              className={classes.completed}
              start={0}
              end={getValue(assignStatus, 'active')}
              duration={1}
              title="Active Resource Assignments"
            >
              <SupervisorAccount className={classes.counterIcon} />
            </CounterWidget>}
        </Grid>
        <Grid item xs={6} md={3}>
        <CounterWidget
            // color="primary-dark"
            start={0}
            end={getValue(assignStatus, 'completed')}
            duration={3}
            title="Completed Resource Assignments"
          >
            <CheckCircleIcon style={{color:'#00b700'}} className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              // color="secondary-dark"
              start={0}
              end={getValue(assignStatus, 'ending_30')}
              duration={3}
              title="Assignments ending (30 days)"
            >
              {getValue(assignStatus, 'ending_30') > 0  ?  <AccessAlarmsIcon style={{color:"orange"}} className={classes.counterIcon} /> : 
               <TimerOffIcon style={{color:"#00b700"}} className={classes.counterIcon} />
              }
            </CounterWidget>
          }
        </Grid>
        {/* //Row two */}
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              // color="secondary-dark"
              start={0}
              end={getValue(assignStatus, 'project_active')}
              duration={3}
              title="Projects in Flight"
            >
              {getValue(assignStatus, 'ending_30') > 0  ?  <AccessAlarmsIcon style={{color:"orange"}} className={classes.counterIcon} /> : 
               <FlightTakeoffIcon style={{color:"#00b700"}} className={classes.counterIcon} />
              }
            </CounterWidget>
          }
        </Grid>  
        <Grid item xs={6} md={3}>
        <CounterWidget
            // color="primary-dark"
            start={0}
            end={getValue(assignStatus, 'project_completed')}
            duration={3}
            title="Projects Completed"
          >
            <FlightLandIcon className={classes.counterIcon} />
          </CounterWidget>
        </Grid>        
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              color="primary-main"
              start={0}
              end={getValue(assignStatus, 'tot_reg_skills')}
              duration={1}
              title={`Skills Registered (${getValue(assignStatus, 'perc_act_user_w_reg_skills')}%)`}
            >
              <StyleIcon className={classes.counterIcon} />
            </CounterWidget>
          }
        </Grid>
        <Grid item xs={6} md={3}>
          {loadingData === false &&
            <CounterWidget
              color="primary-main"
              className={classes.completed}
              start={0}
              end={getValue(assignStatus, 'active')}
              duration={1}
              title="Skills Expiring NOT_LIVE"
            >
              <WarningIcon className={classes.counterIcon} />
            </CounterWidget>}
        </Grid>
           
      </Grid>

      <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={2}
        >
          <Grid item md={3} xs={3}>
            <Typography variant="button" className={classes.divider}>Projects</Typography>
            <div className={classes.root}>
            

            {loadingData === false && projects.map((item, index) => (
              <ListItem key={index} button component="a" href={`user-settings?user=${item.id_project}`}>
                <ListItemAvatar>
                  <Avatar src={item.project_avatar || "/images/avatars/pp_boy4.jpg"} ></Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.project_name} secondary={item.project_summary} />
              </ListItem>))
            }


            </div>
          
          </Grid>          
          <Grid item md={3} xs={3}>
            <Typography variant="button" className={classes.divider}>Resource Project Allocation</Typography>
            <div className={classes.root}>
            <PieChart width={300} height={300}>
              <Pie
                data={projRes}
                cx={150}
                cy={100}
                dataKey="value"
                innerRadius={40}
                outerRadius={80}
                fill="#FFFFFF"
                paddingAngle={5}
                label
              >
                {
                  projRes.map((entry, index) => <Cell key={index.toString()} fill={colorsPie[index % colorsPie.length]} />)
                }
              </Pie>
              <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
            </PieChart>
            </div>
          </Grid>
        </Grid>
        
      </PapperBlock>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);