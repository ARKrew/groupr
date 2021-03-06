
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";
 


class TotpSetup extends Component {
  constructor(props) {
		super(props);
    this.state = {
      test: null,
    };
  }

  componentDidMount() {
    this.props.fetchTotp();
  }

  render() {
    const totp = this.props.totp.totp ? this.props.totp.totp.qrImage : "null";
    console.log("This.props.totp", totp.totp);

    return (
      // to center text on screen using jsx add an object to style
      // 1st bracket indicates we're passing in js, the 2nd bracket
      // is the actual object we're passing in
      <div style={{ textAlign: "center" }}>
        <h1>Setup</h1>
        <h4>Scan QR code with Google Authenticator.</h4>
        <img src={totp} alt="QR code" />
        <h4>Or enter the code below.</h4>

        <button>
          <a href="/">Click here to exit.</a>
        </button>
      </div>
    );
  }
}

const mapStateToProps =  totp  => ({
  totp
});

export default connect(mapStateToProps, actions)(TotpSetup);
