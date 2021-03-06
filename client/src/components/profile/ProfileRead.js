import React, { Component } from "react";
import {
  Button,
  Card,
  Icon,
  Image,
  Message,
  Table,
  Label
} from "semantic-ui-react";
import ReactDOM from "react-dom";
import profileFields from "../../constants/profileFields";
import ProfilePlaceholder from "../../assets/images/ProfilePlaceholder.png";
import "./profile.css";

class ProfileRead extends Component {
  constructor() {
    super();

		this.handleSizing = this.handleSizing.bind(this);
  }

  componentDidMount() {
		window.scrollTo(0, 0);
    window.addEventListener('resize',this.handleSizing)
	}

	componentWillUnmount() {
		window.removeEventListener('resize',this.handleSizing)
	}

	handleSizing() {
		const height = ReactDOM.findDOMNode(this.refs.profileRead).clientHeight;

    this.props.height(height);
	}

  renderMessage = () => (
    <Message positive>
      <Message.Header>Save successful!</Message.Header>
    </Message>
  );

  renderFields = profile =>
    profileFields.map(field => (
      <Table.Row key={field.name}>
        <Table.Cell>
          <Label color="teal" ribbon>
            {field.label}
          </Label>
          {profile[field.name]}
        </Table.Cell>
      </Table.Row>
    ));

  render() {
    const { profile, onUpdate, success } = this.props;

    return (
      <div ref="profileRead">
        <Card centered raised fluid>
          {success && this.renderMessage()}
          <Image
            src={profile.bigPhotoURL || ProfilePlaceholder}
            className="img-max-width"
            onLoad={this.handleSizing}
          />
          <Card.Content>
            <Card.Header>{profile.displayName}</Card.Header>
            <Card.Meta>
              <span>Joined in 2018</span>
            </Card.Meta>
            <Card.Description>
              <Table size="small" structured celled stackable>
                <Table.Body>{this.renderFields(profile)}</Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={onUpdate} basic color="teal" size="large">
                Update
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ProfileRead;
