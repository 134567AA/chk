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
<<<<<<< HEAD
import Login from './event/page/Login';
=======
>>>>>>> f60cce6d70bc3e4854380efd11a0e75b1f264ac9





function App() {
  return (
   <>
  <BrowserRouter>
    {/* <Nav />  */}
<<<<<<< HEAD
    <Home ></Home>
=======
    <Home />
>>>>>>> f60cce6d70bc3e4854380efd11a0e75b1f264ac9
         <Routes>
         <Route path="/" element={<Preview />} />
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/discount" element={<Discount />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login />} /> 
          <Route path="/timeout" element={<Timeout />} /> 
      </Routes> 
    </BrowserRouter> 
    {/* <Main /> */}

=======
          <Route path="timeout" element={<Timeout />} /> 
      </Routes> 
    </BrowserRouter> 
    {/* <Main /> */}
>>>>>>> f60cce6d70bc3e4854380efd11a0e75b1f264ac9
 
     
 
   </>
  );
}
export default App;
