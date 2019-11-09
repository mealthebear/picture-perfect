import React from 'react';
import ClientList from './ClientList.js';
import ClientForm from './ClientForm.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            bill: null,
            description: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                <h1>Picture Perfect</h1>
                <ClientList />
                <ClientForm onChange={this.handleChange}/>
            </div>
        )
    }
}

export default App;