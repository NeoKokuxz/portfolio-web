import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const ProjectSection = (props) => {

    const { classes } = props

    return (
        <div className={classes.container} id="aboutme">
            <div className={classes.projectContainer}>
                {/* Project Section Title */}
                <div className={classes.projectTitle}>
                    <p className={classes.titleText}>My Works</p>
                </div>
                {/* Project Section Display Wall */}
                <div>

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
    projectTitle: {
        display: 'flex',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: '100px',
        lineHeight: '100%',
        margin: '0px',
        fontFamily: 'sora'
    }
})

ProjectSection.prototype = {
    classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(ProjectSection))