import React from "react"
import style from "./delete_task.module.css"

const DelTask = (props) => {

    const delTaskElem = props.id;

    let delTaskEl = () => {
        props.delTask(delTaskElem);
    }

    return(
            <div>
                <button onClick={ delTaskEl }>Удалить</ button>
            </div>
    )
}

export default DelTask;