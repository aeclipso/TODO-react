import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const SortBtn = ({
  getNextSort,
  sortIndex
}) => {
  console.log(sortIndex);
  const nameArrBtn = [
    'Не отсортировано',
    'По важности',
    'По сроку истечения'
  ];

  // const [btn, setBtn] = useState({ sortIndex  });
  const doSortElement = () => {
    getNextSort(sortIndex);
  }
  return (
    <div>
      <button onClick={doSortElement} >{nameArrBtn[sortIndex]}</button>
    </div>
  );
};

SortBtn.propType = {
  getNextSort: PropTypes.func,
  sortIndex: PropTypes.number
};
