import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <h1>Thank You For Submission</h1>
                    <p>You will get an email with further instructions</p>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
