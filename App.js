
import './App.css';
import Home from './home/Home';
import { Route, Routes,  } from 'react-router-dom';
import NotFund from './home/NotFund';
import AddEmploye from './home/AddEmploye';
import View from './View';
function App() {
  return (
    <div className="App">


      <Routes>

   

<Route path='/' element={<Home />} />
<Route path='addEmploye' element={<AddEmploye />} />
<Route path="employee/edit/:id" element={<AddEmploye />} />
<Route path="view" element={<View />} />
  <Route path='*' element={<NotFund />} />


  </Routes>

    </div>
  );
}

export default App;
