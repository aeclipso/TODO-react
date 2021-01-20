import './App.css';
import Main from "./components/mainc/main"

const App = (props) => {
  return (
    <div className="App">
      <Main taskProps={props.tasksProps}
            addTask={props.addTask}
            delTask={props.delTask}
      />
    </div>
  );
}

export default App;
