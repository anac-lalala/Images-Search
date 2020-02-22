import React from 'react'
import NavBar from '../components/NavBar'
import Box from '../components/Box'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const URL = "https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25"
    
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((info) => {
                this.setState({
                    data: info.hits
                })
            })
            .catch((error) => console.log(error))
    }

    render() {


        return (
            <div>
                <NavBar />
                
                <div className="card-group">
                    <Box box={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default Home