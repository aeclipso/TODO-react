import React from 'react';
import PropTypes from 'prop-types';

export const SortBtn = ({ stateSortButton }) => {
  let nameBtn;

  if (stateSortButton === 0) {
    nameBtn = 'По важности';
  } else if (stateSortButton === 1) {
    nameBtn = 'По алфавиту';
  } else if (stateSortButton === 2) {
    nameBtn = 'По сроку истечения';
  } else {
    nameBtn = 'UNDEF';
  }

  return (
    <div>
      <button>{nameBtn}</button>
    </div>
  );
};

SortBtn.propType = {
  stateSortButton: PropTypes.number,
};
