
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Blog from '../blogs/Blog';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Products from '../products/Products';


function PageHome() {
  return (
    <>
      <Box>
        <Container maxWidth='lg'>
          <Header />
        </Container>
        <Slider />
        <Container maxWidth='lg'  >
          <Products />
        </Container>
        <Container maxWidth='lg'>
          <Box marginTop={5}>
            <Blog />
          </Box>
        </Container>
        <Footer />

      </Box>

    </>
  );
}

function Slider() {
  const images = [

    {

      imgPath:
        'slide_2.webp',
    },
    {

      imgPath:
        'slide_1.webp',
    },

  ];


  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (

    <Box sx={{ width: "500", flexGrow: 1 }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box marginLeft={0.5} width={1685}
                component="img"
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"

            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}

          </Button>
        }
      />
    </Box>

  );
}

export default PageHome;
