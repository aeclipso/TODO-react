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

  let backColor = {
    backgroundColorRed: `rgb(211,51,34)`,
    background: `linear-gradient(15deg, rgba(195,108,34,1) 0%, rgba(253,45,45,1) 100%)`,
  };

  let backColorYellow = {
    backgroundColor: `rgb(195,108,34)`,
    background: `linear-gradient(205deg, rgba(195,108,34,1) 0%, rgba(250,253,45,1) 100%)`
  };

  let backColorGreen = {
    backgroundColor: `rgb(34,195,92)`,
    background: `linear-gradient(45deg, rgba(34,195,92,1) 0%, rgba(58,253,45,1) 100%)`
};
  return (
    <div
      className={style.task}
      id={id} style={backColorGreen}>
      <h2>{head}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <p>{priority}</p>
      <input type="checkbox"/>
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
