import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Grid,
  Segment
} from "semantic-ui-react";
import ProfileEdit from "./ProfileEdit";
import ProfileRead from "./ProfileRead";
import ProfileEvents from "./ProfileEvents";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  state = { showProfileReview: true, success: false, gridHeight: 0 };

  componentDidMount() {
    if (this.props.initialValues)
      this.setState({ profile: this.props.initialValues });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialValues !== nextProps.initialValues) {
      // Update profile when receive updated profile data
      if (nextProps.initialValues)
        this.setState({ profile: nextProps.initialValues });
      // Set success message when receive updates from express server
      if (this.props.initialValues) this.setState({ success: true });
    }
  }

  handleReturn() {
    this.setState({ showProfileReview: true });
  }

  handleCancel() {
    this.setState({ showProfileReview: true, success: false });
  }

  handleUpdate() {
    this.setState({ showProfileReview: false });
  }

  setHeight(height) {
    this.setState({ gridHeight: height });
  }

  renderEventContent() {
    return <ProfileEvents profile={this.state.profile} />;
  }

  renderProfileContent() {
    const { profile, showProfileReview, success } = this.state;

    if (showProfileReview && profile)
      return (
        <ProfileRead
          onUpdate={this.handleUpdate}
          success={success}
          profile={profile}
          height={this.setHeight}
        />
      );

    if (!showProfileReview && profile)
      return (
        <ProfileEdit
          onCancel={this.handleCancel}
          onReturn={this.handleReturn}
          height={this.setHeight}
        />
      );
  }

  renderTitle() {
    return (
      <Header as="h1" icon textAlign="center">
        <Header.Content>My Profile</Header.Content>
      </Header>
    );
  }

  render() {
    const { profile } = this.state;

    return (
      <Container className="profile-container">
        {this.renderTitle()}
        <Grid columns={2} textAlign="center" stackable centered>
          <Grid.Column>{this.renderProfileContent()}</Grid.Column>
          <Grid.Column textAlign="center">
            <Segment
              style={{ maxHeight: this.state.gridHeight, overflow: "auto" }}
              raised
            >
              <Header as="h1">My Events</Header>
              {profile && <ProfileEvents profile={profile} />}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

Profile = reduxForm(
  { form: "profile", enableReinitialize: true },
  mapStateToProps
)(Profile);

export default connect(mapStateToProps)(Profile);
