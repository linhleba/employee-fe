import React from 'react';
import Pagination from '@mui/material/Pagination';

const StyledPagination = () => {
  return (
    <Pagination
      color="primary"
      count={10}
      size="large"
      // onChange={(event, page) => selectPage(page - 1)}
    />
  );
};

export default StyledPagination;
