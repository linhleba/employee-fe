import React, { useEffect, useState, useRef } from 'react';
import Pagination from '@mui/material/Pagination';

const Table = ({
  headData,
  bodyData,
  isCheckedBox = true,
  ignoredData = [],
  specialData = [],
  limit = 5,
}) => {
  const [slicedData, setslicedData] = useState(
    limit && bodyData ? bodyData.slice(0, 5) : bodyData,
  );
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  //   const checkedBox = useRef();

  useEffect(() => {
    setslicedData(bodyData.slice(0, 5));
  }, [bodyData]);

  const [currentPage, setcurrentPage] = useState(0);
  let range = bodyData
    ? [...Array(Math.ceil(bodyData.length / limit)).keys()]
    : 1;
  const selectPage = (page) => {
    const start = limit * page;
    const end = start + limit;
    setslicedData(bodyData.slice(start, end));
    setcurrentPage(page);
  };

  const handleAllCheckboxes = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(bodyData.map((data, index) => index));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleCheckBox = (e) => {
    const { id, checked } = e.target;
    setIsCheck((state) => [...state, parseInt(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)));
    }
  };

  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          key="thead"
        >
          <tr>
            {isCheckedBox ? (
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    checked={isCheckAll}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      handleAllCheckboxes(e);
                    }}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
            ) : null}

            {headData &&
              headData.map((data, index) => {
                return (
                  <th scope="col" className="px-6 py-3" key={index}>
                    {data}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody key="tbody">
          {slicedData &&
            slicedData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {isCheckedBox ? (
                    <td className="w-4 p-4" key={index}>
                      <div className="flex items-center">
                        <input
                          checked={isCheck.includes(
                            index + currentPage * limit,
                          )}
                          onChange={handleCheckBox}
                          id={index + currentPage * limit}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                  ) : null}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {index + 1}
                  </th>

                  {Object.entries(item).map((value, index) => {
                    if (specialData.includes(value[0])) {
                      return (
                        <td
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          key={index}
                        >
                          {value[1].name}
                        </td>
                      );
                    } else if (!ignoredData.includes(value[0])) {
                      return (
                        <td
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          key={index}
                        >
                          {value[1]}
                        </td>
                      );
                    }
                  })}
                  {/* <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {item.fullName}
                </td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.team}</td> */}

                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        color="primary"
        count={range.length}
        size="large"
        onChange={(event, page) => selectPage(page - 1)}
      />
    </>
  );
};
export default Table;
