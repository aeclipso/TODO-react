import React from 'react';
import style from './main.module.css';
import PropTypes from 'prop-types';
import { Content } from './content/content';

export const Main = ({
  taskProps,
  addTask,
  delTask
}) => (
  <div className={style.main}>
    <Content
      tasksProps={taskProps}
      addTask={addTask}
      delTask={delTask}
    />
  </div>
);

Main.propTypes = {
  taskProps: PropTypes.any,
  addTask: PropTypes.func,
  delTask: PropTypes.func
}
