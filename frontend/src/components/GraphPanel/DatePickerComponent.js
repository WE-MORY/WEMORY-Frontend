import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

const DatePickerComponent = () => {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        );
      };
export default DatePickerComponent;
