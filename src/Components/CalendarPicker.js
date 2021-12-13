import React from 'react';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import calendar from '../assets/images/calendar.png';

const currentDate = moment();
const endD = currentDate.format('Do MMM, YYYY');
const startD = moment(currentDate).subtract(1, 'days').subtract(1, 'years').format('Do MMM, YYYY');

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: { format: 'Do MMM, YYYY' }, 
      startDate: startD, 
      endDate: endD
    }
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(event, picker) {
    event.preventDefault();
    this.setState({ 
      startDate: picker.startDate.format('Do MMM, YYYY'),
      endDate: picker.endDate.format('Do MMM, YYYY'),
    });
  }

  render() {
    return (
      <DateRangePicker
        onApply={this.handleApply}
        initialSettings={{ locale: this.state.locale, startDate: this.state.startDate, endDate: this.state.endDate }}
      >
        <div className="calendar">
          <div className="icon"><img src={calendar} alt="calendar" /></div>
          <div className="text">{this.state.startDate} - {this.state.endDate}</div>
        </div>
      </DateRangePicker>
    )
  }
}