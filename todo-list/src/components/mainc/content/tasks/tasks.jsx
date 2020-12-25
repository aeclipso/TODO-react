import React from "react"
import style from "./tasks.module.css"
import Task from "./task/task";

const Tasks = (props) => {
    return(
        <div className={style.tasks}>
            <Task text="task1" head="task1"/>
            <Task text="task2" head="task2"/>
        </div>
    )
}

export default Tasks;