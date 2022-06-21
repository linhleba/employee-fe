import React, { useEffect, useState } from 'react';
import 'flowbite';
import StyledPagination from '../StyledPagination/StyledPagination';
import Table from './Table';
import * as api from '../../api/index';
import Search from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState(null);
  const isFetch = useSelector((state) => state.fetchApi?.fetchEmployee);

  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getEmployee();

      // handle htmlFormat data
      setEmployeeData(reponseData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getEmployee();
      // handle htmlFormat data
      setEmployeeData(reponseData);
    };

    fetchData();
  }, [isFetch]);

  const hData = ['No.', 'Full Name', 'Phone', 'Team', 'Action'];

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
            ]}
            specialData={['team']}
            limit="5"
          />
        }

        {/* <StyledPagination /> */}
        <br />
      </div>
    </>
  );
};

export default EmployeeTable;
