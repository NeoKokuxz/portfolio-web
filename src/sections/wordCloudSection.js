import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ReactWordcloud from 'react-wordcloud';

const WordCloudSection = (props) => {

    const { classes } = props

    const callbacks = {
        getWordColor: word => word.value > 30 ? "#6C63FF" : "#000000",
        onWordClick: console.log(),
        onWordMouseOver: console.log(),
        // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
        getWordTooltip: word => ``,

    }
    const options = {
        rotations: 0,
        fontFamily: 'Sora',
        fontSizes: [40, 120],
        deterministic: false,
        // colors
    };
    // const size = [900, 1180];

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
                <div className={classes.projectTitle}>
                    <p className={classes.titleText}>Skill Cloud</p>
                </div>
                {/* Project Section Display Wall */}
                <div className={classes.wordCloudArea}>
                    <ReactWordcloud 
                        callbacks={callbacks}
                        options={options}
                        words={words}/>
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
    projectContainer: {
        width: '100%',
        maxWidth: '1180px',
    },
    projectTitle: {
        display: 'flex',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: '100px',
        lineHeight: '100%',
        margin: '0px',
        fontFamily: 'sora'
    },
    wordCloudArea: {
        marginTop: '90px'
    }
})

WordCloudSection.prototype = {
    classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(WordCloudSection))