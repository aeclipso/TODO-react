import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './components/mainc/main';

export const App = ({
  tasksProps,
  addTask,
  delTask,
  getNextSort,
  sortIndex,
  changeComplete
}) => {
  return (
    <div className="App">
      <Main
        taskProps={tasksProps}
        addTask={addTask}
        delTask={delTask}
        getNextSort={getNextSort}
        sortIndex={sortIndex}
        changeComplete={changeComplete}
      />
    </div>);
};

App.propTypes = {
  taskProps: PropTypes.object,
  addTask: PropTypes.func,
  delTask: PropTypes.func,
  getNextSort: PropTypes.func,
  sortIndex: PropTypes.number
}
