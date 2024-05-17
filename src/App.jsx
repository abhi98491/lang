import React from 'react'
import Tamil from './Tamil/Tamil'
import Home from './home/Home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Lang from './lang/Lang'
import Telugu from './Telugu/Telugu'
import Hindi from './Hindi/Hindi'
import Kannada from './Kannada/Kannada'
import Malyalam from './Malyalam/Malyalam'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/Home' element={<Home />}/>
      <Route path='/tamil' element={<Tamil/>}/>
      <Route path='/lang' element={<Lang />}/>
      <Route path='/telugu' element={<Telugu />}/>
      <Route path='/hindi' element={<Hindi />}/>
      <Route path='/Kannada' element={<Kannada />}/>
      <Route path='/Malyalam' element={<Malyalam />}/>
    </Routes>
    <Navbar />
    
  
    
    
    </div>
  )
}

export default App

