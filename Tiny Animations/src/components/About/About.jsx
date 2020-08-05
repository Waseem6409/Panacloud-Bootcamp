import React,{useEffect} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Container, Grid } from '@material-ui/core';
import classes from './About.module.css';
import about from '.././img/profile.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={5} className={classes.containerBorder}>


          <Grid data-aos-easing="ease-in-out" data-aos="fade-up" item xs={12} sm={6}>
            <img src={about} alt="" className={classes.img} />
          </Grid>
          <Grid  data-aos="fade-left" item xs={12} sm={6} className={classes.content}>
            <ScrollAnimation animateIn="fadeIn">
              <h1 variant="contained" className={classes.button}>About Us </h1>
              <p className={classes.contentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in magni mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in magni mollitia</p>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Services;