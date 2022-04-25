import Home from './event/Home';
import Reserve from './event/page/Reserve'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Preview from './event/page/Preview';
import Discount from './event/page/Discount';




function App() {
  return (
   <>
    <BrowserRouter>
    <Home />
      <Routes>
         <Route path="/" element={<Preview />} />
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/discount" element={<Discount />} />
      </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
