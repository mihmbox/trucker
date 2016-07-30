import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3
        };
    }

    styles = {
        headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400
        },
        button: {
            margin: 0,
            height: '100%'
        },
        separator: {
            marginRight: 20,
            marginLeft: 20
        }
    };

    handleActive = (tab) => alert("A tab with this route property ${tab.props['data-route']} was activated.");

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>

                <Toolbar>

                    <ToolbarGroup firstChild={true}>
                        <FlatButton label="Timesheets---s" style={this.styles.button}/>
                        <FlatButton label="Reports" style={this.styles.button}/>

                    </ToolbarGroup>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="All Broadcasts"/>
                            <MenuItem value={2} primaryText="All Voice"/>
                            <MenuItem value={3} primaryText="All Text"/>
                            <MenuItem value={4} primaryText="Complete Voice"/>
                            <MenuItem value={5} primaryText="Complete Text"/>
                            <MenuItem value={6} primaryText="Active Voice"/>
                            <MenuItem value={7} primaryText="Active Text"/>
                        </DropDownMenu>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Options"/>
                        <FontIcon className="muidocs-icon-custom-sort"/>
                        <ToolbarSeparator/>
                        <RaisedButton label="Create Broadcast" primary={true}/>
                        <FlatButton label="Timesheets" style={this.styles.button}/>
                        <IconMenu iconButtonElement={< IconButton touch = {
                            true
                        } > <NavigationExpandMoreIcon/> < /IconButton>}>
                            <MenuItem primaryText="Download"/>
                            <MenuItem primaryText="More Info"/>
                        </IconMenu>
                    </ToolbarGroup>
                </Toolbar>

                <Tabs>
                    <Tab label="Item One">
                        <div>
                            <h2 style={this.styles.headline}>Tab One</h2>
                            <p>
                                This is an example tab.
                            </p>
                            <p>
                                You can put any sort of HTML or react component in here. It even keeps the component state!
                            </p>
                            <Slider name="slider0" defaultValue={0.5}/>
                        </div>
                    </Tab>
                    <Tab label="Item Two">
                        <div>
                            <h2 style={this.styles.headline}>Tab Two</h2>
                            <p>
                                This is another example tab.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="onActive" data-route="/home" onActive={this.handleActive}>
                        <div>
                            <h2 style={this.styles.headline}>Tab Three</h2>
                            <p>
                                This is a third example tab.
                            </p>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        );
    }
}
