import React from 'react'

class NavBar extends React.Component{
    
    handleChange = (e) => {
        console.log({
            value : e.target.value,
            name : e.target.name
        })
    }

    handleClick = (e) => {
        console.log("Button Clicked")
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")
    }

    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-Brand">Images Search</h1>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <input name="Category" onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search by tag" aria-label="Search"></input>
                    <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        )
    }
}

export default NavBar