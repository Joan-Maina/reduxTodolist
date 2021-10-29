import './App.css';
import ToDos from './components/ToDos';
import Footer from './components/Footer';
import Form from './components/Form';


function App() {
//get state
 // const state = useSelector(state => state);
  
      
  return (
    <div className="App">
      <Form />
      <ToDos />
      <Footer/>
    </div>
  );
}

export default App;
