import { saveProps } from '../services/localstorage';

let doRenderComp = () => {};
export let sortIndex = 0;
const tasksProps = {
  objData: [],
};

const sortById = (object) => {
  tasksProps.objData = object.sort((a,b) => a.id > b.id);
}

const getValueOfPriority = (priority) =>{
  if (priority === 'Приоритет: срочный'){
    return (4);
  }
  else if(priority === 'Приоритет: средний'){
    return (3);
  }
  else if( priority === 'Приоритет: несрочный'){
    return (2);
  }
  else if(priority === 'Приоритет: просрочено'){
    return (100);
  }
  else{
    return (0);
  }
}

const sortByPriority = (object) => {
  tasksProps.objData = object.sort((a,b)=>getValueOfPriority(a.priority) < getValueOfPriority(b.priority));
}

const sortByDate = (object) => {
  tasksProps.objData = object.sort((a,b) => a.date > b.date)
}

export const getNextSort = (typeOfSort) => {
  switch (typeOfSort){
    case 0:
      sortById(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      console.log("0");
      break;
    case  1:
      sortByPriority(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      console.log("1");
      break;
    case 2:
      sortByDate(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      console.log("2");
      break;
    default:
      sortById(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      console.log("3");
      break;
  }
  if (sortIndex < 2){
    sortIndex += 1;
  }
  else {
    sortIndex = 0;
  }
  console.log(tasksProps.objData);
}

export const getNextId = (propsObj) => {
  // const len = propsObj.objData.length - 1;
  // try {
  //   return propsObj.objData[len].id + 1;
  // } catch (err) {
  //   return 0;
  // }
  return propsObj.objData.reduce((acc, obj) => Math.max(acc, obj.id), -1) + 1;
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
  sortIndex = 0;
  getNextSort(sortIndex);
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
// TODO: 4) добавить цветовое выделение задачи, чтобы знать какая задача скоро просрочится