import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './add_task.module.css';

export const AddTask = ({ addTask }, props) => {
  const options = [
    'рабочая',
    'личная',
    'семейная',
    'дружеская',
  ];

  const optionTags = options.map((getOption) => (
    <option>
      Тип задачи:
      {' '}
      {getOption}
    </option>
  ));

  const [form, setForm] = useState({
    text: '',
    date: '',
    priority: 'Тип задачи: рабочая',
  });

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTaskEl = () => {
    addTask(form.text, form.date, form.priority);
    setForm({text: '', date: '', priority: 'Тип задачи: рабочая' });
  };

  return (
    <div>
      <div>
        <textarea
          className={style.inputarea}
          name="text"
          onChange={update}
          value={form.text}
        />
      </div>
      <div className={style.otherinput}>
        <div>
          <input
            className={`${style.inputs} ${style.inputs_size}`}
            type="date"
            onChange={update}
            name="date"
            value={form.date}
          />
        </div>
        <div>
          <select
            className={`${style.inputs} ${style.inputs_size}`}
            onChange={update}
            name="priority"
            value={form.priority}
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