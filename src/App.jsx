import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import profilepic from './img/profile.jpg'

function App() {
  return(
    <div className='box'>
      <img src={profilepic} className='profile-pic' alt="profile pic" />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
