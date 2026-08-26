import './App.css'
import Background from './components/Background'
import TopBar from './components/TopBar'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
        <TopBar /> 
        <Background src='https://cdn.pixabay.com/photo/2025/09/19/05/48/mountain-range-9842371_1280.jpg'/>
        <LoginPage /> 
    </>
  )
}

export default App
