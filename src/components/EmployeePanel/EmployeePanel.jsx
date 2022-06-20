import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const EmployeePanel = ({ employeeId }) => {
  const [value, setValue] = useState(0);
  let pathname = window.location.pathname.split('/')[3];
  const [currentPath, setCurrentPath] = useState(pathname);
  console.log('path name of it is', pathname);

  //   useEffect(() => {
  //     setCurrentPath(pathname);
  //   }, [pathname]);

  const classValue = {
    active:
      'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
    unactive:
      'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
  };

  return (
    <div className="employee-panel">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="mr-5">
          <Link
            to="info"
            class={
              currentPath == 'info' ? classValue.active : classValue.unactive
            }
          >
            Information
          </Link>
        </li>
        <li class="mr-5">
          <Link
            to="working"
            class={
              currentPath == 'working' ? classValue.active : classValue.unactive
            }
          >
            Working
          </Link>
        </li>
        <li class="mr-5">
          <Link
            to="advances"
            class={
              currentPath == 'advances'
                ? classValue.active
                : classValue.unactive
            }
          >
            Advances
          </Link>
        </li>
        <li class="mr-5">
          <Link
            to="stats"
            class={
              pathname == 'stats' ? classValue.active : classValue.unactive
            }
          >
            Statistics
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default EmployeePanel;
