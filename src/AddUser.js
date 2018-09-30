import React, { Component } from 'react';

class AddUser extends Component {
    state = {
        name: null,
        age: null,
        email: null,
        website: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default AddUser;