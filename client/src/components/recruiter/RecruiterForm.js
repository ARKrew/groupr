import React, { Component } from "react";
import { Form, Button, Segment, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import {
  required,
  email,
  maxLength25,
  minLength2,
  renderField
} from "../utils/formValidations.js";
import FormField from "../../constants/recruiterFields";
import Payments from "./Payments";

class RecruiterForm extends Component {
  constructor(props) {
    super(props);

    this.onRecruiterSubmit = this.onRecruiterSubmit.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.renderPayments = this.renderPayments.bind(this);
  }

  state = {
    openPayment: false,
    RecruiterInfo: null
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.props.auth.credits !== nextProps.auth.credits) {
      this.props.fetchRecruiter(this.state.RecruiterInfo);
      this.handleNavigation();
    }
  }

  renderForm() {
    const fieldForm = FormField.map(FormField => {
      const validationType =
        FormField.name === "imgLogoURL"
          ? [required]
          : [required, maxLength25, minLength2];

      return (
        <Field
          key={FormField.name}
          name={FormField.name}
          type={FormField.type}
          component={renderField}
          label={FormField.label}
          validate={validationType}
        />
      );
    });
    return fieldForm;
  }

  onRecruiterSubmit(data) {
    const {
      name,
      industry,
      website,
      jobsOpen,
      primaryContact,
      imgLogoURL
    } = data;
    const employees = this.props.auth._id;
    const activeEvents = this.props.event._id;
    const RecruiterInfo = {
      name,
      industry,
      website,
      jobsOpen,
      primaryContact,
      imgLogoURL,
      employees,
      activeEvents
    };

    this.setState({ openPayment: true, RecruiterInfo: RecruiterInfo });
  }

  renderPayments() {
    return (
      <div>
        <Divider />
        <Payments />
      </div>
    );
  }

  handleNavigation = () => {
    this.props.history.push("/");
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      // <Container fluid>
      <Segment style={{ backgroundColor: "#f6f7f8" }}>
        <Form onSubmit={this.props.handleSubmit(this.onRecruiterSubmit)}>
          {this.renderForm()}
          <Divider />
          <div className="ui two buttons">
            <Button
              onClick={reset}
              disabled={pristine || submitting}
              type="button"
              basic
              color="red"
              size="large"
            >
              Clear Values
            </Button>
            <Button
              disabled={pristine || submitting}
              type="submit"
              basic
              color="teal"
              size="large"
            >
              Submit
            </Button>
          </div>
          {this.state.openPayment && this.renderPayments()}
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  event: state.event
});

RecruiterForm = reduxForm({
  form: "recruiter"
})(RecruiterForm);

export default withRouter(connect(mapStateToProps, actions)(RecruiterForm));
