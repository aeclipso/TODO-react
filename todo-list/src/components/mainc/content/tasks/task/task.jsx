import React from 'react';
import style from './task.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react'
import {EditTask} from './editTask'

export const Task = ({
  text,
  head,
  id,
  date,
  priority,
  delTask,
  complete,
  changeComplete,
  editTask
}) => {
  const delTaskElem = id;
  const deleteTaskEl = () => {
    delTask(delTaskElem);
  };
  const [isComplete, setComplete] = useState(!complete);

  const handleChange = () => {
    setComplete(!isComplete);
    changeComplete(isComplete, id);
  }

  const handleEditTask = () => {

  }


  const getDiffDate = (date) => {
    let taskDate;
    if (date === ''){
      taskDate = new Date();
    }
    else {
      taskDate = new Date(date);
    }
    let today =  new Date();
    let diffDays = Math.round((taskDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return(diffDays);
  };

  const getStyle = () => {
    let numStyle = getDiffDate(date);
    if (numStyle >= 5){
      return (style.backColorGreen);
    }
    else if(numStyle >= 3){
      return (style.backColorYellow);
    }
    else {
      return (style.backColorRed);
    }
  }

  return (
    <div
      className={`${style.task} + ${!isComplete ? style.complete : ''} ${getStyle()}`}>
      <h2>{head}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <p>{priority}</p>
      <EditTask text={text} id={id} date={date} priority={priority} state={false}/>
      <input onChange={handleChange} type="checkbox" defaultChecked={complete} />
      <button onClick={deleteTaskEl}>Удалить</button>
      <button onClick={handleEditTask}>Редактировать</button>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  head: PropTypes.string,
  key: PropTypes.number,
  date: PropTypes.number,
  priority: PropTypes.string,
  complete: PropTypes.bool,
  delTask: PropTypes.func,
  editTask: PropTypes.func
}
