import { Component } from "react";

export default class LoginForm extends Component {
    state = {
        name: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setUser(this.state.name);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}