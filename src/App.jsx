import './index.css'
import FAQs from './pages/FAQs'
import Hero from './pages/Hero'
import Ourteam from './pages/Ourteam'
import Prize from './pages/Prize'

function App() {


  return (
    <div className='w-screen h-screen bg-[#8FD8EA]'>
      <Hero/>
      <Ourteam/>
      <FAQs/>
      <Prize/>
    </div>
  )
}

export default App
