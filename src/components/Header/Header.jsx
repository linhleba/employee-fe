import React from 'react';
// import Icon from '@mui/material/Icon';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Header.css';

const Header = () => {
  const headerName = 'Employee';
  return (
    <>
      <div className="header">
        <div className="header-name">
          <h3>{headerName}</h3>
        </div>
        <div className="header-action">
          <AddCircleIcon fontSize="large" id="icon" />
          <DeleteRoundedIcon fontSize="large" id="icon" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
