
import './App.css'
import AnimatedCard from './components/animatedCard'
import StaticCard from './components/Card'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
        <Button variant="destructive" >Click Me</Button>
        <StaticCard />
        <div className='m-28'></div>
        <AnimatedCard />
    </>
  )
}

export default App
