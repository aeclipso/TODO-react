import React from 'react';
import style from './main.module.css';
import Content from './content/content';

const Main = (props) => (
  <div className={style.main}>
    <Content
      tasksProps={props.taskProps}
      addTask={props.addTask}
      delTask={props.delTask}
    />
  </div>
);

export default Main;
