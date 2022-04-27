import Home from './event/Home';
import Reserve from './event/page/Reserve'
import Timeout from './event/page/Timeout'
import Preview from './event/page/Preview';
import Discount from './event/page/Discount';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import Main from './event/main/Main';
import Nav from './event/main/Nav';





function App() {
  return (
   <>
  <BrowserRouter>
    {/* <Nav />  */}
    <Home />
         <Routes>
         <Route path="/" element={<Preview />} />
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/discount" element={<Discount />} />
          <Route path="timeout" element={<Timeout />} /> 
      </Routes> 
    </BrowserRouter> 
    {/* <Main /> */}
 
     
 
   </>
  );
}
export default App;
