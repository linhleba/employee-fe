import React, { useEffect, useState } from 'react';
import 'flowbite';
import StyledPagination from '../StyledPagination/StyledPagination';
import Table from './Table';
import * as api from '../../api/index';
import Search from '../Search/Search';
import store from '../../redux/configureStore';

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const reponseData = await api.getEmployee();

      // handle htmlFormat data
      setEmployeeData(reponseData);
    };

    fetchData();
  }, []);

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
          />
        }

        {/* <StyledPagination /> */}
        <br />
      </div>
    </>
  );
};

export default EmployeeTable;
