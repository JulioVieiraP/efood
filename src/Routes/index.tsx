import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Produtos/:id" element={<Produtos />} />
    </Routes>
  )
}

export default RouterView
