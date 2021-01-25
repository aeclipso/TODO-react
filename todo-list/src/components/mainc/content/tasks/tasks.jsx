import React from 'react';
import style from './tasks.module.css';
import PropTypes from 'prop-types';
import { Task } from './task/task';

export const Tasks = ({
  text,
  head,
  id,
  date,
  priority,
  delTask }) => (
  <div className={style.tasks}>
    <Task
      text={text}
      head={head}
      key={id}
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
  delTask: PropTypes.func
}
