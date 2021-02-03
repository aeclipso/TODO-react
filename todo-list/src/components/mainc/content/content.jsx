import React from 'react';
import PropTypes from 'prop-types';
import style from './content.module.css';
import { Tasks } from './tasks/tasks';
import { AddTask } from './tasks/add_task/add_task';
import { SortBtn } from './sort_btn/sort_btn';

export const Content = ({
  tasksProps,
  addTask,
  delTask,
  getNextSort,
  sortIndex,
  changeComplete,
  editTask
}) => {
  const tasksTags = tasksProps.map((getTag, index) => (
    <Tasks
      key={index}
      id={getTag.id}
      text={getTag.text}
      head={getTag.title}
      date={getTag.date}
      priority={getTag.priority}
      complete={getTag.complete}
      delTask={delTask}
      changeComplete={changeComplete}
      editTask={editTask}
    />
  ));

  return (
    <div className={style.content}>
      <SortBtn
        getNextSort={getNextSort}
        sortIndex={sortIndex}/>
      {tasksTags}
      <AddTask addTask={addTask} />
    </div>
  );
};

Content.propTypes = {
  taskProps: PropTypes.object,
  addTask: PropTypes.func,
  delTask: PropTypes.func,
  editTask: PropTypes.func
};
