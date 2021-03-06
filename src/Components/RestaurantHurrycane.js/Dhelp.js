import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// component added for adding grids
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
// icoon imported for location
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// icoon imported for number
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
// icoon imported for timing
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    // color modified as required 
    background: '#F6F2EB',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },



}));

export default function RecipeReviewCard6() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>



      {/* grid added to components */}
      <Grid container spacing={4} direction="row">





        <Grid item xs={12} md={12}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            Incase of any enquiry about the restaurant or to know more information call on any one of
            the numbers below. Following are toll free numbers, it won't cost you a penny!
          </Typography>
        </Grid>


        <Grid item xs={3} md={3}>
          {/* phone icon added and styled*/}
          <PhoneOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF', }}>
          </PhoneOutlinedIcon>
        </Grid>

        <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            1800 - 456 -789
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          {/* phone icon added and styled */}
          <PhoneOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF', }}>
          </PhoneOutlinedIcon>

        </Grid>

        <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            1800 - 123 -789
          </Typography>
        </Grid>


        <Grid item xs={3} md={3}>
          {/* phone icon added and styled */}
          <PhoneOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF', }}>
          </PhoneOutlinedIcon>

        </Grid>

        <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            1800 - 765 - 234
          </Typography>
        </Grid>


        <Grid item xs={12} md={12}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            To contact our customer care visit: www.abcxxyz.com
          </Typography>
        </Grid>

      </Grid>

    </Card>
  );
}
