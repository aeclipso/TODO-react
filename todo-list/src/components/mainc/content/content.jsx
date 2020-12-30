import React from "react"
import style from "./content.module.css"
import Tasks from "./tasks/tasks"
import AddTask from "./tasks/add_task/add_task";

const Content = (props) => {

    let tasksTags = props.tasksProps.map( (getTg) => {
        return( <Tasks
            text={getTg.text}
            head={getTg.title}
            id={getTg.id}
            delTask={props.delTask}
        />);
    });

    return(
        <div className={style.content}>
            <p>content</p>
            {tasksTags}
            <AddTask addTask={props.addTask}/>
        </div>
    )
}

export default Content;