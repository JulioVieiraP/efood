import { BrowserRouter } from 'react-router-dom'
import Globalstyle from './styles/Globalcss'
import RouterView from './Routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { useSelector } from 'react-redux'
import { RootReducer } from './redux/store'

function App() {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  return (
    <BrowserRouter>
      <Globalstyle />
      <RouterView />
      <Footer />
      {isOpen && <Cart />}
    </BrowserRouter>
  )
}

export default App
