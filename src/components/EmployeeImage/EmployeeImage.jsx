import React, { useContext } from 'react';
import './employeeImage.css';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';

const EmployeeImage = ({ urlImage }) => {
  const employeeDetail = useContext(EmployeeDetailContext);
  return (
    <div className="employee-image">
      <img
        width="300px"
        src="https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png"
      ></img>

      <div className="employee-image__section1">
        <p className="badge blue-p">No: {employeeDetail.id}</p>
        <p className="badge green-p">Age: {employeeDetail.age}</p>
      </div>
      <div className="employee-image__section2">
        <p className="badge yellow-p">
          Sex: {employeeDetail.sex == 1 ? 'Female' : 'Male'}
        </p>
      </div>
    </div>
  );
};

export default EmployeeImage;
