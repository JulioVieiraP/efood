import { BrowserRouter } from 'react-router-dom'
import Globalstyle from './styles/Globalcss'
import RouterView from './Routes'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <RouterView />
      <Footer />
      <SideBar />
    </BrowserRouter>
  )
}

export default App
