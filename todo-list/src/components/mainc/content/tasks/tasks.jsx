import React from "react"
import style from "./tasks.module.css"
import Task from "./task/task";

const Tasks = (props) => {
    return(
        <div className={style.tasks}>
            <Task text={props.text} head={props.head}/>
        </div>
    )
}

export default Tasks;