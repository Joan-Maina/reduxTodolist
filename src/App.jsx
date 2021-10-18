import './App.css';
import ToDos from './components/ToDos';
import Footer from './components/Footer';
import Form from './components/Form';
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector(state => state);
  
      
  return (
    <div className="App">
      <Form />
      {state.todos.length > 0 ?<ToDos todos={state.todos} /> : 'No To-dos to show'}
      <Footer />
    </div>
  );
}

export default App;
