import React from 'react';
import style from './task.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react'
import moment from 'moment'

export const Task = ({
  text,
  head,
  id,
  date,
  priority,
  delTask,
  complete
}) => {
  const delTaskElem = id;
  const deleteTaskEl = () => {
    delTask(delTaskElem);
  };
  const [isComplete, setComplete] = useState(false);
  const handleChange = () => {
    setComplete(!isComplete);
  }

  const getDiffDate = (date) => {
    console.log("DATE1: " + date);
    let day1 = moment(date).unix();
    // console.log("DATE1_: " + day1);

    let day2 = new Date();
    console.log("DATE2: " + day2);
    day2 = moment.now(day2) / 1000;
    // console.log("DATE2_: " + day2);

    const razd = 60 * 60 * 24;
  let diff = Math.round(day1/razd - day2/razd);
    // console.log("UNIX D1:" + moment(day1).unix());
    // console.log("UNIX D2:" + moment(day2).unix());
    // let diff =  (moment(day1).unix() - moment(day2).unix()) / (60 * 60 * 24);
    console.log("DIFF : " + diff);
    return (diff);
  };

  const getStyle = () => {
    let numStyle = getDiffDate(date);
    console.log("GETSTYLE : " + numStyle);
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
      className={`${style.task} + ${isComplete ? style.complete : ''} ${getStyle()}`}>
      <h2>{head}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <p>{priority}</p>
      <input onChange={handleChange} type="checkbox"/>
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
  complete: PropTypes.bool,
  delTask: PropTypes.func
}
