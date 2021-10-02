import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// added for linking the pages
import { Link, Router } from "react-router-dom";


const tutorialSteps = [
  {
    // heading of 'restaurants near you' added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    // heading of 'restaurants near you' added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://assets.cntraveller.in/photos/60ba0b72ee63ec1fe6ee851e/master/pass/cecconis.jpg',
  },
  {
    // heading of 'restaurants near you' added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKHcxzzZIhGaWZmmQD7gjE3l3cqhC4C7lioriem6eYQ0PNQE7CjUL-VUZ8jyntbJfQMw&usqp=CAU',
  },
  {
    // heading of 'restaurants near you' added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/aaheli-feature.jpg',
  },
  {
    // heading of 'restaurants near you' added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://indiarestaurant.com/wp-content/uploads/2019/04/AU_1710010_India__5591_SM-1.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),

  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper2() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>

      {/* connecting the 'restaurants near you' to the restaurant page by adding a link to the back button */} 
      <Link to={process.env.PUBLIC_URL + '/restaurantmain'}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
      </Link>



      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>

        }

      />

    </div>
  );
}