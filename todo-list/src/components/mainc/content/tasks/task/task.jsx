import React from "react"
import style from "./task.module.css"
import DelTask from "../delete_task/delete_task";

const Task = (props) => {
    return(
        <div className={style.task}>
            <h2>{props.head}</h2>
            <p>{props.text}</p>
            <DelTask id={props.id}
                     delTask={props.delTask}/>
        </div>
    )
}

export default Task;