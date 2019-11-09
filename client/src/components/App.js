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
        e.preventDefault();
        let { firstName, lastName, bill, description } = this.state;
        axios.post('/api/photo', { firstName, lastName, bill, description })
             .then((response) => {
                 console.log(response)
             })
             .catch((error) => {
                 console.log('Uh oh! Couldn\'t submit client info!', error)
             })
    }

    render() {
        return (
            <div>
                <h1>Picture Perfect</h1>
                <ClientList />
                <ClientForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;