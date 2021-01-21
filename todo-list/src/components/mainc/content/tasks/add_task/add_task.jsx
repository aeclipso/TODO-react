import React, {useState} from "react"
import style from "./add_task.module.css"
import {addTask} from "../../../../../data/state";

const AddTask = (props) => {

    let options = [
        "срочный",
        "средний",
        "несрочный",
        "просрочено",
    ]

    let optionTags = options.map( (getOption) => {
        return(
            <option> Приоритет: {getOption} </option>
        );
    });

  const [form, setForm] = useState({
      text: '',
      date: '',
      priority: 'Приоритет: срочный'
  })

    const update = (e) => {
      console.log(e);
      setForm({
          ...form,
          [e.target.name]: e.target.value
      });
    };

    const addTaskEl = () => {
      props.addTask(form.text, form.date, form.priority);
    }

    return(
        <div>
            <div>
                <textarea className={style.inputarea}
                          value={props.newTaskText}
                          name='text'
                          onChange={update} />
            </div>
                <div className={style.otherinput}>
                    <div>
                        <input  className={style.inputs + ' ' + style.inputs_size}
                                type="date"
                                onChange={update}
                                name='date'/>
                    </div>
                    <div>
                        <select className={style.inputs + ' ' + style.inputs_size}
                                onChange={update} name='priority'>
                            {optionTags}
                        </select>
                    </div>
                </div>
            <div>
                <button className={style.inputs_border} onClick={ addTaskEl }>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTask;