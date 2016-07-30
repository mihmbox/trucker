import React from 'react';

export default class MaterializeExample  extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                <nav>
                    <div className="nav-wrapper">
                      <a href="#" className="brand-logo right">Logo</a>
                      <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                      </ul>
                    </div>
                  </nav>
              </div>
        );
    }
}
