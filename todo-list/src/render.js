import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import tasksProps from './data/state'
import {BrowserRouter} from "react-router-dom";
import {addTask} from './data/state'
import {delTask} from './data/state'

export let doRenderComp = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App tasksProps={tasksProps.objData}
                 addTask={addTask}
                 delTask={delTask}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
