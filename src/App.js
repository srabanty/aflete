import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Influencers from './Components/Influencers/Influencers';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/blog" component={Blog}>
        </Route>
        <Route path="/home" component={Home}>
        </Route>
        <Route path="/influencer" component={Influencers}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/contact" component={Contact}>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
