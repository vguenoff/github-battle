import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import NotFound from './NotFound';

export default class App extends Component {
    render() {
        return (
            <Router>
                <StyledApp>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/popular" component={Popular} />
                        <Route component={NotFound} />
                        {/* <Route render={() => <p>Not found!</p>} /> */}
                    </Switch>
                </StyledApp>
            </Router>
        );
    }
}

const StyledApp = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
