import Header from "./components/Header.jsx";
import Login from "./pages/Login/login.jsx"
import Register from './pages/Registration/registration.jsx'
import { Routes, Route, Link } from 'react-router'

function App() {
  return (
    <div>
      <Header />
      
      {/* Add routes here */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App