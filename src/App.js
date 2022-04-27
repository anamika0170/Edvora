import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navs from './components/Navs';
import Past from './components/Past';
import Upcoming from './components/Upcoming';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/upcomming-rides' element={<Upcoming/>}/>
        <Route exact path='/past-rides' element={<Past/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
