import React from "react"
import style from "./content.module.css"
import Tasks from "./tasks/tasks"
const Content = (props) => {
    return(
        <div className={style.content}>
            <p>content</p>
            {/*for (let i = 0; i < 10; i++)*/}
        <Tasks />
        </div>
    )
}

export default Content;