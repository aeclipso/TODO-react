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
            <div className={style.inputarea}>
                <textarea ref={newTaskElem}
                          value={props.newTaskText}
                          onChange={onTaskChange}/>

                <div className={style.otherinput}>
                    <div className={style.date}>
                        <input type="date"/>
                    </div>
                    <div className={style.priority}>
                        <select>
                            <option>Приоритет: срочный</option>
                            <option>Приоритет: средний</option>
                            <option>Приоритет: несрочный</option>
                            <option>Приоритет: просрочено</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={ addTaskEl }>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTask;