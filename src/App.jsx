import './App.css'
import Dashboard from './component/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'

function App() {
  

  return (
    <div className="App">
      
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      
      
  </div>
  )
}

export default App
