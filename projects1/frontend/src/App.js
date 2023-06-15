import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateStudent from './CreateStudent';
import Student from './Student';
import UpdateStudent from './UpdateStudent';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>

        <Route path="/" element={<Student/>}></Route>
        <Route path='/create' element={<CreateStudent />}></Route>          
        <Route path='/update/:id' element={<UpdateStudent />}></Route>
      
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
