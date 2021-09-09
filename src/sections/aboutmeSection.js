import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import aboutImg from '../images/about.svg'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const AboutMeSection = (props) => {

    const { classes } = props

    return (
        <div className={classes.container} id="aboutme">
            <div className={classes.aboutContainer}>
                <div className={classes.aboutMeImgArea}>
                    <div>
                        <img src={aboutImg} className={classes.aboutMeImg} />
                    </div>
                    <div className={classes.aboutMeIntroArea}>
                        <p className={classes.aboutIntroText}>Yes, You are right! The name Neo is inspired by the movie 'The Matrix'. </p>
                    </div>
                </div>
                <div className={classes.aboutMeTitle}>
                    <div className={classes.aboutMeTextArea}>
                        <p className={classes.aboutText}>More</p>
                        <p className={classes.aboutText}>About</p>
                        <p className={classes.aboutText}>Me</p>
                    </div>
                    <div className={classes.aboutMeSmallTextArea}>
                        <p className={classes.aboutSmallText}>Yes, You are right! The name Neo is inspired by the movie 'The Matrix'.Yes! You are right! The name Neo is inspired by the movie 'The Matrix'.
                        Yes! You are right! The name Neo is inspired by the movie 'The Matrix'. 
                        es! You are right! The name Neo is inspired by the movie 'The Matrix'. 
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

const breakpoints = createBreakpoints({})

const styles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '90px',
    },
    aboutContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: '1180px',
        justifyContent: 'flex-start',
        [breakpoints.down('sm')]: { flexDirection: 'column', alignItems: 'center' }
    },
    aboutMeTitle: {
        marginTop: '90px',
        marginLeft: '50px',
        textAlign: 'center',
        [breakpoints.down('sm')]: {
            order: 1,
            margin: '0px',
            marginTop: '90px'
        }
    },
    aboutText : {
        fontSize: '100px',
        lineHeight: '100%',
        margin: '0px',
        fontFamily: 'sora',
    },
    aboutMeTextArea: {

    },
    aboutMeIntroArea: {
        width: '100%',
        wordWrap: 'break-word',
        marginTop: '90px'
    },
    aboutIntroText: {
        fontFamily: 'sora',
        fontSize: '24px',
        fontWeight: '500',
    },
    aboutMeImgArea: {
        marginTop: '90px',
        maxWidth: '540px',
        [breakpoints.down('sm')]: {
            order: 2,
            margin: '10px',
        }
    },
    aboutMeImg: {
        width: '100%',
        height: '100%',
    },
    aboutMeSmallTextArea: {
        width: '100%',
        maxWidth: '640px',
        marginTop: '90px',
    },
    aboutSmallText: {
        fontFamily: 'sora',
        fontSize: '24px',
        textAlign: 'left',
        fontWeight: '300',
        lineHeight: '1.6',
        [breakpoints.down('sm')]: {
            marginLeft: '15px',
            marginRight: '10px'
        }
    }
})

AboutMeSection.prototype = {
    classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(AboutMeSection))