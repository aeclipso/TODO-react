import React from 'react';
import style from './task.module.css';
import PropTypes from 'prop-types';

export const Task = ({
  text,
  head,
  id,
  date,
  priority,
  delTask
}) => {
  const delTaskElem = id;
  const deleteTaskEl = () => {
    delTask(delTaskElem);
  };

  return (
    <div className={style.task} id={id}>
      <h2>{head}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <p>{priority}</p>

      <button onClick={deleteTaskEl}>Удалить</button>
      <button>Редактировать</button>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  head: PropTypes.string,
  key: PropTypes.number,
  date: PropTypes.number,
  priority: PropTypes.string,
  delTask: PropTypes.func
}
