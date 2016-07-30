import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import ProjectsList from './components/projects-list.jsx'; // Our custom react component
import TopNav from './components/TopNav.jsx'; // Our custom react component
import BootExample from './components/bootstrap.jsx';
import Materialize from './components/materialize.jsx';

// materialize
render(<Materialize />, document.getElementById('materialize'));



///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage()
{
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();

    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        getUserName();
    });

    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        $('#message').text('Hello ' + user.get_title());
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}
