import React, { useContext } from 'react';
import Controls from '../controls/Controls';
import Header from '../Header/Header';
import './information.css';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';
import Box from '@material-ui/core/Box';

const Information = () => {
  const employeeDetail = useContext(EmployeeDetailContext);
  console.log('value is', employeeDetail);
  return (
    <>
      <h3 style={{ fontWeight: 'bold', fontSize: 'large' }}>Information</h3>
      <div className="info-section">
        <Controls.Input
          name="startDate"
          value={'Start date: ' + employeeDetail.startDate}
          disabled
        />
        <Controls.Input
          name="team"
          value={'Team: ' + employeeDetail?.teamName}
          disabled
        />

        <Controls.Input
          name="address"
          value={'Address: ' + employeeDetail.address}
          disabled
        />
        <Controls.Input
          name="money"
          value={'Salary/hour: ' + employeeDetail.money + '$'}
          disabled
        />
      </div>
    </>
  );
};

export default Information;
