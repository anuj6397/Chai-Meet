
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import VideoRoom from './Components/VideoRoom';
import About from './Components/About';
import Question from './Components/Question';

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomID' element={<VideoRoom/>}/>
    <Route path='/about' element={<About/>}/>
     <Route path='/ques' element={<Question/>}/>
   </Routes>
    </>
    
  );
}

export default App;
