import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPicker, 
  DateRangePicker, 
  SingleDatePicker, 
  DayPickerRangeController, 
  DayPickerSingleDateController 
} from 'react-dates';
import { 
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Icon,
  Popup,
  Card,
  Rating
} from 'semantic-ui-react';
import 'react-dates/lib/css/_datepicker.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Details extends Component {
  constructor(props) {
    super(props);
    this.copyAddress = this.copyAddress.bind(this);
  }
  
  state = {
    copyAddress: 'Click to copy!'
  }

  copyAddress() {
    this.setState({ copyAddress: 'Copied!'})
    return <Button icon='world' bordered color='teal' />;
  }

  render() {
    return (
      <div>
        <Popup 
          trigger={<Button icon='calendar' bordered color='teal' />}
          on='click'>
          {/* <Popup.Header>Calendar</Popup.Header> */}
          <Popup.Content>
          <DayPickerSingleDateController />
          </Popup.Content>
        </Popup>
        <p>{this.props.event.date}</p>
        <Popup 
          trigger={
          <CopyToClipboard text={this.props.event.location}>
           <Button icon='world' bordered color='teal' />
          </CopyToClipboard>
        } 
          on='click'
          hideOnScroll>
          <Popup.Header><i>Copied!</i></Popup.Header>
        </Popup>
        <p>{this.props.event.location}</p>
        <Image
          bordered
          rounded
          size='large'
          src='https://i.stack.imgur.com/dApg7.png'
        />
      </div>
    )
  }
}

export default Details;