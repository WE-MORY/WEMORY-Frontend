import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const DatePickerComponent = () => {
      const [startDate, setStartDate] = useState(new Date());
      const [DataSet, SetDataSet] = useState([]);   

      const RenderChartData = () => {
        const DateFormat = moment(startDate).format('YYYY-MM-DD');
        try{
            console.log(DateFormat);
            // const response = await ChartMonthDataAPI('1', DateFormat);
        }catch(err){
            console.log(err);
        }
      }

      useEffect(()=>{
        RenderChartData();
      },[startDate])

      return (
        <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date);
            }}
            // SetDataSet={}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
        />
        );
      };
export default DatePickerComponent;
