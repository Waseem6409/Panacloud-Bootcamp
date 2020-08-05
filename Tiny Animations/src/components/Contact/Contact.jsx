import React,{useEffect} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import webAnimationApi from '@wellyshen/use-web-animations';
import { Container, Grid } from '@material-ui/core';
import classes from './Contact.module.css';
import EmailIcon from '@material-ui/icons/Email';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    const animation = webAnimationApi({
        keyframes: {
            transform: "translateY(30px)",
        },
        timing: {
            duration: 2500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out",
        }
    });
    


    return (
        <div className={classes.container}>
            <Container>
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12}>
                        <ScrollAnimation animateIn="fadeUp">
                            <h1>Send us a message and we will start working on your project</h1>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.content}>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <EmailIcon className={classes.icon} ref={animation.ref} />
                        </div>
                        
                        <p>abc@xyz.com</p>
                    </Grid>


                </Grid>

            </Container>
        </div>
    );
}

export default Contact;
