import React from "react"
import style from "./add_task.module.css"

const AddTask = (props) => {

    const newTaskElem = React.createRef();

    let addTaskEl = () => {
        let text = newTaskElem.current.value;
        props.addTask(text);
    }

    let onTaskChange = () => {

    }

    return(
        <div>
            <div className={style.textarea}>
                <textarea ref={newTaskElem}
                          value={props.newTaskText}
                          onChange={onTaskChange}/>
            </div>
            <div>
                <button onClick={ addTaskEl }>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTask;