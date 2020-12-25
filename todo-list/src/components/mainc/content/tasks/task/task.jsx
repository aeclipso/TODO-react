import React from "react"
import style from "./task.module.css"

const Task = (props) => {
    return(
        <div className={style.task}>
            <h2>{props.head}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Task;