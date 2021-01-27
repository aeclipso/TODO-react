import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './add_task.module.css';

export const AddTask = ({ addTask }, props) => {
  const options = [
    'срочный',
    'средний',
    'несрочный',
    'просрочено',
  ];

  const optionTags = options.map((getOption) => (
    <option>
      Приоритет:
      {' '}
      {getOption}
    </option>
  ));

  const [form, setForm] = useState({
    text: '-',
    date: Date.now(),
    priority: 'Приоритет: срочный',
  });

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTaskEl = () => {
    addTask(form.text, form.date, form.priority);
  };

  return (
    <div>
      <div>
        <textarea
          className={style.inputarea}
          value={props.newTaskText}
          name="text"
          onChange={update}
        />
      </div>
      <div className={style.otherinput}>
        <div>
          <input
            className={`${style.inputs} ${style.inputs_size}`}
            type="date"
            onChange={update}
            name="date"
          />
        </div>
        <div>
          <select
            className={`${style.inputs} ${style.inputs_size}`}
            onChange={update}
            name="priority"
          >
            {optionTags}
          </select>
        </div>
      </div>
      <div>
        <button className={style.inputs_border} onClick={addTaskEl}>Добавить задачу</button>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func
}