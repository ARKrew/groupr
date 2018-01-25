import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './common/Header';
import Landing from './landing/Landing';
import EventPage from './event/EventPage';
import TotpSetup from './totpSetup/TotpSetup';
import LoginOtp from './loginOtp/LoginOtp';

class Router extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            {/* Temporary link for development */}
            <Route exact path='/event-page' component={EventPage} />
            <Route exact path='/totp-setup' component={ TotpSetup } />
            <Route exact path='/login-otp' component={ LoginOtp } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(Router);
