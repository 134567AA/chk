import Reserve from './event/page/Reserve'
import Timeout from './event/page/Timeout'
import Preview from './event/page/Preview';
import Discount from './event/page/Discount';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './event/main/Nav';
import Login from './event/page/Login';
import Join from './event/page/Join';





function App() {
  return (
   
  <BrowserRouter>   
       <Nav />   
         <Routes>
         <Route path="/preview" element={<Preview/>}/>
          <Route path="/reserve" element={<Reserve/>} />
           <Route path="/discount" element={<Discount />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/timeout" element={<Timeout />} /> 
           <Route path="/join" element={<Join />} />
      </Routes> 
    </BrowserRouter> 
 

 
     

  );
}
export default App;
