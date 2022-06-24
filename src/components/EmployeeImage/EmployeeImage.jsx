import React, { useContext } from 'react';
import './employeeImage.css';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';

const EmployeeImage = ({ urlImage }) => {
  const employeeDetail = useContext(EmployeeDetailContext);
  return (
    <div className="employee-image">
      <div className="image-container">
        <img
          src={
            urlImage
              ? urlImage
              : employeeDetail.sex == 0
              ? 'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg'
              : 'https://cdn.imgbin.com/23/22/24/imgbin-user-profile-avatar-woman-icon-girl-avatar-woman-illustration-kHYcNyftbXz4rQG1TDtsHcyi1.jpg'
          }
        ></img>
      </div>

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
