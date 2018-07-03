import React from 'react'
import Aux from '../components/hoc/Aux'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
// import BlogCard from '../BlogCard/BlogCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Blog extends React.Component {

    componentDidMount() {
        this.loadBlog()
    }

    render (props) {
        return (
    <Aux>
    <div className="App">
        <div className="App-header">
        <Navbar/>
        <Jumbotron/>
        {/* <BlogCard/> */}
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

export default Blog