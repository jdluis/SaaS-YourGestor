import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import InventaryPage from './pages/InventaryPage'
import ItemFormPage from './pages/ItemFormPage'
import Navigation from './components/Navigation'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path='/' element={<Navigate to="/inventary" />} />
        <Route path='/inventary' element={<InventaryPage />} />
        <Route path='/add-item' element={<ItemFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
