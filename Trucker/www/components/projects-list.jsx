import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ProjectRow from './project-row.jsx'; // Our custom react component

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ProjectsList extends React.Component {
    render() {
        return (

            <div className="test">
                {/*}<MuiThemeProvider >
</MuiThemeProvider>
                */}
                    <RaisedButton label="primary" primary={true} />

                Hello, world! I am a ProjectsList.
                <ProjectRow/>
                <ProjectRow/>
                <ProjectRow/>
                <ProjectRow/>
                <ProjectRow/>
                <ProjectRow/>
                <ProjectRow/>
                The end
            </div>

        );
    }
}

export default ProjectsList

/*

*/
