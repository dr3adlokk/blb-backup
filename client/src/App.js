import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/Navbar'
// import Jumbotron from './components/Jumbotron'
// import EpiCard from './components/EpiCard'
// import Footer from './components/Footer'
import './App.css'
import Home from './Layouts/Home';
import Episode from './Layouts/Episode';
import Blog from './Layouts/Blog';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const App = () => (
     <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/episode" component={Episode} />
        <Route exact path="/blog" component={Blog} />
        </Switch>
    </Router>
);

export default App;
