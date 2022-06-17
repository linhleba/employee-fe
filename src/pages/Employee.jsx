import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/EmployeeTable';
import PopUp from '../components/PopUp/PopUp';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

const Employee = () => {
  const [openPopup, setOpenPopup] = useState(true);
  const textDisplayPopup = 'Add New Employee';

  const handleInfo = () => {};
  return (
    <>
      <Header />
      <Table />
      <PopUp
        title={textDisplayPopup}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm handleInfo={handleInfo} />
      </PopUp>
    </>
  );
};

export default Employee;
