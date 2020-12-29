import React from "react"
import style from "./add_task.module.css"

const AddTask = (props) => {

    const newTaskElem = React.createRef();

    let addTaskEl = () => {
    let text = newTaskElem.current.value;
    props.addTask(text);
    }

    return(
        <div>
            <div className={style.textar}>
                <textarea ref={newTaskElem}></textarea>
            </div>
            <div>
                <button onClick={ addTaskEl }>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTask;