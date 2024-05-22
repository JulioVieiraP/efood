import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>Ola mundo</div>} />
    </Routes>
  )
}

export default RouterView
