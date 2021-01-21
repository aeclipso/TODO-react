import React from 'react';
import style from './content.module.css';
import Tasks from './tasks/tasks';
import AddTask from './tasks/add_task/add_task';

const Content = (props) => {
  const tasksTags = props.tasksProps.map((getTg) => (
    <Tasks
      text={getTg.text}
      head={getTg.title}
      id={getTg.id}
      date={getTg.date}
      priority={getTg.priority}
      delTask={props.delTask}
    />
  ));

  return (
    <div className={style.content}>
      {tasksTags}
      <AddTask addTask={props.addTask} />
    </div>
  );
};
export default Content;
