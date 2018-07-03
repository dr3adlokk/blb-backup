import React from 'react'
import Aux from '../components/hoc/Aux'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import EpiCard from '../components/EpiCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Episode extends React.Component {

    componentDidMount() {
        this.loadEpisode()
    }
    
    render (props) {
        return (
    <Aux>
    <div className="App">
        <div className="App-header">
        <Navbar/>
        <Jumbotron/>
        <EpiCard/>
        <Footer/>
        </div>
    </div>
    <main>
    { props.chilren }
    </main>
    </Aux>
    )
}
}
export default Episode