import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const SortBtn = ({
  getNextSort,
  sortIndex
}) => {
  const nameArrBtn = [
    'Не отсортировано',
    'По важности',
    'По сроку истечения'
  ];

  const [btn, setBtn] = useState({
    sortIndex: 0,
  });

  const update = (e) => {
    setBtn({
      ...btn,
      [e.target.name]: e.target.value,
    });
 };

  const doSortElement = () => {
    getNextSort(sortIndex);
  }

  return (
    <div>
      <button onClick={doSortElement} onChange={update}>{nameArrBtn[sortIndex]}</button>
    </div>
  );
};

SortBtn.propType = {
  getNextSort: PropTypes.func,
  sortIndex: PropTypes.number
};
