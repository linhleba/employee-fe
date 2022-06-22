import React, { useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import Table from '../Table/Table';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';
import * as api from '../../api/index';
import PopUp from '../PopUp/PopUp';
import WorkingForm from '../WorkingForm/WorkingForm';
import { setSnackbar } from '../../redux/ducks/snackbar';
import { useDispatch } from 'react-redux';

const Working = () => {
  const dispatch = useDispatch();
  const employeeDetail = useContext(EmployeeDetailContext);
  const hData = ['No.', 'Date', 'Hour', 'Options'];
  const [workingData, setworkingData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const textDisplayPopup = 'Add new working';
  const [fetchData, setFetchData] = useState(0);

  const handleInfo = async (values, resetForm) => {
    const payload = {
      ...values,
      employee: {
        id: employeeDetail.id,
      },
    };

    const status = await api.createWorking(payload);

    if (status == 201) {
      dispatch(setSnackbar(true, 'success', 'Create working successfully'));
      setOpenPopup(false);
      setFetchData(fetchData + 1);
      resetForm();
    } else {
      dispatch(setSnackbar(true, 'error', 'Something went wrong'));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getWorking(employeeDetail.id);

      // handle htmlFormat data
      setworkingData(reponseData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getWorking(employeeDetail.id);

      // handle htmlFormat data
      setworkingData(reponseData);
    };

    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header headerName="Working" setOpenPopup={setOpenPopup} />
      <Table
        isCheckedBox={false}
        headData={hData}
        ignoredData={['id', 'employee']}
        bodyData={workingData ? workingData : []}
        limit="3"
        isDetail={false}
      />
      <PopUp
        title={textDisplayPopup}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <WorkingForm handleInfo={handleInfo} />
      </PopUp>
    </>
  );
};

export default Working;
