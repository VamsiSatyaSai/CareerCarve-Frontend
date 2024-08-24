import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import Booking from './components/Booking'


const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/booking' element={<Booking/>}/>
    </Routes>
    </BrowserRouter>
)

export default App