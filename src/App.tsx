import { BrowserRouter } from 'react-router-dom'
import Globalstyle from './styles/Globalcss'
import RouterView from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Header />
      <div className="container">
        <RouterView />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
