import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Html from '../components/Html'
import Bootstrap from "./Bootstarp"
import JavaScript from "./Javascript"
import Css from "./Css"
import Programming from "./Programming"
import './Task.css';
export default function Task(){
    return(
       <div className="container-fluid">
        <BrowserRouter> 
         <h4>COURSE:-FRONT-END WEBDEVELOPER </h4>
         <div>
          <ul>
            <li>
            <Link to="html" >html</Link>
            </li>
            <li>
            <Link to="css" >css</Link>
            </li>
            <li>
            <Link to="bootstrap" >bootstrap</Link>
            </li>
            <li>
            <Link to="javascript" >javascript</Link>
            </li>
          </ul>
         
         </div>
            <h4><Link to="programing">PROGRAMMING LANGUAGE:- JavaScript</Link></h4>
         <Routes>
          <Route path="/html" element={<Html/>}></Route>
          <Route path="/css" element={<Css/>}></Route>
          <Route path="/bootstrap" element={<Bootstrap/>}></Route>
          <Route path="/javascript" element={<JavaScript/>}></Route>
          <Route path="/programing" element={<Programming/>}></Route>
         </Routes>
         </BrowserRouter>
         <BrowserRouter>
         <h4>sample programs</h4>
       <a href="https://www.w3schools.com/html/default.asp"> Html sample code</a><br/>
       <a href="https://www.w3schools.com/css/default.asp"> css sample code</a><br/>
       <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp"> bootstrap sample code</a><br/>

       <a href="https://www.w3schools.com/js/default.asp"> javascript sample code</a><br/>
         <Routes>
          <Route>

          </Route>
         </Routes>
         </BrowserRouter>
       </div>
      
    )  
}

