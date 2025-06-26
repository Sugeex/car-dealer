import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'
import MainFilter from './pages/MainPage/components/MainFilter/MainFilter'
import CarDetails from './pages/CarDetails/CarDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/filter' element={<MainFilter />} />
      <Route path='/details/:id' element={<CarDetails />} />
    </Routes>
  )
}

export default App
