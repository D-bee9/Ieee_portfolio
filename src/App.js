import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'
import{Switch,Route} from 'react-router-dom'
import Footer from './Footer';

function App() {
  let style1={textAlign: "center",
  color:"blue"};
  return ( 
   <main> 
     <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/Contact" component={Contact} exact></Route>
     </Switch>
     <Footer/>

   </main>
  );
}


export default App;
