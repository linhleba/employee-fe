import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import * as api from '../api/index';
import './employeeDetail.css';
import EmployeeImage from '../components/EmployeeImage/EmployeeImage';
import EmployeePanel from '../components/EmployeePanel/EmployeePanel';
import PopUp from '../components/PopUp/PopUp';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

export const EmployeeDetailContext = createContext();
const EmployeeDetail = () => {
  const [employeeDetail, setEmployeeDetail] = useState([]);
  const textDisplayPopup = `${employeeDetail?.fullName}`;
  const [openPopup, setOpenPopup] = useState(false);

  const pathname = window.location.pathname;

  const id = pathname.split('/')[2];
  useEffect(() => {
    async function getEmployeeById() {
      const detailData = await api.getEmployeeById(id);
      setEmployeeDetail(detailData);
    }
    getEmployeeById();
  }, []);
  const handleInfo = () => {};
  return (
    <EmployeeDetailContext.Provider value={employeeDetail}>
      <Header
        headerName={employeeDetail?.fullName}
        setOpenPopup={setOpenPopup}
        isCreatableButton={false}
      />
      <div className="employee-detail__section">
        <EmployeeImage urlImage={employeeDetail?.urlImage} />
        <EmployeePanel employeeId={id} />
      </div>
      <PopUp
        title={textDisplayPopup}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm handleInfo={handleInfo} employeeData={employeeDetail} />
      </PopUp>
    </EmployeeDetailContext.Provider>
  );
};

export default EmployeeDetail;
