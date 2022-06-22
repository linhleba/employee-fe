import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Table from '../components/Table/Table';
import * as api from '../api/index';
import './team.css';
import PopUp from 'components/PopUp/PopUp';
import TeamForm from 'components/TeamForm/TeamForm';
import { setSnackbar } from '../redux/ducks/snackbar';
import { useDispatch } from 'react-redux';

function Team() {
  const dispatch = useDispatch();
  const hData = ['No.', 'Team Name', 'Action'];
  const hDetailData = ['No.', 'Full Name', 'Phone', 'Address', 'Sex'];
  const [team, setTeam] = useState([]);
  const [employeeDetail, setEmployeeDetail] = useState([]);

  const textDisplayPopup = 'Create new team';
  const [openPopup, setOpenPopup] = useState(false);
  const fetchTeam = async () => {
    const data = await api.getTeam();
    setTeam(data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleViewDetails = (data) => {
    setEmployeeDetail(data.employees);
  };

  const handleInfo = async (values, resetForm) => {
    const status = await api.createTeam(values);
    if (status == 201) {
      dispatch(setSnackbar('true', 'success', 'Team created successfully'));
    } else {
      dispatch(setSnackbar('true', 'error', 'Something went wrong'));
    }
  };
  return (
    <>
      <Header headerName="Team" setOpenPopup={setOpenPopup} />
      {/* <DeleteRoundedIcon className="icon" /> */}
      <div className="wrapped-table">
        <div className="wrapped-table-1">
          <p>Total team: {team.length}</p>
          <Table
            isCheckedBox={false}
            headData={hData}
            bodyData={team ? team : []}
            ignoredData={['id', 'employees']}
            // specialData={['team']}
            isDelete={false}
            limit="5"
            handleViewDetails={handleViewDetails}
          />
        </div>
        <div className="wrapped-table-2">
          <p>Total employees: {employeeDetail.length}</p>
          <Table
            isCheckedBox={false}
            headData={hDetailData}
            bodyData={employeeDetail ? employeeDetail : []}
            ignoredData={[
              'id',
              'sex',
              'employees',
              'team',
              'money',
              'urlImage',
              'age',
              'startDate',
              'teamId',
            ]}
            // specialData={['team']}
            isDelete={false}
            isDetail={false}
            limit="5"
          />
        </div>
        <PopUp
          title={textDisplayPopup}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <TeamForm handleInfo={handleInfo} />
        </PopUp>
      </div>
    </>
  );
}

export default Team;
