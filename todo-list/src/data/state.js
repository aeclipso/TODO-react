import { saveProps } from '../services/localstorage';
import moment from 'moment'

let doRenderComp = () => {};
export let sortIndex = 0;
const tasksProps = {
  objData: [],
};

const sortById = (object) => {
  tasksProps.objData = object.sort((a,b) => a.id > b.id);
}

const getValueOfPriority = (priority) =>{
  if (priority === 'Тип задачи: рабочая'){
    return (4);
  }
  else if(priority === 'Тип задачи: личная'){
    return (3);
  }
  else if( priority === 'Тип задачи: семейная'){
    return (2);
  }
  else if(priority === 'Тип задачи: дужеская'){
    return (1);
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
      break;
    case  1:
      sortByPriority(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      break;
    case 2:
      sortByDate(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      break;
    default:
      sortById(tasksProps.objData);
      doRenderComp(tasksProps);
      saveProps(tasksProps.objData);
      break;
  }
  if (sortIndex < 2){
    sortIndex += 1;
  }
  else {
    sortIndex = 0;
  }
}

export const getNextId = (propsObj) => {
  return propsObj.objData.reduce((acc, obj) => Math.max(acc, obj.id), -1) + 1;
};

export const addTask = (textTask, dateTask, priorityTask) => {
  let day;
  const newTaskObj = {
    id: getNextId(tasksProps),
    text: textTask,
    title: '',
    date: dateTask,
    priority: priorityTask,
    colorLeft: '#303030',
    colorRight: '#505050'
  };

  newTaskObj.title = `title of the task ${newTaskObj.id}`;
  newTaskObj.id = getNextId(tasksProps);
  if (typeof(newTaskObj.date) === 'string') {
    day =  moment(newTaskObj.date);
    newTaskObj.date = day.format('dd DD MM YYYY');
    if (newTaskObj.date === 'Invalid date'){
      day = moment();
      newTaskObj.date = day.format('dd DD MM YYYY');
    }
  }
  else if (typeof(newTaskObj.date) === 'function') {
    day = moment();
    newTaskObj.date = day.format('dd DD MM YYYY');
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

export const getColorForTask = (dateTime) => {
 console.log("This Function is deactivated");
}
export default tasksProps;

// TODO: 1) добавить возможность редактирования
// TODO: 2) добавить возможность помечать задачу выполненой
// TODO: 4) добавить цветовое выделение задачи, чтобы знать какая задача скоро просрочится