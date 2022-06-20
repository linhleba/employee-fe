import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import * as api from '../api/index';
import './employeeDetail.css';
import EmployeeImage from '../components/EmployeeImage/EmployeeImage';
import EmployeePanel from '../components/EmployeePanel/EmployeePanel';

export const EmployeeDetailContext = createContext();
const EmployeeDetail = () => {
  const [employeeDetail, setEmployeeDetail] = useState([]);
  const pathname = window.location.pathname;
  const id = pathname.split('/')[2];
  useEffect(() => {
    async function getEmployeeById() {
      const detailData = await api.getEmployeeById(id);
      setEmployeeDetail(detailData);
    }
    getEmployeeById();
  }, []);
  return (
    <EmployeeDetailContext.Provider value={employeeDetail}>
      <Header headerName={employeeDetail?.fullName} isCreatableButton={false} />
      <div className="employee-detail__section">
        <EmployeeImage urlImage={employeeDetail?.urlImage} />
        <EmployeePanel employeeId={id} />
      </div>
    </EmployeeDetailContext.Provider>
  );
};

export default EmployeeDetail;
