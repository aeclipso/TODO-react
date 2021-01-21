import React from 'react';
import style from './task.module.css';

const Task = (props) => {
  const delTaskElem = props.id;

  const deleteTaskEl = () => {
    props.delTask(delTaskElem);
  };

  return (
    <div className={style.task}>
      <h2>{props.head}</h2>
      <p>{props.text}</p>
      <p>{props.date}</p>
      <p>{props.priority}</p>

      <button onClick={deleteTaskEl}>Удалить</button>
    </div>
  );
};

export default Task;
