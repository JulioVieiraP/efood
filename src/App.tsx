import { BrowserRouter } from 'react-router-dom'
import Globalstyle from './styles/Globalcss'
import RouterView from './Routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <RouterView />
      <Footer />
    </BrowserRouter>
  )
}

export default App
