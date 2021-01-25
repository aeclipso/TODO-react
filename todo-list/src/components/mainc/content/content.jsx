import React from 'react';
import PropTypes from 'prop-types';
import style from './content.module.css';
import { Tasks } from './tasks/tasks';
import { AddTask } from './tasks/add_task/add_task'
import { SortBtn} from './sort_btn/sort_btn'

export const Content = ({
  tasksProps,
  addTask,
  delTask
}) => {
  const tasksTags = tasksProps.map((getTag) => (
    <Tasks
      text={getTag.text}
      key={getTag.id}
      head={getTag.title}
      date={getTag.date}
      priority={getTag.priority}
      delTask={delTask}
    />
  ));
console.log(tasksProps);
  return (
    <div className={style.content}>
      <SortBtn />
      {tasksTags}
      <AddTask addTask={addTask} />
    </div>
  );
};

Content.propTypes = {
  taskProps: PropTypes.object,
  addTask: PropTypes.func,
  delTask: PropTypes.func
}