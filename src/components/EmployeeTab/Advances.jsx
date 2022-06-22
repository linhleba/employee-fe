import React, { useContext, useEffect, useState } from 'react';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';
import Header from '../Header/Header';
import Table from '../Table/Table';
import * as api from '../../api/index';
import AdvanceForm from '../AdvanceForm/AdvanceForm';
import PopUp from '../PopUp/PopUp';
import { setSnackbar } from '../../redux/ducks/snackbar';
import { useDispatch } from 'react-redux';

const Advances = () => {
  const dispatch = useDispatch();
  const employeeDetail = useContext(EmployeeDetailContext);
  const hData = ['No.', 'Date', 'Money', 'Options'];
  const [advanceData, setadvanceData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const textDisplayPopup = 'Add new advance';
  const [fetchData, setFetchData] = useState(0);

  const fetchAdvanceData = async () => {
    const reponseData = await api.getAdvance(employeeDetail.id);

    // handle htmlFormat data
    setadvanceData(reponseData);
  };

  const handleDelete = async (index) => {
    console.log('index is', index);
    console.log('advance data', advanceData);
    const status = await api.deleteAdvance(advanceData[index].id);
    if (status == 200) {
      dispatch(setSnackbar(true, 'success', 'Deleted successfully'));
      fetchAdvanceData();
    } else {
      dispatch(setSnackbar(true, 'error', 'Something went wrong'));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getAdvance(employeeDetail.id);

      // handle htmlFormat data
      setadvanceData(reponseData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetchAdvanceData();
  }, [fetchData]);

  const handleInfo = async (values, resetForm) => {
    const payload = {
      ...values,
      employee: {
        id: employeeDetail.id,
      },
    };

    const status = await api.createAdvance(payload);

    if (status == 201) {
      dispatch(setSnackbar(true, 'success', 'Create working successfully'));
      setOpenPopup(false);
      setFetchData(fetchData + 1);
      resetForm();
    } else {
      dispatch(setSnackbar(true, 'error', 'Something went wrong'));
    }
  };
  return (
    <>
      <Header headerName="Advances" setOpenPopup={setOpenPopup} />
      <Table
        isCheckedBox={false}
        headData={hData}
        ignoredData={['id', 'employee']}
        bodyData={advanceData ? advanceData : []}
        isDetail={false}
        handleDelete={handleDelete}
        limit={3}
      />
      <PopUp
        title={textDisplayPopup}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AdvanceForm handleInfo={handleInfo} />
      </PopUp>
    </>
  );
};

export default Advances;
