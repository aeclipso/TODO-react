let tasksProps ={
    objData: [
        {id: 0, text: "text of the 1 task", title: "title of the task 1"},
        {id: 1, text: "text of the 2 task", title: "title of the task 2"},
        {id: 2, text: "text of the 3 task", title: "title of the task 3"},
        {id: 3, text: "text of the 4 task", title: "title of the task 4"},
        {id: 4, text: "text of the 5 task", title: "title of the task 5"}
    ]
}

const getNextId = (propsObj) => {
    return (propsObj.length);
}

export let addTask = (textTask) => {
    let newTaskObj = {
        id: "99",
        text: textTask,
        title: `title of the 99 task`
    };

    tasksProps.objData.push(newTaskObj);
}



export default tasksProps;