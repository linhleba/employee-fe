import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'flowbite';
import StyledPagination from '../StyledPagination/StyledPagination';
import Table from './Table';
import * as api from '../../api/index';
import Search from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbar } from 'redux/ducks/snackbar';

const EmployeeTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState(null);
  const isFetch = useSelector((state) => state.fetchApi?.fetchEmployee);

  const handleViewDetails = (employeeData) => {
    // setOpenPopup(true);
    //  const employeeData = slicedData[index];
    navigate(`/employee/${employeeData.id}/info`);
  };
  const fetchData = async () => {
    const reponseData = await api.getEmployee();

    // handle htmlFormat data
    setEmployeeData(reponseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [isFetch]);

  const hData = ['No.', 'Full Name', 'Phone', 'Team', 'Action'];

  const handleDelete = async (index) => {
    console.log('idnex', index);
    console.log(employeeData);
    const status = await api.deleteEmpoyee(employeeData[index].id);
    if (status === 200) {
      dispatch(setSnackbar(true, 'success', 'Deleted employee successfully'));
      fetchData();
    } else {
      dispatch(setSnackbar(true, 'error', 'Something went wrong'));
    }
  };
  return (
    <>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Search />

        {
          <Table
            headData={hData}
            bodyData={employeeData ? employeeData : []}
            ignoredData={[
              'id',
              'age',
              'sex',
              'address',
              'startDate',
              'money',
              'urlImage',
              'teamId',
            ]}
            // specialData={['team']}
            limit="5"
            handleViewDetails={handleViewDetails}
            handleDelete={(index) => handleDelete(index)}
          />
        }

        {/* <StyledPagination /> */}
        <br />
      </div>
    </>
  );
};

export default EmployeeTable;
