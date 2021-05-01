import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

const DatePickerComponent = () => {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <DatePicker
            locale="ko"
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
        />
        );
      };
export default DatePickerComponent;
