import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import tasksProps from './data/state'
import {BrowserRouter} from "react-router-dom";
import {addTask} from './data/state'

ReactDOM.render(
  <BrowserRouter>
    <App tasksProps={tasksProps.objData} addTask={addTask}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
