import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Bargraph from './components/Bargraph'
import LineGraph from './components/Linegraph'
import Areagraph from './components/Areagraph'
import Explorer from './components/Explorer'
import MapView from './components/MapView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' border-x-2 border-sky-700'> 
    <Header/>
    <div className='flex justify-evenly'>
      <Bargraph/>
      <LineGraph/>
      <Bargraph/>
      <Bargraph/>
      <Areagraph/>
    </div>
    <Explorer/>
    <MapView/>

    {/* <div className='flex m-y-4 border-b-2 border-sky-700'>
    <Areagraph/>
    <Areagraph/>
    <Bargraph/>
    </div> */}
    
    </div>
  )
}

export default App