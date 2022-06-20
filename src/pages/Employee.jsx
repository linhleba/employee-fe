import React, { useState, useContext, createContext } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/EmployeeTable';
import PopUp from '../components/PopUp/PopUp';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';
import * as api from '../api/index';
import { setSnackbar } from '../redux/ducks/snackbar';
import { useDispatch } from 'react-redux';
import { fetchApi } from '../redux/ducks/fetchApi';

export const EmployeeContext = createContext();
const Employee = () => {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const textDisplayPopup = 'Add New Employee';

  const handleInfo = async (values, resetForm, employeeData) => {
    const status = await api.createEmployee(values);
    if (status == 201) {
      dispatch(setSnackbar(true, 'success', 'Create employee successfully'));
      dispatch(fetchApi());
      setOpenPopup(false);
      resetForm();
    } else {
      dispatch(setSnackbar(true, 'error', 'Something went wrong'));
    }
  };
  return (
    <EmployeeContext.Provider value={setOpenPopup}>
      <Header setOpenPopup={setOpenPopup} />
      <Table />
      <PopUp
        title={textDisplayPopup}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm handleInfo={handleInfo} />
      </PopUp>
    </EmployeeContext.Provider>
  );
};

export default Employee;
