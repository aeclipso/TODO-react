import React from 'react';
import style from './tasks.module.css';
import Task from './task/task';

const Tasks = (props) => (
  <div className={style.tasks}>
    <Task
      text={props.text}
      head={props.head}
      id={props.id}
      date={props.date}
      priority={props.priority}
      delTask={props.delTask}
    />
  </div>
);

export default Tasks;
