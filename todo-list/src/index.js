import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import tasksProps, { subscribe, addTask, delTask, getNextSort, sortIndex, getDiffDate } from './data/state'
import { saveProps, loadProps } from './services/localstorage';

export let doRenderComp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        tasksProps={tasksProps.objData}
        addTask={addTask}
        delTask={delTask}
        getNextSort={getNextSort}
        sortIndex={sortIndex}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

try {
  tasksProps.objData = loadProps();
} catch (err) {}

doRenderComp(tasksProps);
subscribe(doRenderComp);
saveProps(tasksProps.objData);
getDiffDate(tasksProps.objData.date);