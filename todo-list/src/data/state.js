let doRenderComp = () => {}let tasksProps = {    objData: [        {id: 0, text: "text of the 0 task", title: "title of the task 0" },    ],    saveProps : function () {        const itemForSave = JSON.stringify(this.objData);        console.log("SAVED: " + itemForSave + "\n LENGHT: " + this.objData.length);        localStorage.setItem("propsTasks", itemForSave);        // this.loadProps();    },    loadProps: function () {        let itemForLoad = JSON.parse(localStorage.getItem("propsTasks"));        console.log("Load: " + itemForLoad);        if (itemForLoad[0] !== null){            this.objData = itemForLoad;        }    }}export const getNextId = (propsObj) => {    // return (propsObj[propsObj.length - 1].id + 1);    return propsObj.length +1;}export let addTask = (textTask, dateTask, priorityTask) => {    let newTaskObj = {        id: getNextId(tasksProps.objData),        text: textTask,        title: "",        date: dateTask,        priority: priorityTask,    };    newTaskObj.title = `title of the task ${newTaskObj.id}`;    if (typeof (newTaskObj.date) === "string")        newTaskObj.date = Date();    if (newTaskObj.text === "")        newTaskObj.text = " - ";    tasksProps.objData.push(newTaskObj);    doRenderComp(tasksProps);    tasksProps.saveProps();}export let delTask = (idTask) => {    console.log("idTask: " + idTask);    tasksProps.objData.splice(idTask - 1, 1);    doRenderComp(tasksProps);    tasksProps.saveProps();}export const subscribe = (observer) => {    doRenderComp = observer;}export default tasksProps;window.global = tasksProps;//TODO: 1) добавить возможность редактирования//TODO: 2) добавить возможность помечать задачу выполненой//TODO: 3) добавить возможность определять тип задачи (рабочая/личная) возможно убрать приоритет и добавить это//TODO: 4) добавить цветовое выделение задачи, чтобы знать какая задача скоро просрочится//TODO: 5) добавить сортировку по дате и типу//TODO: 6) сохранять задачи в localStorage