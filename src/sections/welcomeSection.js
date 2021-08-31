import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import welcomeImg from '../images/welcome.svg'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const WelcomeSection = ( props ) => {

    const { classes } = props

    return (
        <div className={classes.container}>
            <div className={classes.wrapContainer}>
                <div className={classes.welcomeContainer}>
                    <div className={classes.textContainer}>
                        <div className={classes.firstLineContainer}>
                            <div className={classes.stackedTextContainer}>
                                <span className={classes.smallText}>Full Stack</span>
                                <span className={classes.smallText}>React</span>
                                <span className={classes.smallText}>Developer</span>
                            </div>
                            <span className={classes.text}>Hi</span><br />

                        </div>
                        <span className={classes.text}>I'm</span><br />
                        <span className={classes.text}>Neo</span>
                    </div>
                    <div className={classes.videoContainer}>
                        <img src={welcomeImg} className={classes.img} />
                    </div>
                </div>
                <div className={classes.introductionContainer}>
                    <span className={classes.introText}>
                        Programming is the act of instructing computers to carry out tasks. Computers are powerful and stupid. They are powerful to look through masses of a data and process billions of operations per second. Stupid because each operation is simple and mechanical, nothing like "insight" or "thinking"
                    </span>

                    <div className={classes.clickMore}>
                        <span className={classes.readMoreText}>Read more about me below </span>
                        <ArrowDownwardIcon className={classes.downIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '90px',
    },
    welcomeContainer: {
        maxWidth: '1180px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    firstLineContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    stackedTextContainer: {
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flexGrow: '1',
    },
    smallText: {
        fontFamily: 'sora',
        fontSize: '30px',
        textAlign:'left',
        fontWeight:'500',
    },
    text: {
        fontFamily: 'sora',
        fontSize: '210px',
        lineHeight: '80%',
        fontWeight: '700',
        margin: 0,
    },
    textContainer: {
        textAlign: 'left'
    },
    videoContainer: {
        marginLeft: '50px',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    wrapContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    introductionContainer: {
        maxWidth: '720px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '90px',
        marginLeft: '15px'
    },
    introText: {
        fontFamily: 'sora',
        fontSize: '24px',
        textAlign: 'left',
        fontWeight: '300',
    },
    clickMore: {
        marginTop: '90px',
        fontFamily: 'sora',
        fontSize: '24px',
        textAlign: 'left',
        fontWeight: '600',
        cursor: 'pointer',
        "&:hover": {
            color: 'blue'
        }
    },
    readMoreText: {
        "&:hover": {
            color: 'blue'
        }
    },
    downIcon: {
        verticalAlign: 'middle',
    },
})

WelcomeSection.prototype = {
    classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(WelcomeSection))