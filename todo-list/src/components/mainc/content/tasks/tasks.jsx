import React from 'react';
import PropTypes from 'prop-types';
import style from './tasks.module.css';
import { Task } from './task/task';

export const Tasks = ({
  text,
  head,
  id,
  date,
  priority,
  delTask,
}) => (
  <div className={style.tasks}>
    <Task
      text={text}
      head={head}
      id={id}
      date={date}
      priority={priority}
      delTask={delTask}
    />
  </div>
);

Tasks.propTypes = {
  text: PropTypes.string,
  head: PropTypes.string,
  key: PropTypes.number,
  date: PropTypes.number,
  priority: PropTypes.string,
  delTask: PropTypes.func,
};
