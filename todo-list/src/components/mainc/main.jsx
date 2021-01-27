import React from 'react';
import PropTypes from 'prop-types';
import style from './main.module.css';
import { Content } from './content/content';

export const Main = ({
  taskProps,
  addTask,
  delTask,
  getNextSort,
  sortIndex
}) => (
  <div className={style.main}>
    <Content
      tasksProps={taskProps}
      addTask={addTask}
      delTask={delTask}
      getNextSort={getNextSort}
      sortIndex={sortIndex}
    />
  </div>
);

Main.propTypes = {
  taskProps: PropTypes.any,
  addTask: PropTypes.func,
  delTask: PropTypes.func,
  getNextSort: PropTypes.func,
  sortIndex: PropTypes.number
};
