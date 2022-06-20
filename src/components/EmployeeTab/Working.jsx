import React, { useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import Table from '../Table/Table';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';
import * as api from '../../api/index';

const Working = () => {
  const employeeDetail = useContext(EmployeeDetailContext);
  const hData = ['No.', 'Date', 'Hour', 'Options'];
  const [workingData, setworkingData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getWorking(employeeDetail.id);

      // handle htmlFormat data
      setworkingData(reponseData);
    };

    fetchData();
  }, []);
  return (
    <>
      <Header headerName="Working" />
      <Table
        isCheckedBox={false}
        headData={hData}
        ignoredData={['employee']}
        bodyData={workingData ? workingData : []}
      />
    </>
  );
};

export default Working;
