import { saveProps } from '../services/localstorage';

let doRenderComp = () => {};
const tasksProps = {
  objData: [],

};
export const getNextId = (propsObj) => {
  const len = propsObj.objData.length - 1;
  try {
    return propsObj.objData[len].id + 1;
  } catch (err) {
    return 0;
  }
};
export const addTask = (textTask, dateTask, priorityTask) => {
  const newTaskObj = {
    id: getNextId(tasksProps),
    text: textTask,
    title: '',
    date: dateTask,
    priority: priorityTask,
  };

  newTaskObj.title = `title of the task ${newTaskObj.id}`;
  newTaskObj.id = getNextId(tasksProps);
  if (newTaskObj.date === '') {
    newTaskObj.date = Date;
  }
  if (newTaskObj.text === '') {
    newTaskObj.text = ' - ';
  }
  tasksProps.objData.push(newTaskObj);
  doRenderComp(tasksProps);
  saveProps(tasksProps.objData);
};
export const delTask = (idTask) => {
  let idForDel;
  for (let i = 0; i < tasksProps.objData.length; i += 1) {
    if (tasksProps.objData[i].id === idTask) {
      idForDel = i;
    } else {
      idForDel = 0;
    }
  }
  tasksProps.objData.splice(idForDel, 1);
  doRenderComp(tasksProps);
  saveProps(tasksProps.objData);
};
export const subscribe = (observer) => {
  doRenderComp = observer;
};
export default tasksProps;

// TODO: 1) добавить возможность редактирования
// TODO: 2) добавить возможность помечать задачу выполненой
// TODO: 3) добавить возможность определять тип задачи (рабочая/личная) возможно
//  убрать приоритет и добавить это
// TODO: 4) добавить цветовое выделение задачи, чтобы знать какая задача скоро просрочится
// TODO: 5) добавить сортировку по дате и типу
