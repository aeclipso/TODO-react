export const saveProps = (objData) => {
  const itemForSave = JSON.stringify(objData);
  localStorage.setItem('propsTasks', itemForSave);
};

export const loadProps = () => {
  const itemForLoad = JSON.parse(localStorage.getItem('propsTasks'));
  if (itemForLoad[0] !== null) {
    return (itemForLoad);
  }
  return ({});
};
