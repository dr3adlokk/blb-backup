import React from 'react'
// import Aux from '../components/hoc/Aux'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import EpiCard from '../components/EpiCard'
// import EpiList from '../EpiList'
// import BlogCard from '../BlogCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Home extends React.Component {
    
    componentDidMount() {
        //this.loadHome()
    }

    render () {
        return (
            // <Aux>
            <div className="App">
                <Navbar />
                <Jumbotron />
                <EpiCard />
                <Footer />
            </div>
        )
    }   
}

export default Home