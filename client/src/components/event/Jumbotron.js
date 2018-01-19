import React, { Component } from 'react';
import { 
  Segment,
  Container, 
  Header, 
  Button, 
  Icon,
  Label
} from 'semantic-ui-react';

class Jumbotron extends Component {
  state = {}

  render() {
    return (
    <div>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Container text>
          <Header
            as='h1'
            content='Coffee Meets Code Event'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}}
          />
          <Header
            as='h2'
            content='Network with developers and technical recruiters from high quality companies.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          {/* <Button primary size='huge' style={{ color: '#4eb2ac' }}>
            Test Your Skills
            <Icon name='right arrow' /> */}
          <Button as='div' labelPosition='right'>
          <Button color='teal'>
          <Icon name='fork' />
          Attend
          </Button>
          <Label as='a' basic color='teal' pointing='left'>228</Label>
          </Button>
          {/* </Button> */}
        </Container>
      </Segment>
    </div>

    )
}
}

export default Jumbotron;
