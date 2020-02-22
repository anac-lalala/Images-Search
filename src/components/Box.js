import React from 'react';
import './styles/Box.css'


class Box extends React.Component {
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

            <ul className="image-container list-unstyled">
                {this.props.box.map((box) => {
                    return (
                        <li key={box.id}>
                            <img className="image-general" src={box.webformatURL}></img>
                            <p className="image-description text-light" >Tags: {box.tags}</p>
                        </li>
                    )
                }
                )}

            </ul>
        )
    }
}

export default Box;
