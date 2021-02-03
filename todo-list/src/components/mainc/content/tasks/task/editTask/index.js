import s from './style.module.css'
import cn from 'classnames'

export const EditTask = ({
  text,
  id,
  date,
  priority,
  state}) => {

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

  return(
      <div className={cn(s.disabled, {[s.edit] : false})}>
        <div>
          <textarea
            name="text"
          />
        </div>
        <div>
          <input type="date"/>
          <select name="priority" id="">
            {optionTags}
          </select>
        </div>
        <div>
          <button>OK</button>
          <button>Отменить</button>
        </div>
      </div>
  )
}