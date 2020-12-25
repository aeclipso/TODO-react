import React from "react"
import style from "./add_task.module.css"

const AddTask = (props) => {
    return(
        <div>
            <div className={style.textar}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTask;