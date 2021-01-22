import './App.css';
import ButtonPlus from './Components/ButtonPlus/ButtonPlus';
import InputMain from './Components/InputMain/InputMain';
import ListToDo from './Components/ListToDo/ListToDo';

function App() {
  return (
    <div className="App">
      <InputMain />
      <ButtonPlus />
      <ListToDo />
    </div>
  );
}

export default App;
