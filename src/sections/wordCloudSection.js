import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ReactWordcloud from 'react-wordcloud';
import cloudImg from '../images/cloud.svg';
import "d3-transition";
import { select } from "d3-selection";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const WordCloudSection = (props) => {

    const { classes } = props

    const callbacks = {
        onWordClick: getCallback("onWordClick"),
        onWordMouseOut: getCallback("onWordMouseOut"),
        onWordMouseOver: getCallback("onWordMouseOver"),
    }

    function getCallback(callback) {
        return function (word, event) {
            const isActive = callback !== "onWordMouseOut";
            const element = event.target;
            const text = select(element);
            const newSize = word.size * 1.2
            text.transition()
                .attr("background", "white")
                .attr("font-size", isActive ? `${newSize}px` : `${word.size}px`)
                .attr("text-decoration", isActive ? "underline" : "none");
        };
    }

    const options = {
        rotations: 0,
        fontFamily: 'Sora',
        fontSizes: [40, 100],
        deterministic: false,
        colors: ['#6C63FF', '#4287f5', '#8aa9db', '#9b5bf5'],
        // transitionDuration: 1000,
        enableTooltip: false,
    };
    // const size = [300, 1380];

    const words = [
        {
            text: 'Java',
            value: 65,
        },
        {
            text: 'React',
            value: 60,
        },
        {
            text: 'Node',
            value: 55,
        },
        {
            text: 'Express',
            value: 54,
        },
        {
            text: 'Python',
            value: 53,
        },
        {
            text: 'JavaScript',
            value: 52,
        },
        {
            text: 'Swift',
            value: 23,
        },
        {
            text: 'HTML',
            value: 26,
        },
        {
            text: 'CSS',
            value: 37,
        },
        {
            text: 'MaterialUI',
            value: 29,
        },
        {
            text: 'Storybook',
            value: 50,
        },
        {
            text: 'Django',
            value: 32,
        },
        {
            text: 'AWS',
            value: 40,
        },
        {
            text: 'SQL',
            value: 23,
        },
        {
            text: 'GraphQL',
            value: 23,
        }, 
        {
            text: 'MongoDB',
            value: 23,
        }, 
        {
            text: 'Database',
            value: 23,
        }, 
        {
            text: 'Spring Boot',
            value: 23,
        }, 
        {
            text: 'VSCode',
            value: 21,
        },
        {
            text: 'Amplitude',
            value: 29,
        },
        {
            text: 'Amplify',
            value: 26,
        },
    ]

    return (
        <div className={classes.container} id="aboutme">
            <div className={classes.projectContainer}>
                {/* Project Section Title */}
                <div className={classes.projectTitleArea}>
                    <div className={classes.projectImgContainer}>
                        <img src={cloudImg} className={classes.titleImg} />
                    </div>
                    <p className={classes.titleText}>Skill Cloud</p>
                </div>
                {/* Project Section Display Wall */}
                <div className={classes.wordCloudArea}>
                    <ReactWordcloud 
                        callbacks={callbacks}
                        options={options}
                        words={words}
                        />
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
    projectContainer: {
        width: '100%',
        maxWidth: '1180px',
    },
    projectTitleArea: {
        display: 'flex',
        flexDirection: 'column',
        [breakpoints.down('sm')]: {
            marginRight: '15px'
        }
    },
    titleText: {
        fontSize: '100px',
        lineHeight: '100%',
        margin: '0px',
        fontFamily: 'sora',
        [breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    projectImgContainer: {
        maxWidth: '1180px',
        height: '440px',
    },
    titleImg: {
        height: '100%',
        width: '100%'
    },
    wordCloudArea: {
        marginTop: '90px',
    }
})

WordCloudSection.prototype = {
    classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(WordCloudSection))